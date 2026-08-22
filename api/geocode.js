export default async function handler(req, res) {
  const { q, limit, addressdetails, viewbox, bounded, countrycodes } = req.query;

  if (!q || q.trim().length < 3) {
    return res.status(400).json({ error: 'Query mesti sekurang-kurangnya 3 aksara.' });
  }

  try {
    const params = new URLSearchParams({
      format: 'json',
      q,
      countrycodes: countrycodes || 'my',
      limit: limit || '5',
      'accept-language': 'ms',
    });

    // Forward param opsyenal dari frontend (dulunya diabaikan sepenuhnya)
    if (addressdetails) params.set('addressdetails', addressdetails);
    if (viewbox) params.set('viewbox', viewbox);
    if (bounded) params.set('bounded', bounded);

    const url = `https://nominatim.openstreetmap.org/search?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        // Nominatim usage policy mewajibkan User-Agent/Referer yang jelas
        // mengenal pasti aplikasi — bukan default User-Agent library.
        'User-Agent': 'PetaKawasanJagaanJBPMJohor/1.0 (JBPM Johor - Peta Kawasan Jagaan)',
      },
    });

    if (!response.ok) {
      const bodyText = await response.text().catch(() => '');
      console.error('Nominatim ralat:', response.status, bodyText);
      return res
        .status(response.status)
        .json({ error: `Nominatim membalas ralat: ${response.status}` });
    }

    const data = await response.json();

    // Cache ringkas untuk kurangkan beban Nominatim & laju response
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=59');
    return res.status(200).json(data);
  } catch (error) {
    console.error('Ralat proxy geocode:', error);
    return res.status(500).json({ error: 'Gagal hubungi servis carian alamat.' });
  }
}