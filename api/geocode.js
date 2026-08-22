export default async function handler(req, res) {
  const { q, limit, addressdetails, viewbox, bounded, countrycodes } = req.query;
  const accept_language = req.query['accept-language'];

  if (!q || q.trim().length < 3) {
    return res.status(400).json({ error: 'Query mesti sekurang-kurangnya 3 aksara.' });
  }

  // --- Sanitasi/had parameter yang diterima daripada frontend ---
  // limit: had antara 1-10 (Nominatim usage policy - elak minta terlalu banyak)
  let limitSah = parseInt(limit, 10);
  if (isNaN(limitSah) || limitSah < 1) limitSah = 8;
  if (limitSah > 10) limitSah = 10;

  // addressdetails: 1 secara default (bagi butiran alamat lebih lengkap -
  // membantu bezakan hasil ambiguous/serupa dalam senarai cadangan)
  const addressdetailsSah = addressdetails === '0' ? '0' : '1';

  // viewbox: sahkan format "left,top,right,bottom" (4 nombor) sebelum diteruskan,
  // elak parameter tak sah/rosak dihantar terus ke Nominatim
  let viewboxSah = null;
  if (viewbox && /^-?\d+(\.\d+)?,-?\d+(\.\d+)?,-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(viewbox)) {
    viewboxSah = viewbox;
  }

  // bounded: hanya '1' membataskan hasil ketat dalam viewbox. Default '0'
  // (bias sahaja, tak menolak hasil sah di luar kawasan bias).
  const boundedSah = bounded === '1' ? '1' : '0';

  // countrycodes: default 'my', boleh override (cth carian rentas sempadan
  // berhampiran Kota Tinggi/Sebana Cove/Pengerang berdekatan Singapura)
  const countrycodesSah = countrycodes && /^[a-z]{2}(,[a-z]{2})*$/i.test(countrycodes) ? countrycodes : 'my';

  const acceptLanguageSah = accept_language || 'ms';

  const params = new URLSearchParams({
    format: 'jsonv2', // lebih lengkap dari 'json' (address breakdown, category, type)
    q: q,
    countrycodes: countrycodesSah,
    limit: String(limitSah),
    addressdetails: addressdetailsSah,
    'accept-language': acceptLanguageSah,
    dedupe: '1',
    bounded: boundedSah,
  });
  if (viewboxSah) params.set('viewbox', viewboxSah);

  const url = `https://nominatim.openstreetmap.org/search?${params.toString()}`;

  // Timeout eksplisit - elak function tergantung lama kalau Nominatim
  // lambat/tak respons, dan beri mesej ralat yang jelas kepada frontend
  // dari terus "diam" sampai Vercel function timeout sendiri.
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        // Nominatim usage policy mewajibkan User-Agent/Referer yang jelas
        // mengenal pasti aplikasi — bukan default User-Agent library.
        'User-Agent': 'PetaKawasanJagaanJBPMJohor/1.0 (JBPM Johor - Peta Kawasan Jagaan)',
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `Nominatim membalas ralat: ${response.status}` });
    }

    const data = await response.json();

    // Cache ringkas untuk kurangkan beban Nominatim & laju response
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=59');
    return res.status(200).json(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Ralat proxy geocode: timeout selepas 8s (Nominatim tidak respons)');
      return res.status(504).json({ error: 'Servis carian alamat mengambil masa terlalu lama. Sila cuba lagi.' });
    }
    console.error('Ralat proxy geocode:', error);
    return res.status(500).json({ error: 'Gagal hubungi servis carian alamat.' });
  } finally {
    clearTimeout(timeoutId);
  }
}