// ============================================
// DATA 34 BALAI BOMBA DAN PENYELAMAT JOHOR
// ============================================
const dataBalai = [
  // ZON 1 - JOHOR BAHRU (13)
  { nama: 'BBP Larkin (JB)', zon: 1, daerah: 'Johor Bahru', lat: 1.4854561788224945, lng: 103.75081990820912, tel: '07-2243444' },
  { nama: 'BBP Pasir Gudang', zon: 1, daerah: 'Johor Bahru', lat: 1.4643416318507871, lng: 103.89600906588159, tel: '07-2513444' },
  { nama: 'BBP Johor Jaya', zon: 1, daerah: 'Johor Bahru', lat: 1.531594273562039, lng: 103.79519160820901, tel: '07-3511444' },
  { nama: 'BBP Skudai', zon: 1, daerah: 'Johor Bahru', lat: 1.5384054976029675, lng: 103.62618860820908, tel: '07-5205144' },
  { nama: 'BBP Iskandar Puteri', zon: 1, daerah: 'Johor Bahru', lat: 1.4527885824622484, lng: 103.6205641217007, tel: '07-5099550' },
  { nama: 'BBP Tebrau', zon: 1, daerah: 'Johor Bahru', lat: 1.5237283247173334, lng: 103.75913396799398, tel: '07-3317523' },
  { nama: 'BBP Pekan Nenas', zon: 1, daerah: 'Pontian', lat: 1.5070458758702345, lng: 103.51421908078062, tel: '07-6994444' },
  { nama: 'BBP Pontian', zon: 1, daerah: 'Pontian', lat: 1.4921952528635996, lng: 103.38700343660228, tel: '07-6864444' },
  { nama: 'BBP Pontian Baru', zon: 1, daerah: 'Pontian', lat: 1.4850292041041675, lng: 103.40415745239008, tel: '07-6864044' },
  { nama: 'BBP Kulai', zon: 1, daerah: 'Kulai', lat: 1.658456457889051, lng: 103.60583249429396, tel: '07-6634444' },
  { nama: 'BBP Bandar Baru Kulai', zon: 1, daerah: 'Kulai', lat: 1.6579859203880312, lng: 103.62661719424169, tel: '07-5908711' },
  { nama: 'BBP Kempas', zon: 1, daerah: 'Johor Bahru', lat: 1.5271427241141524, lng: 103.73291787937283, tel: '07-2325474' },
  { nama: 'BBP Fire Post Benut', zon: 1, daerah: 'Pontian', lat: 1.63813001403506, lng: 103.25906880820891, tel: '07-6905839' },
  // ZON 2 - KOTA TINGGI (8)
  { nama: 'BBP Kota Tinggi', zon: 2, daerah: 'Kota Tinggi', lat: 1.7400726715952255, lng: 103.89888355053641, tel: '07-8831444' },
  { nama: 'BBP Sungai Rengit', zon: 2, daerah: 'Pengerang', lat: 1.3586296957880815, lng: 104.23142533704556, tel: '07-8246770' },
  { nama: 'BBP Bandar Penawar', zon: 2, daerah: 'Kota Tinggi', lat: 1.5584240268894343, lng: 104.22836464004762, tel: '07-8223692' },
  { nama: 'BBP Mersing', zon: 2, daerah: 'Mersing', lat: 2.4281597008384166, lng: 103.83968525238902, tel: '07-7994444' },
  { nama: 'BBP Endau', zon: 2, daerah: 'Mersing', lat: 2.6511667138213197, lng: 103.622388079372, tel: '07-7945444' },
  { nama: 'BBP Sebana Cove', zon: 2, daerah: 'Kota Tinggi', lat: 1.4111942637295485, lng: 104.20702710820935, tel: '07-8861641' },
  { nama: 'BBP Punggai', zon: 2, daerah: 'Kota Tinggi', lat: 1.42940813601492, lng: 104.27036571006252, tel: '07-8861952' },
  { nama: 'BBP Bandar Tenggara', zon: 2, daerah: 'Kulai', lat: 1.8512117790715301, lng: 103.61435888307892, tel: '07-8964498' },
  { nama: 'BBP Kuala Rompin', zon: 2, daerah: 'Kuala Rompin/Pahang', lat: 2.7995459952468162, lng: 103.48859615474312, tel: '09-4146444' },

  // ZON 3 - KLUANG (8)
  { nama: 'BBP Penggaram', zon: 3, daerah: 'Batu Pahat', lat: 1.8587485315341812, lng: 102.94072309627684, tel: '07-4345757' },
  { nama: 'BBP Kluang', zon: 3, daerah: 'Kluang', lat: 2.0342273939975697, lng: 103.31953787937219, tel: '07-7724444' },
  { nama: 'BBP Batu Pahat', zon: 3, daerah: 'Batu Pahat', lat: 1.85005904680567, lng: 102.92981160780664, tel: '07-4338444' },
  { nama: 'BBP Rengit', zon: 3, daerah: 'Batu Pahat', lat: 1.6801605554662105, lng: 103.15820093475241, tel: '07-4243444' },
  { nama: 'BBP Renggam', zon: 3, daerah: 'Kluang', lat: 1.8839022510131862, lng: 103.3999346812256, tel: '07-7535444' },
  { nama: 'BBP Yong Peng', zon: 3, daerah: 'Batu Pahat', lat: 2.01254932009085, lng: 103.06322993660169, tel: '07-4674444' },
  { nama: 'BBP Ayer Hitam', zon: 3, daerah: 'Batu Pahat', lat: 1.9046398311946404, lng: 103.16580533704466, tel: '07-7582206' },
  { nama: 'BBP Fire Post Parit Sulong', zon: 3, daerah: 'Batu Pahat', lat: 1.9734098250147893, lng: 102.86930995238934, tel: 'n/a' },
  // ZON 4 - MUAR (7)
  { nama: 'BBP Muar', zon: 4, daerah: 'Muar', lat: 2.0536025587250952, lng: 102.57234047937226, tel: '06-9555994' },
  { nama: 'BBP Bandar Baru Segamat', zon: 4, daerah: 'Segamat', lat: 2.498693444757604, lng: 102.87045925238905, tel: '07-9435844' },
  { nama: 'BBP Segamat', zon: 4, daerah: 'Segamat', lat: 2.5097396869375945, lng: 102.81377777937195, tel: '07-9314444' },
  { nama: 'BBP Labis', zon: 4, daerah: 'Segamat', lat: 2.380060008820531, lng: 103.01796330820825, tel: '07-9254444' },
  { nama: 'BBP Bukit Gambir', zon: 4, daerah: 'Tangkak', lat: 2.217126038710606, lng: 102.65990143704445, tel: '06-9765144' },
  { nama: 'BBP Tangkak', zon: 4, daerah: 'Tangkak', lat: 2.2709401263413143, lng: 102.54347515009461, tel: '06-9783444' },
  { nama: 'BBP Pagoh', zon: 4, daerah: 'Muar', lat: 2.136905853626598, lng: 102.73936700820836, tel: '06-9741955' },
  { nama: 'BBP Jasin Bestari', zon: 4, daerah: 'Jasin/Negeri Melaka', lat: 2.2987006825702365, lng: 102.41515029627601, tel: '06-5293736' },
  { nama: 'BBP Gemas', zon: 4, daerah: 'Bahau/Negeri Sembilan', lat: 2.578793081119071, lng: 102.6005081067373, tel: '07-9481333' },
];

// Senarai balai yang berada di luar negeri Johor
const balaiLuarNegeri = [
  'BBP Kuala Rompin',
  'BBP Gemas',
  'BBP Jasin Bestari'
];

// ============================================
// STATUS JENTERA (CFRT / EMRS / WATER TANKER)
// ============================================
const csvJenteraUrl = {
  cfrt: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQt0JkN2yWW_0FeY5GKpmIvs1uI6si89JcqNmSTO3f--rM8FhQZe1Q97YQd8tiAsmaMQdTXO5TQWedy/pub?gid=0&single=true&output=csv',
  emrs: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQt0JkN2yWW_0FeY5GKpmIvs1uI6si89JcqNmSTO3f--rM8FhQZe1Q97YQd8tiAsmaMQdTXO5TQWedy/pub?gid=795399708&single=true&output=csv',
  water: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQt0JkN2yWW_0FeY5GKpmIvs1uI6si89JcqNmSTO3f--rM8FhQZe1Q97YQd8tiAsmaMQdTXO5TQWedy/pub?gid=290336578&single=true&output=csv',
};

const ikonJentera = { cfrt: 'fa-truck', emrs: 'fa-truck-medical', water: 'fa-truck-droplet' };
const labelJenisJentera = { cfrt: 'CFRT / FRT', emrs: 'EMRS', water: 'Water Tanker' };

let dataJenteraByBalai = {};
let statusMuatJentera = 'belum';
const markerBalaiRujukan = [];

const aliasNamaBalai = {
  'FIRE POST BENUT': 'BENUT',
  'FIRE POST PARIT SULONG': 'PARIT SULONG',
  'LARKIN (JB)': 'LARKIN',
  'BANDAR PENAWAR': 'PENAWAR',
};

function normalisasiNamaBalai(nama) {
  let n = nama.toUpperCase().replace(/^BBP\s+/, '').trim();
  if (aliasNamaBalai[n]) return aliasNamaBalai[n];
  n = n.replace(/^FIRE POST\s+/, '').trim();
  return n;
}

const dataKetuaBalaiTel = {
  'LARKIN': { ketua: 'TPgB I Suhaimi bin Jamal', telBalai: ['07-2243444', '07-2247444'], telBimbit: '019-6887965' },
  'PASIR GUDANG': { ketua: 'TPgB II Firdaus bin Ahmad', telBalai: ['07-2513444', '07-2542544'], telBimbit: '019-7357842' },
  'JOHOR JAYA': { ketua: 'PKPgB Tc. Mohd Faiz bin Ramli', telBalai: ['07-3511444'], telBimbit: '019-7367842' },
  'SKUDAI': { ketua: 'PKPgB Tc. Saifulbahari bin Safar', telBalai: ['07-5205144', '4144'], telBimbit: '019-2277965' },
  'ISKANDAR PUTERI': { ketua: 'TPgB II Wan Fareezudin bin Wan Husain', telBalai: ['07-5099550'], telBimbit: '019-2487865' },
  'TEBRAU': { ketua: 'PPgB Muhamad Syahhir Ikhwan bin Mohd Shoib', telBalai: ['07-3317523', '07-3317524', '07-3317525'], telBimbit: '019-6157865' },
  'PEKAN NENAS': { ketua: 'PPgB Iqbal bin Raduan', telBalai: ['07-6994444'], telBimbit: '019-6097865' },
  'PONTIAN': { ketua: 'PPgB Mohamad Aznil Ikhwan bin Ibrahim', telBalai: ['07-6864444', '07-6874444'], telBimbit: '019-2307865' },
  'PONTIAN BARU': { ketua: 'PPgB Mahadir bin Mamat', telBalai: ['07-6864044', '07-6866044', '07-6868044'], telBimbit: '019-6917865' },
  'KULAI': { ketua: 'PPgB Muhammad Fauzi bin Awang', telBalai: ['07-6634444'], telBimbit: '019-2037865' },
  'BANDAR BARU KULAI': { ketua: 'PPgB Sarhan Akmal bin Mohamad', telBalai: ['07-5908711'], telBimbit: '019-3397865' },
  'KEMPAS': { ketua: 'PPgB Taufiq bin Atan', telBalai: ['07-2325474', '07-2327619'], telBimbit: '019-7237845' },
  'BENUT': { ketua: 'PPgB Mohamad Aznil Ikhwan bin Ibrahim', telBalai: ['07-6905839', '07-6905840'], telBimbit: null },
  'KOTA TINGGI': { ketua: 'PKPgB Mohd Khairul Sufian bin Dahari', telBalai: ['07-8831444'], telBimbit: '019-2317865' },
  'SUNGAI RENGIT': { ketua: 'PKPgB Baharuddin bin Idris', telBalai: ['07-8246770'], telBimbit: '019-6517865' },
  'PENAWAR': { ketua: 'PKPgB Soleh bin Nasir', telBalai: ['07-8223692'], telBimbit: '019-7177842' },
  'MERSING': { ketua: 'PKPgB Mohd Alias bin Hussin', telBalai: ['07-7994444'], telBimbit: '019-7277842' },
  'ENDAU': { ketua: 'PBK I Asrul bin Ahmad (Pemangku K.B.)', telBalai: ['07-7945444'], telBimbit: '019-3197865' },
  'SEBANA COVE': { ketua: 'PPgB Umar Hafiz bin Roslee Amir', telBalai: ['07-8861641'], telBimbit: '019-3547865' },
  'PUNGGAI': { ketua: 'PBT II Ezam bin Mistorerrudin', telBalai: ['07-8861952'], telBimbit: '019-6807865' },
  'BANDAR TENGGARA': { ketua: 'PBT II Bahtiar bin Selamat', telBalai: ['07-8964498'], telBimbit: '019-6357865' },
  'PENGGARAM': { ketua: 'TPgB II Norazizan bin Hj. Awang', telBalai: ['07-4345757'], telBimbit: '019-2587863' },
  'KLUANG': { ketua: 'PKPgB Mohd Fauzi bin Md Nor', telBalai: ['07-7724444'], telBimbit: '019-3917865' },
  'BATU PAHAT': { ketua: 'PPgB Ayub bin Majid', telBalai: ['07-4338444'], telBimbit: '019-3037863' },
  'RENGIT': { ketua: 'PPgB Norhisam bin Abdul Talib', telBalai: ['07-4243444'], telBimbit: '019-6857865' },
  'RENGGAM': { ketua: 'PPgB Nizar bin Mamun', telBalai: ['07-7535444'], telBimbit: '019-3437865' },
  'YONG PENG': { ketua: 'PPgB Asyraf Nur bin Mohd Yusoff', telBalai: ['07-4674444'], telBimbit: '019-6207965' },
  'AYER HITAM': { ketua: 'PPgB Mohd Shamin bin Mohamed Salikin', telBalai: ['07-7582206'], telBimbit: '019-3067862' },
  'PARIT SULONG': { ketua: 'PPgB Asyraf Nur bin Mohd Yusoff', telBalai: [], telBimbit: null },
  'MUAR': { ketua: 'TPgB II Shahrizal bin Moktar', telBalai: ['06-9555994', '06-9555992'], telBimbit: '019-6757965' },
  'BANDAR BARU SEGAMAT': { ketua: 'TPgB II Kup Mohd Aizad bin Hj Mamat', telBalai: ['07-9435844'], telBimbit: '019-2179879' },
  'SEGAMAT': { ketua: 'PPgB Muhd Hazim bin Abd Razak', telBalai: ['07-9314444'], telBimbit: '019-2197965' },
  'LABIS': { ketua: 'PPgB Mohd Hafifie bin Md. Sarif', telBalai: ['07-9254444'], telBimbit: '019-6747965' },
  'BUKIT GAMBIR': { ketua: 'PPgB Mohd Farizan bin Mokhtar', telBalai: ['06-9765144'], telBimbit: '019-6837965' },
  'TANGKAK': { ketua: 'PPgB Mohd Hairul Anuar bin Ali', telBalai: ['06-9783444'], telBimbit: '019-6367965' },
  'PAGOH': { ketua: 'PKPgB Mohd Fadli bin Ismail', telBalai: ['06-9741955', '06-9741957'], telBimbit: '019-3687965' },
};

function bersihkanNomborTel(no) { return no.replace(/[^0-9+]/g, ''); }
function binaPautanTel(no) {
  const bersih = bersihkanNomborTel(no);
  if (!bersih) return no;
  return `<a href="tel:${bersih}">${no}</a>`;
}

function binaMaklumatKetuaBalai(balai) {
  const kunci = normalisasiNamaBalai(balai.nama);
  const info = dataKetuaBalaiTel[kunci];
  if (!info) return '';
  const telBalaiHtml = info.telBalai && info.telBalai.length > 0 ? info.telBalai.map((no) => binaPautanTel(no)).join(', ') : '-';
  const telBimbitHtml = info.telBimbit ? binaPautanTel(info.telBimbit) : '-';
  return `<b><i class="fa-solid fa-user-tie"></i> Ketua Balai:</b> ${info.ketua}<br>
          <b><i class="fa-solid fa-phone"></i> No. Telefon Balai:</b> ${telBalaiHtml}<br>
          <b><i class="fa-solid fa-mobile-screen-button"></i> No. Telefon Bimbit:</b> ${telBimbitHtml}<br>`;
}

function paraCSV(teks) {
  const baris = [];
  let sel = '', row = [], dalamPetikan = false;
  for (let i = 0; i < teks.length; i++) {
    const c = teks[i];
    if (dalamPetikan) {
      if (c === '"') {
        if (teks[i + 1] === '"') { sel += '"'; i++; } else { dalamPetikan = false; }
      } else { sel += c; }
    } else {
      if (c === '"') { dalamPetikan = true; }
      else if (c === ',') { row.push(sel); sel = ''; }
      else if (c === '\r') { /* abaikan */ }
      else if (c === '\n') { row.push(sel); baris.push(row); row = []; sel = ''; }
      else { sel += c; }
    }
  }
  if (sel.length > 0 || row.length > 0) { row.push(sel); baris.push(row); }
  return baris.filter((r) => r.some((v) => v && v.trim().length > 0));
}

function petakanStatusJentera(mentah) {
  const s = (mentah || '').toUpperCase();
  if (s.includes('1. STATUS BAIK')) return { label: 'Baik', warna: '#2e7d32', latar: '#e8f5e9' };
  if (s.includes('2. STATUS ROSAK MINOR')) return { label: 'Rosak Minor', warna: '#e65100', latar: '#fff3e0' };
  if (s.includes('3. STATUS ROSAK')) return { label: 'Rosak', warna: '#c62828', latar: '#ffebee' };
  return null;
}

async function muatSheetJentera(jenis, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Gagal fetch sheet ${jenis}: ${response.status}`);
    const teks = await response.text();
    const baris = paraCSV(teks);
    if (baris.length < 2) return;
    const header = baris[0].map((h) => h.trim().toUpperCase());
    const idxCallsign = header.indexOf('CALLSIGN');
    const idxPlate = header.indexOf('PLATE');
    const idxPenempatan = header.indexOf('LOKASI SEMASA');
    const idxStatus = header.indexOf('STATUS JENTERA');
    if (idxPenempatan === -1 || idxStatus === -1) return;
    for (let i = 1; i < baris.length; i++) {
      const r = baris[i];
      const penempatan = (r[idxPenempatan] || '').trim().toUpperCase();
      if (!penempatan) continue;
      const status = petakanStatusJentera(r[idxStatus]);
      if (!status) continue;
      const rekod = { jenis, callsign: (r[idxCallsign] || '-').trim() || '-', plat: (r[idxPlate] || '-').trim() || '-', status };
      if (!dataJenteraByBalai[penempatan]) dataJenteraByBalai[penempatan] = [];
      dataJenteraByBalai[penempatan].push(rekod);
    }
  } catch (error) { console.error(`[RALAT] Gagal muatkan data jentera (${jenis}):`, error); }
}

async function muatSemuaDataJentera() {
  statusMuatJentera = 'sedang';
  dataJenteraByBalai = {};
  try {
    await Promise.all([
      muatSheetJentera('cfrt', csvJenteraUrl.cfrt),
      muatSheetJentera('emrs', csvJenteraUrl.emrs),
      muatSheetJentera('water', csvJenteraUrl.water),
    ]);
    statusMuatJentera = 'siap';
    console.log('[OK] Data status jentera (CFRT/EMRS/Water Tanker) berjaya dimuatkan.');
  } catch (error) {
    statusMuatJentera = 'ralat';
    console.error('[RALAT] Gagal muatkan data jentera:', error);
  }
  markerBalaiRujukan.forEach(({ marker, bina }) => {
    if (marker.isPopupOpen()) marker.setPopupContent(bina());
  });
}

function binaSeksyenJentera(balai) {
  const kunci = normalisasiNamaBalai(balai.nama);
  let dalaman = '';
  if (statusMuatJentera === 'belum' || statusMuatJentera === 'sedang') {
    dalaman = `<div class="jentera-loading"><i class="fa-solid fa-spinner"></i> Memuatkan status jentera...</div>`;
  } else {
    const senarai = dataJenteraByBalai[kunci] || [];
    if (senarai.length === 0) {
      dalaman = `<div class="jentera-kosong">Tiada maklumat jentera direkodkan.</div>`;
    } else {
      dalaman = senarai.map((j) =>
        `<div class="jentera-item">
          <span class="jentera-item-icon" title="${labelJenisJentera[j.jenis]}"><i class="fa-solid ${ikonJentera[j.jenis]}"></i></span>
          <span class="jentera-item-status" style="color:${j.status.warna};background:${j.status.latar};">${j.status.label}</span>
          <span class="jentera-item-callsign">${j.callsign}</span>
          <span class="jentera-item-plate">${j.plat}</span>
        </div>`
      ).join('');
    }
  }
  return `<div class="jentera-section"><div class="jentera-section-title"><i class="fa-solid fa-truck-fast"></i> Status Jentera</div>${dalaman}</div>`;
}

// ============================================
// WARNA ZON
// ============================================
const warnaZon = { 1: '#CC0000', 2: '#1A5276', 3: '#1E8449', 4: '#FDB813' };
const namaZon = { 1: 'Zon 1 - Johor Bahru', 2: 'Zon 2 - Kota Tinggi', 3: 'Zon 3 - Kluang', 4: 'Zon 4 - Muar' };

const layerZon = { 1: [], 2: [], 3: [], 4: [] };

// ============================================
// INISIALISASI PETA
// ============================================
const map = L.map('map', {
  // Sempadan longgar meliputi seluruh Malaysia (Semenanjung + Sabah/Sarawak)
  // supaya peta boleh di-drag/pan ke mana-mana negeri, bukan dikunci Johor sahaja.
  maxBounds: [[-1.0, 97.5], [8.0, 121.5]],
  maxBoundsViscosity: 0.6,
  minZoom: 6,
  maxZoom: 18,
}).setView([1.85, 103.3], 9);

// ============================================
// LAYER PETA DASAR (BASEMAP)
// ============================================
const basemapLayers = {
  jalan: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap | JBPM Johor', maxZoom: 19 }),
  terang: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '© OpenStreetMap © CARTO | JBPM Johor', subdomains: 'abcd', maxZoom: 19 }),
  gelap: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '© OpenStreetMap © CARTO | JBPM Johor', subdomains: 'abcd', maxZoom: 19 }),
  satelit: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Sumber: Esri, Maxar, Earthstar Geographics | JBPM Johor', maxZoom: 19 }),
};

let basemapSemasa = 'jalan';
basemapLayers[basemapSemasa].addTo(map);

// ============================================
// RUJUKAN JARAK (SCALE BAR) - UNIT METER/KM
// ============================================
// Bar rujukan jarak di sudut kiri bawah peta, akan bertukar automatik
// (meter apabila zoom masuk, kilometer apabila zoom keluar).
L.control.scale({
  position: 'bottomright',
  metric: true,
  imperial: false,
  maxWidth: 140,
}).addTo(map);

function pilihBasemap(kunci) {
  if (!basemapLayers[kunci] || kunci === basemapSemasa) { tutupBasemapPanel(); return; }
  map.removeLayer(basemapLayers[basemapSemasa]);
  basemapLayers[kunci].addTo(map);
  basemapSemasa = kunci;
  document.querySelectorAll('.basemap-option').forEach((el) => el.classList.toggle('active', el.dataset.basemap === kunci));
  tutupBasemapPanel();
}

function toggleBasemapPanel() {
  const panel = document.getElementById('basemap-panel');
  const btn = document.getElementById('basemap-btn');
  const buka = !panel.classList.contains('show');
  panel.classList.toggle('show', buka);
  btn.classList.toggle('active', buka);
}

function tutupBasemapPanel() {
  document.getElementById('basemap-panel').classList.remove('show');
  document.getElementById('basemap-btn').classList.remove('active');
}

document.addEventListener('click', function (e) {
  const panel = document.getElementById('basemap-panel');
  const btn = document.getElementById('basemap-btn');
  if (!panel || !btn) return;
  if (panel.classList.contains('show') && !panel.contains(e.target) && !btn.contains(e.target)) {
    tutupBasemapPanel();
  }
});

// ============================================
// SUSUNAN BUTANG ZOOM & FULLSCREEN
// ============================================
map.removeControl(map.zoomControl);

L.control.topBar = L.Control.extend({
  onAdd: function () {
    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control-topbar');
    const buatBtn = (label, titleTxt, onClick, tambahBorder) => {
      const a = L.DomUtil.create('a', tambahBorder ? 'topbar-btn topbar-btn-border' : 'topbar-btn', container);
      a.innerHTML = label; a.href = '#'; a.title = titleTxt; a.setAttribute('role', 'button');
      L.DomEvent.on(a, 'click', L.DomEvent.stop).on(a, 'click', onClick);
      return a;
    };
    buatBtn('<i class="fa-solid fa-rotate-right"></i>', 'Muat Semula Halaman', function () { location.reload(); }, false);
    buatBtn('<i class="fa-solid fa-expand"></i>', 'Skrin Penuh', function () {
      const mapDiv = document.getElementById('map');
      if (!document.fullscreenElement) { mapDiv.requestFullscreen(); } else { document.exitFullscreen(); }
    }, true);
    buatBtn('−', 'Zoom Out', function () { map.zoomOut(); }, true);
    buatBtn('+', 'Zoom In', function () { map.zoomIn(); }, true);
    L.DomEvent.disableClickPropagation(container);
    return container;
  },
  onRemove: function () {},
});
new L.control.topBar({ position: 'topright' }).addTo(map);

// ============================================
// FUNGSI KIRA JARAK (HAVERSINE)
// ============================================
function kiraJarak(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ============================================
// FUNGSI TITIK-DALAM-POLIGON
// ============================================
function titikDalamPoligon(lat, lng, poligon) {
  let dalam = false;
  for (let i = 0, j = poligon.length - 1; i < poligon.length; j = i++) {
    const yi = poligon[i][0], xi = poligon[i][1];
    const yj = poligon[j][0], xj = poligon[j][1];
    const bersilang = yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (bersilang) dalam = !dalam;
  }
  return dalam;
}

function cariBalaiJagaan(lat, lng) {
  for (const poly of kawasanJagaanPolygons) {
    if (titikDalamPoligon(lat, lng, poly.coordinates)) return poly.namaBalai;
  }
  return null;
}

// ============================================
// FUNGSI CARI 4 BALAI TERDEKAT (OSRM)
// ============================================
const OSRM_TABLE_URL = 'https://router.project-osrm.org/table/v1/driving';
const OSRM_TIMEOUT_MS = 5000;
const BILANGAN_CALON_PRATAPIS = 8;

async function cariBalaiTerdekat(lat, lng) {
  const semuaJarakLurus = dataBalai.map((balai) => ({ ...balai, jarakLurus: kiraJarak(lat, lng, balai.lat, balai.lng) }))
    .sort((a, b) => a.jarakLurus - b.jarakLurus);
  const calon = semuaJarakLurus.slice(0, BILANGAN_CALON_PRATAPIS);
  try {
    const hasilRoute = await panggilOSRMTable(lat, lng, calon);
    if (hasilRoute.length === 0) throw new Error('Tiada jarak route sah dikembalikan.');
    hasilRoute.sort((a, b) => a.jarak - b.jarak);
    return { data: hasilRoute.slice(0, 4), jenis: 'route' };
  } catch (err) {
    console.warn('[AMARAN] Gagal dapatkan jarak jalan (OSRM), guna jarak garis lurus sebagai fallback:', err);
    const fallback = semuaJarakLurus.slice(0, 4).map((b) => ({ ...b, jarak: b.jarakLurus }));
    return { data: fallback, jenis: 'lurus' };
  }
}

async function panggilOSRMTable(lat, lng, calon) {
  const koordinatBalai = calon.map((b) => `${b.lng},${b.lat}`).join(';');
  const koordinatLokasi = `${lng},${lat}`;
  const koordinat = `${koordinatBalai};${koordinatLokasi}`;
  const N = calon.length;
  const sources = Array.from({ length: N }, (_, i) => i).join(';');
  const destinations = `${N}`;
  const url = `${OSRM_TABLE_URL}/${koordinat}?sources=${sources}&destinations=${destinations}&annotations=distance`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), OSRM_TIMEOUT_MS);
  try {
    const resp = await fetch(url, { signal: controller.signal });
    if (!resp.ok) throw new Error(`OSRM membalas ralat: ${resp.status}`);
    const data = await resp.json();
    if (data.code !== 'Ok' || !Array.isArray(data.distances) || data.distances.length !== N) throw new Error('Format respons OSRM tidak dijangka.');
    return calon.map((balai, i) => {
      const meter = data.distances[i]?.[0];
      return { ...balai, jarak: meter === null || meter === undefined ? null : meter / 1000 };
    }).filter((b) => b.jarak !== null);
  } finally { clearTimeout(timeoutId); }
}

async function dapatkanJarakRouteSebenar(lat1, lng1, lat2, lng2) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), OSRM_TIMEOUT_MS);
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${lng1},${lat1};${lng2},${lat2}?overview=false`;
    const resp = await fetch(url, { signal: controller.signal });
    if (!resp.ok) throw new Error(`OSRM route ralat: ${resp.status}`);
    const data = await resp.json();
    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) throw new Error('Tiada route ditemui untuk balai SG.');
    return data.routes[0].distance / 1000;
  } catch (err) {
    console.warn('[AMARAN] Gagal dapatkan jarak jalan (OSRM) untuk balai SG, guna jarak garis lurus sebagai fallback:', err);
    return null;
  } finally { clearTimeout(timeoutId); }
}

// ============================================
// FUNGSI ROUTE
// ============================================
let routeLayer = null;

async function tunjukRoute(lat1, lng1, lat2, lng2, namaBalai) {
  if (routeLayer) { map.removeLayer(routeLayer); routeLayer = null; }
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${lng1},${lat1};${lng2},${lat2}?geometries=geojson&overview=full&steps=false`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Gagal dapatkan route');
    const data = await response.json();
    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) throw new Error('Tiada route ditemui');
    const route = data.routes[0];
    const coords = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
    routeLayer = L.polyline(coords, { color: '#1E90FF', weight: 5, opacity: 0.8, dashArray: null }).addTo(map);
    const jarakKm = (route.distance / 1000).toFixed(1);
    routeLayer.bindPopup(`<i class="fa-solid fa-truck-fast"></i> Laluan dari ${namaBalai} ke lokasi<br><i class="fa-solid fa-ruler"></i> ${jarakKm} km`);
    map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
  } catch (error) {
    console.error('Ralat route:', error);
    alert('Gagal memaparkan laluan. Sila cuba lagi.');
  }
}

// ============================================
// POPUP BALAI TERDEKAT (DRAWER KANAN)
// ============================================
let lokasiTerakhir = null;

async function bukaPopupBalai(lat, lng, alamat) {
  const modal = document.getElementById('popup-modal');
  const overlay = document.getElementById('popup-overlay');
  const content = document.getElementById('popup-content');

  if (typeof lat === 'undefined' || lat === null) {
    if (lokasiTerakhir) {
      lat = lokasiTerakhir.lat; lng = lokasiTerakhir.lng; alamat = lokasiTerakhir.alamat || 'Lokasi';
    } else {
      content.innerHTML = `<div class="popup-placeholder"><i class="fa-solid fa-magnifying-glass-location"></i> Sila cari lokasi terlebih dahulu,<br />kemudian tekan butang <i class="fa-solid fa-fire-flame-curved"></i> untuk lihat 4 balai terdekat.</div>`;
      modal.classList.add('open'); overlay.classList.add('show');
      return;
    }
  }

  lokasiTerakhir = { lat, lng, alamat };
  content.innerHTML = `<div class="popup-placeholder">⏳ Mengira jarak jalan ke balai berdekatan...</div>`;
  modal.classList.add('open'); overlay.classList.add('show');

  const { data: terdekat, jenis } = await cariBalaiTerdekat(lat, lng);
  if (!lokasiTerakhir || lokasiTerakhir.lat !== lat || lokasiTerakhir.lng !== lng) return;

  const notaJenis = jenis === 'lurus' ? `<div style="font-size:11px;color:#c2703d;margin-bottom:10px;"><i class="fa-solid fa-triangle-exclamation"></i> Jarak jalan tidak dapat dikira buat masa ini — dipaparkan jarak garis lurus (anggaran).</div>` : '';

  const namaJagaan = cariBalaiJagaan(lat, lng);
  let balaiSG = null;
  let senaraiAkhir = [...terdekat];
  let notaJarakSGLurus = false;

  if (namaJagaan) {
    const idxDalamTerdekat = senaraiAkhir.findIndex((b) => b.nama === namaJagaan);
    if (idxDalamTerdekat !== -1) {
      balaiSG = senaraiAkhir[idxDalamTerdekat];
    } else {
      const dataJagaan = dataBalai.find((b) => b.nama === namaJagaan);
      if (dataJagaan) {
        let jarakSG = await dapatkanJarakRouteSebenar(lat, lng, dataJagaan.lat, dataJagaan.lng);
        if (jarakSG === null) { jarakSG = kiraJarak(lat, lng, dataJagaan.lat, dataJagaan.lng); notaJarakSGLurus = true; }
        balaiSG = { ...dataJagaan, jarak: jarakSG };
        senaraiAkhir.push(balaiSG);
      }
    }
  }

  if (!lokasiTerakhir || lokasiTerakhir.lat !== lat || lokasiTerakhir.lng !== lng) return;

  const notaJagaanLurus = notaJarakSGLurus ? `<div style="font-size:11px;color:#c2703d;margin-bottom:10px;"><i class="fa-solid fa-triangle-exclamation"></i> Jarak jalan balai SG tidak dapat dikira buat masa ini — dipaparkan jarak garis lurus (anggaran).</div>` : '';

  let html = `<div class="popup-location"><i class="fa-solid fa-location-dot"></i> ${alamat || 'Lokasi'}</div>${notaJenis}${notaJagaanLurus}`;

  senaraiAkhir.forEach((b, i) => {
    const label = !balaiSG ? '' : b.nama === balaiSG.nama ? ' (SG)' : ' (TOA)';
    html += `<div class="popup-balai-item" onclick="tunjukRoute(${b.lat}, ${b.lng}, ${lat}, ${lng}, '${b.nama}'); map.flyTo([${b.lat}, ${b.lng}], 15); tutupPopupBalai();">
        <div>
          <div class="popup-balai-nama">${i + 1}. ${b.nama}${label}</div>
          <div class="popup-balai-info"><i class="fa-solid fa-building-shield"></i> ${namaZon[b.zon]} | <i class="fa-solid fa-phone"></i> <a class="popup-balai-call" href="tel:${b.tel}" onclick="event.stopPropagation();">${b.tel}</a></div>
        </div>
        <div class="popup-balai-jarak">${b.jarak.toFixed(1)} km</div>
      </div>`;
  });

  content.innerHTML = html;
}

function tutupPopupBalai() {
  document.getElementById('popup-modal').classList.remove('open');
  document.getElementById('popup-overlay').classList.remove('show');
  if (routeLayer) { map.removeLayer(routeLayer); routeLayer = null; }
}

// ============================================
// PLOT SEMUA BALAI
// ============================================
function buatIkonBalai(warna) {
  return L.divIcon({
    className: 'balai-marker-icon',
    html: `<i class="fa-solid fa-building-shield" style="color:${warna};"></i>`,
    iconSize: [26, 26],
    iconAnchor: [13, 22],
    popupAnchor: [0, -20],
  });
}

dataBalai.forEach((balai) => {
  // Tentukan warna: jika balai dalam senarai luar negeri, gunakan kelabu gelap, selain itu ikut zon
  let warna = warnaZon[balai.zon];
  if (balaiLuarNegeri.includes(balai.nama)) {
    warna = '#4a4a4a'; // kelabu gelap
  }
  const marker = L.marker([balai.lat, balai.lng], { icon: buatIkonBalai(warna) }).addTo(map);
  layerZon[balai.zon].push(marker);

  const binaPopupBalai = () => {
    const infoKetua = binaMaklumatKetuaBalai(balai);
    const telefonFallback = infoKetua === '' ? `<b><i class="fa-solid fa-phone"></i> Telefon:</b> <a href="tel:${balai.tel}">${balai.tel}</a><br>\n` : '';
    return `<div class="balai-popup-info">
      <strong class="balai-popup-nama"><i class="fa-solid fa-building-shield"></i> ${balai.nama}</strong><br>
      <b>Zon:</b> ${namaZon[balai.zon]}<br>
      <b>Daerah:</b> ${balai.daerah}<br>
${telefonFallback}${infoKetua}
      <b><i class="fa-solid fa-location-dot"></i> Lat,Lng:</b> ${balai.lat}, ${balai.lng}
      ${binaSeksyenJentera(balai)}
    </div>`;
  };

  marker.bindPopup(binaPopupBalai, { maxWidth: 300, minWidth: 260 });
  markerBalaiRujukan.push({ marker, bina: binaPopupBalai });
});

// ============================================
// KLIK PETA UNTUK DAPATKAN KOORDINAT (PENAPISAN UI YANG SANGAT KETAT)
// ============================================
let coordPopup = null;

map.on('click', function (e) {
  // Abaikan jika klik berasal dari mana-mana elemen interaktif
  const target = e.originalEvent.target;
  
  // Senarai lengkap elemen UI yang perlu diabaikan – termasuk semua butang, input, label, pautan, dan elemen Leaflet
  const uiSelectors = [
    'button',          // semua butang (termasuk mode switch, arah, cari, tutup, dll.)
    'input',           // semua input
    'label',           // semua label
    'a',               // semua pautan
    '#menu-btn',
    '#side-menu',
    '#search-container',
    '#search-results',
    '#search-btn',
    '.mode-btn',
    '.arah-btn',
    '#mode-toggle',
    '#arah-btn-1',
    '#arah-btn-2',
    '#popup-btn',
    '#popup-modal',
    '#basemap-btn',
    '#basemap-panel',
    '.leaflet-control',
    '.leaflet-control-zoom',
    '.leaflet-top',
    '.leaflet-bottom',
    '.leaflet-popup',
    '.leaflet-popup-content',
    '#info-panel-stack',
    '.info-panel-card',
    '#info-panel',
    '#info-panel-edl',
    '#info-panel-sde',
    '.leaflet-pane',
    '.leaflet-overlay-pane',
    '.leaflet-marker-pane',
    '.leaflet-tile-pane',
    '.leaflet-shadow-pane'
  ];

  // Semak jika target atau parent-nya sepadan dengan mana-mana selector
  for (const selector of uiSelectors) {
    if (target.closest(selector)) {
      return; // abaikan klik ini
    }
  }

  // Jika klik pada peta (bukan UI), teruskan
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;
  const latFixed = lat.toFixed(6);
  const lngFixed = lng.toFixed(6);
  const coordText = `${latFixed}, ${lngFixed}`;

  if (coordPopup) {
    map.closePopup(coordPopup);
    coordPopup = null;
  }

  const content = document.createElement('div');
  content.innerHTML = `
    <div style="font-weight:700;margin-bottom:4px;"><i class="fa-solid fa-location-crosshairs"></i> Koordinat</div>
    <div style="font-size:13px;font-family:monospace;margin-bottom:6px;">${coordText}</div>
    <button id="copy-coord-btn" class="copy-coord-btn" style="background:var(--bomba-red);color:white;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;font-size:14px;display:inline-flex;align-items:center;gap:4px;border:1px solid transparent;">
      <i class="fa-regular fa-copy"></i>
    </button>
    <div id="copy-msg" class="coord-copy-msg" style="color:#2e7d32;font-size:12px;margin-top:4px;display:none;"><i class="fa-solid fa-check-circle"></i> Disalin!</div>
  `;

  coordPopup = L.popup({
    className: 'coord-popup',
    closeButton: true,
    autoClose: true,
    maxWidth: 280,
  })
    .setLatLng(e.latlng)
    .setContent(content)
    .openOn(map);
});

// Event delegation untuk butang salin koordinat
document.addEventListener('click', function (event) {
  const btn = event.target.closest('#copy-coord-btn');
  if (!btn) return;

  const popupContainer = btn.closest('.leaflet-popup-content');
  if (!popupContainer) return;

  const coordDiv = popupContainer.querySelector('div[style*="font-family:monospace"]');
  if (!coordDiv) return;

  const coordText = coordDiv.textContent.trim();
  const msg = popupContainer.querySelector('#copy-msg');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(coordText).then(() => {
      if (msg) { msg.style.display = 'block'; setTimeout(() => { msg.style.display = 'none'; }, 2000); }
    }).catch(() => { fallbackSalin(coordText, msg); });
  } else {
    fallbackSalin(coordText, msg);
  }
  event.stopPropagation();
});

function fallbackSalin(coordText, msg) {
  const textArea = document.createElement('textarea');
  textArea.value = coordText;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    if (msg) { msg.style.display = 'block'; setTimeout(() => { msg.style.display = 'none'; }, 2000); }
  } catch (e) {
    alert('Gagal menyalin. Sila salin secara manual: ' + coordText);
  }
  document.body.removeChild(textArea);
}

// ============================================
// HALANG KLIK PADA SEMUA ELEMEN CARIAN DARIPADA MENCETUSKAN POPUP KOORDINAT
// ============================================
document.querySelectorAll('#search-container button, #search-container .mode-btn, #search-container .arah-btn, #mode-toggle, #arah-btn-1, #arah-btn-2, #search-btn, #search-container input, #search-container label').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  el.addEventListener('touchstart', function(e) {
    e.stopPropagation();
  }, { passive: false });
});

document.getElementById('search-container').addEventListener('click', function(e) {
  e.stopPropagation();
});
document.getElementById('search-container').addEventListener('touchstart', function(e) {
  e.stopPropagation();
}, { passive: false });

// ============================================
// MODE CARIAN
// ============================================
let modeCarian = 'alamat';
let arahCarian = 'utara';
const arahBtn1 = document.getElementById('arah-btn-1');
const arahBtn2 = document.getElementById('arah-btn-2');

// ============================================
// KONFIGURASI LEBUHRAYA BARU
// ============================================
const lebuhrayaBaruConfig = [
  {
    mode: 'sde',
    labelBtn: 'KM SDE',
    icon: 'fa-road',
    labelMenu: 'Lebuhraya SDE',
    placeholder: 'Masukkan KM SDE (cth: 10.5)',
    warnaGaris: ['#9C27B0', '#673AB7'],
    arah: [{ key: 'penawar', label: 'Penawar', file: 'SDE HALA PENAWAR.kml' }, { key: 'senai', label: 'Senai', file: 'SDE HALA SENAI.kml' }],
  },
  {
    mode: 'secondlink',
    labelBtn: 'KM 2ND LINK',
    icon: 'fa-road',
    labelMenu: 'Lebuhraya Second Link',
    placeholder: 'Masukkan KM Second Link (cth: 10.5)',
    warnaGaris: ['#009688', '#00BCD4'],
    arah: [{ key: 'jpo', label: 'JPO', file: 'SECOND LINK HALA JPO.kml' }, { key: 'tuas', label: 'Tuas', file: 'SECOND LINK HALA TUAS.kml' }],
  },
  {
    mode: 'edl',
    labelBtn: 'KM EDL',
    icon: 'fa-road',
    labelMenu: 'Lebuhraya EDL',
    placeholder: 'Masukkan KM EDL (cth: 10.5)',
    warnaGaris: ['#3F51B5', '#5C6BC0'],
    arah: [{ key: 'pandan', label: 'Pandan', file: 'EDL HALA PANDAN.kml' }, { key: 'woodland', label: 'Woodland', file: 'EDL HALA WOODLAND.kml' }],
  },
];

const dataLebuhrayaBaru = {};
const layerLebuhrayaBaru = {};
const kmMapLebuhrayaBaru = {};
lebuhrayaBaruConfig.forEach((cfg) => {
  dataLebuhrayaBaru[cfg.mode] = { [cfg.arah[0].key]: [], [cfg.arah[1].key]: [] };
  kmMapLebuhrayaBaru[cfg.mode] = { [cfg.arah[0].key]: new Map(), [cfg.arah[1].key]: new Map() };
  layerLebuhrayaBaru[cfg.mode] = { layer: null, visible: false };
});

function cariConfigLebuhraya(mode) { return lebuhrayaBaruConfig.find((c) => c.mode === mode) || null; }

function setBtnIcon(el, iconClass, label) {
  el.innerHTML = `<i class="fa-solid ${iconClass}"></i><span class="btn-label"> ${label}</span>`;
}

function arah1UntukModeSemasa() {
  if (modeCarian === 'pg') return 'pasirgudang';
  if (modeCarian === 'km') return 'utara';
  const cfg = cariConfigLebuhraya(modeCarian);
  return cfg ? cfg.arah[0].key : 'utara';
}
function arah2UntukModeSemasa() {
  if (modeCarian === 'pg') return 'perling';
  if (modeCarian === 'km') return 'selatan';
  const cfg = cariConfigLebuhraya(modeCarian);
  return cfg ? cfg.arah[1].key : 'selatan';
}

function pilihArah(arah) {
  arahCarian = arah;
  arahBtn1.classList.remove('active-arah');
  arahBtn2.classList.remove('active-arah');
  if (arah === arah1UntukModeSemasa()) arahBtn1.classList.add('active-arah');
  else arahBtn2.classList.add('active-arah');
  const query = document.getElementById('search-input').value.trim();
  if (query.length > 0) cari();
}

const urutanModCarian = ['alamat', 'laluan', 'km', 'pg', ...lebuhrayaBaruConfig.map((c) => c.mode)];

function tukarMode() {
  const modeBtn = document.getElementById('mode-toggle');
  const searchInput = document.getElementById('search-input');
  const resultsDiv = document.getElementById('search-results');
  const searchClearBtn = document.getElementById('search-clear');
  const searchBtnEl = document.getElementById('search-btn');
  const searchIconPrefix = document.querySelector('.search-icon-prefix');
  const laluanPanel = document.getElementById('laluan-panel');

  const indexSemasa = urutanModCarian.indexOf(modeCarian);
  modeCarian = urutanModCarian[(indexSemasa + 1) % urutanModCarian.length];

  // Reset paparan lalai setiap kali tukar mod - elemen carian tunggal ditunjuk,
  // panel laluan (dari-ke) disembunyikan, kemudian ubah suai ikut mod yang dipilih.
  searchInput.style.display = '';
  searchClearBtn.style.display = '';
  searchBtnEl.style.display = '';
  if (searchIconPrefix) searchIconPrefix.style.display = '';
  if (laluanPanel) laluanPanel.style.display = 'none';
  arahBtn1.style.display = 'none'; arahBtn2.style.display = 'none';

  if (modeCarian === 'alamat') {
    setBtnIcon(modeBtn, 'fa-location-dot', 'Alamat');
    modeBtn.className = 'mode-btn active-alamat';
    searchInput.placeholder = 'Cari alamat atau tempat...';
  } else if (modeCarian === 'laluan') {
    setBtnIcon(modeBtn, 'fa-route', 'Arah');
    modeBtn.className = 'mode-btn active-laluan';
    // Dalam mod ini, carian tunggal digantikan sepenuhnya oleh panel Dari/Ke.
    searchInput.style.display = 'none';
    searchClearBtn.style.display = 'none';
    searchBtnEl.style.display = 'none';
    if (searchIconPrefix) searchIconPrefix.style.display = 'none';
    if (laluanPanel) laluanPanel.style.display = 'flex';
    setTimeout(() => document.getElementById('laluan-dari-input')?.focus(), 0);
  } else if (modeCarian === 'km') {
    setBtnIcon(modeBtn, 'fa-road', 'KM PLUS');
    modeBtn.className = 'mode-btn active-km';
    searchInput.placeholder = 'Masukkan KM PLUS (cth: 23.5)';
    arahBtn1.style.display = 'flex'; arahBtn2.style.display = 'flex';
    setBtnIcon(arahBtn1, 'fa-arrow-up', 'Utara');
    setBtnIcon(arahBtn2, 'fa-arrow-down', 'Selatan');
    pilihArah('utara');
  } else if (modeCarian === 'pg') {
    setBtnIcon(modeBtn, 'fa-road', 'KM PG');
    modeBtn.className = 'mode-btn active-pg';
    searchInput.placeholder = 'Masukkan KM Pasir Gudang (cth: 10.5)';
    arahBtn1.style.display = 'flex'; arahBtn2.style.display = 'flex';
    setBtnIcon(arahBtn1, 'fa-arrow-up', 'Pasir Gudang');
    setBtnIcon(arahBtn2, 'fa-arrow-down', 'Perling');
    pilihArah('pasirgudang');
  } else {
    const cfg = cariConfigLebuhraya(modeCarian);
    setBtnIcon(modeBtn, cfg.icon, cfg.labelBtn);
    modeBtn.className = `mode-btn active-${cfg.mode}`;
    searchInput.placeholder = cfg.placeholder;
    arahBtn1.style.display = 'flex'; arahBtn2.style.display = 'flex';
    setBtnIcon(arahBtn1, 'fa-arrow-up', cfg.arah[0].label);
    setBtnIcon(arahBtn2, 'fa-arrow-down', cfg.arah[1].label);
    pilihArah(cfg.arah[0].key);
  }
  resultsDiv.classList.remove('show');
  if (modeCarian !== 'laluan') searchInput.focus();
  console.log('Mod carian sekarang:', modeCarian, 'Arah:', arahCarian);
}

// ============================================
// SEARCH
// ============================================
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchBtn = document.getElementById('search-btn');
let searchMarker = null;
let hasilCarianAlamatTerkini = [];

function cariKM(query) {
  const match = query.match(/^\s*(?:km\s*)?([\d.]+)\s*(?:km)?\s*$/i);
  if (!match) return null;
  const num = parseFloat(match[1]);
  if (isNaN(num) || num < 0 || num > 300) return null;
  const arah = arahCarian;
  if (arah !== 'utara' && arah !== 'selatan') return null;
  const kmKey = num.toFixed(1);
  const titik = kmMapPlus[arah].get(kmKey);
  if (!titik) return null;
  return { lat: titik.lat, lng: titik.lng, km: kmKey, arah: arah };
}

function cariKMPG(query) {
  const match = query.match(/^\s*(?:km\s*)?([\d.]+)\s*(?:km)?\s*$/i);
  if (!match) return null;
  const num = parseFloat(match[1]);
  if (isNaN(num) || num < 0 || num > 300) return null;
  const arah = arahCarian;
  if (arah !== 'pasirgudang' && arah !== 'perling') return null;
  const kmKey = num.toFixed(1);
  const titik = kmMapPG[arah].get(kmKey);
  if (!titik) return null;
  return { lat: titik.lat, lng: titik.lng, km: kmKey, arah: arah };
}

function cari() {
  console.log('Fungsi cari() dipanggil, mode:', modeCarian, 'arah:', arahCarian);
  const query = searchInput.value.trim();
  if (modeCarian === 'alamat') cariAlamat(query);
  else if (modeCarian === 'km') cariKMPlus(query);
  else if (modeCarian === 'pg') cariKMPGPlus(query);
  else cariKMLebuhrayaBaruJalankan(modeCarian, query);
}

let carianAlamatController = null;
let carianAlamatTimer = null;
const geocodeCache = new Map();
const GEOCODE_CACHE_TTL_MS = 30000;
const GEOCODE_MIN_INTERVAL_MS = 1100;
let geocodeLastFetchTime = 0;

function delay(ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);
    if (signal) signal.addEventListener('abort', () => { clearTimeout(id); reject(new DOMException('Aborted', 'AbortError')); });
  });
}

async function geocodeFetch(url, signal) {
  const cached = geocodeCache.get(url);
  if (cached && Date.now() - cached.ts < GEOCODE_CACHE_TTL_MS) return cached.data;

  const tungguLagi = GEOCODE_MIN_INTERVAL_MS - (Date.now() - geocodeLastFetchTime);
  if (tungguLagi > 0) await delay(tungguLagi, signal);

  geocodeLastFetchTime = Date.now();
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  geocodeCache.set(url, { data, ts: Date.now() });
  return data;
}

// Kawasan bias carian alamat - kini meliputi seluruh Malaysia (bukan Johor sahaja),
// selaras dengan peta yang boleh di-drag ke mana-mana negeri. bounded=0 bermaksud
// ini cuma keutamaan/bias, bukan sekatan keras - hasil di luar kawasan ini masih boleh muncul.
const VIEWBOX_MALAYSIA = '97.5,8.0,121.5,-1.0';

function cariAlamat(query, autoSelect = true) {
  if (carianAlamatController) { carianAlamatController.abort(); carianAlamatController = null; }
  if (query.length === 0) { searchResults.classList.remove('show'); return; }
  if (query.length < 3) {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Minimum 3 aksara untuk alamat.</div>';
    searchResults.classList.add('show'); return;
  }

  searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Mencari...</div>';
  searchResults.classList.add('show');

  const controller = new AbortController();
  carianAlamatController = controller;
  const url = `api/geocode?q=${encodeURIComponent(query)}&countrycodes=my&limit=8&accept-language=ms&addressdetails=1&viewbox=${VIEWBOX_MALAYSIA}&bounded=0`;

  geocodeFetch(url, controller.signal)
    .then((data) => {
      if (carianAlamatController !== controller) return;
      carianAlamatController = null;
      if (!data || data.length === 0) {
        const queryRingkas = query.replace(/,?\s*(no\.?|lot|unit|tingkat|blok|blok no\.?)\s*[\w-]+\s*,?/gi, ' ').replace(/\s+/g, ' ').trim();
        if (queryRingkas.length >= 3 && queryRingkas.toLowerCase() !== query.toLowerCase()) {
          carianAlamatController = null;
          cariAlamatQueryRingkas(queryRingkas, query, controller);
          return;
        }
        searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Tiada hasil dijumpai. Cuba ringkaskan carian (cth: nama jalan/kawasan sahaja).</div>';
        searchResults.classList.add('show');
        return;
      }
      paparkanHasilCarianAlamat(data, autoSelect);
    })
    .catch((error) => {
      if (error.name === 'AbortError') return;
      if (carianAlamatController !== controller) return;
      carianAlamatController = null;
      console.error('Ralat carian alamat:', error);
      searchResults.innerHTML = '<div class="search-result-item" style="color:red;">Ralat carian. Sila semak sambungan internet atau cuba lagi.</div>';
      searchResults.classList.add('show');
    });
}

function cariAlamatQueryRingkas(queryRingkas, queryAsal, controllerLama) {
  const controller = new AbortController();
  carianAlamatController = controller;
  const url = `api/geocode?q=${encodeURIComponent(queryRingkas)}&countrycodes=my&limit=8&accept-language=ms&addressdetails=1&viewbox=${VIEWBOX_MALAYSIA}&bounded=0`;

  geocodeFetch(url, controller.signal)
    .then((data) => {
      if (carianAlamatController !== controller) return;
      carianAlamatController = null;
      if (!data || data.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Tiada hasil dijumpai untuk alamat ini.</div>';
        searchResults.classList.add('show'); return;
      }
      searchResults.innerHTML = `<div style="font-size:11px;color:#999;padding:4px 10px;">Tiada padanan tepat untuk "${escapeHtml(queryAsal)}" - menunjukkan hasil untuk "${escapeHtml(queryRingkas)}":</div>`;
      paparkanHasilCarianAlamat(data, false, true);
    })
    .catch((error) => {
      if (error.name === 'AbortError') return;
      if (carianAlamatController !== controller) return;
      carianAlamatController = null;
      console.error('Ralat carian alamat (ringkas):', error);
      searchResults.innerHTML = '<div class="search-result-item" style="color:red;">Ralat carian. Sila semak sambungan internet atau cuba lagi.</div>';
      searchResults.classList.add('show');
    });
}

function paparkanHasilCarianAlamat(data, autoSelect, tambahKandungan = false) {
  hasilCarianAlamatTerkini = data;
  if (data.length === 1 && autoSelect) {
    const item = data[0];
    pilihLokasi(item.lat, item.lon, item.display_name);
    searchResults.classList.remove('show');
    return;
  }
  let html = tambahKandungan ? searchResults.innerHTML : '';
  data.forEach((item, i) => {
    html += `<div class="search-result-item" data-index="${i}"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.display_name)}</div>`;
  });
  searchResults.innerHTML = html;
  searchResults.classList.add('show');
}

searchResults.addEventListener('click', function (e) {
  const item = e.target.closest('.search-result-item[data-index]');
  if (!item) return;
  const idx = parseInt(item.getAttribute('data-index'), 10);
  const hasil = hasilCarianAlamatTerkini[idx];
  if (!hasil) return;
  pilihLokasi(hasil.lat, hasil.lon, hasil.display_name);
});

function cariKMPlus(query) {
  if (query.length === 0) { searchResults.classList.remove('show'); return; }
  if (arahCarian !== 'utara' && arahCarian !== 'selatan') {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#cc0000;">Sila pilih arah (<i class="fa-solid fa-arrow-up"></i> Utara / <i class="fa-solid fa-arrow-down"></i> Selatan) terlebih dahulu.</div>';
    searchResults.classList.add('show'); return;
  }
  const kmResult = cariKM(query);
  if (kmResult) {
    searchResults.classList.remove('show');
    map.flyTo([kmResult.lat, kmResult.lng], 15);
    if (searchMarker) map.removeLayer(searchMarker);
    const arahLabel = kmResult.arah === 'utara' ? 'Utara' : 'Selatan';
    searchMarker = L.marker([kmResult.lat, kmResult.lng], {
      icon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
      }),
    }).addTo(map).bindPopup(`<b><i class="fa-solid fa-location-dot"></i> KM ${kmResult.km} (PLUS - ${arahLabel})</b>`).openPopup();
    searchInput.value = `KM ${kmResult.km} (${arahLabel})`;
    updateInfoPanel(parseFloat(kmResult.km), 'PLUS', arahLabel);
    lokasiTerakhir = { lat: kmResult.lat, lng: kmResult.lng, alamat: `KM ${kmResult.km} (PLUS - ${arahLabel})` };
  } else {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Format KM tidak sah atau arah ini tiada data. Contoh: 23.5, km 45, 100</div>';
    searchResults.classList.add('show');
  }
}

function cariKMPGPlus(query) {
  if (query.length === 0) { searchResults.classList.remove('show'); return; }
  if (arahCarian !== 'pasirgudang' && arahCarian !== 'perling') {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#cc0000;">Sila pilih arah (<i class="fa-solid fa-arrow-up"></i> Pasir Gudang / <i class="fa-solid fa-arrow-down"></i> Perling) terlebih dahulu.</div>';
    searchResults.classList.add('show'); return;
  }
  const kmResult = cariKMPG(query);
  if (kmResult) {
    searchResults.classList.remove('show');
    map.flyTo([kmResult.lat, kmResult.lng], 15);
    if (searchMarker) map.removeLayer(searchMarker);
    const arahLabel = kmResult.arah === 'pasirgudang' ? 'Pasir Gudang' : 'Perling';
    searchMarker = L.marker([kmResult.lat, kmResult.lng], {
      icon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
      }),
    }).addTo(map).bindPopup(`<b><i class="fa-solid fa-road"></i> KM ${kmResult.km} (PG - ${arahLabel})</b>`).openPopup();
    searchInput.value = `PG KM ${kmResult.km} (${arahLabel})`;
    lokasiTerakhir = { lat: kmResult.lat, lng: kmResult.lng, alamat: `PG KM ${kmResult.km} (${arahLabel})` };
  } else {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Format KM tidak sah atau arah ini tiada data. Contoh: 10.5, km 15, 20</div>';
    searchResults.classList.add('show');
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function pilihLokasi(lat, lng, alamat) {
  searchResults.classList.remove('show');
  searchInput.value = alamat.length > 50 ? alamat.substring(0, 50) + '...' : alamat;
  map.flyTo([lat, lng], 14);
  if (searchMarker) map.removeLayer(searchMarker);
  searchMarker = L.marker([lat, lng], {
    icon: L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
    }),
  }).addTo(map).bindPopup(`<i class="fa-solid fa-location-dot"></i> <b>Lokasi Carian</b><br>${alamat}`).openPopup();
  lokasiTerakhir = { lat, lng, alamat };
}

// ============================================
// EVENT LISTENERS
// ============================================
searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') { e.preventDefault(); searchInput.focus(); cari(); }
});

let searchBtnTouchHandled = false;
searchBtn.addEventListener('mousedown', function (e) { e.preventDefault(); });
searchBtn.addEventListener('touchstart', function (e) { e.preventDefault(); }, { passive: false });
searchBtn.addEventListener('touchend', function (e) {
  e.preventDefault();
  searchBtnTouchHandled = true;
  searchInput.focus();
  cari();
  setTimeout(function () { searchBtnTouchHandled = false; }, 400);
});
searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (searchBtnTouchHandled) return;
  searchInput.focus();
  cari();
});

document.addEventListener('click', function (e) {
  if (!document.getElementById('search-container').contains(e.target)) {
    searchResults.classList.remove('show');
  }
});

function clearSearch() {
  if (carianAlamatController) { carianAlamatController.abort(); carianAlamatController = null; }
  if (carianAlamatTimer) { clearTimeout(carianAlamatTimer); carianAlamatTimer = null; }
  searchInput.value = '';
  searchResults.innerHTML = '';
  searchResults.classList.remove('show');
  document.getElementById('search-clear').classList.remove('show');
  searchInput.focus();
  if (searchMarker) { map.removeLayer(searchMarker); searchMarker = null; }
  if (routeLayer) { map.removeLayer(routeLayer); routeLayer = null; }
  tutupInfoPanel();
  tutupInfoPanelEDL();
  tutupInfoPanelSDE();
  lokasiTerakhir = null;
}

searchInput.addEventListener('input', function () {
  const clearBtn = document.getElementById('search-clear');
  if (this.value.trim().length > 0) clearBtn.classList.add('show');
  else clearBtn.classList.remove('show');

  if (modeCarian === 'alamat') {
    const query = this.value.trim();
    if (carianAlamatTimer) { clearTimeout(carianAlamatTimer); carianAlamatTimer = null; }
    if (query.length === 0) {
      if (carianAlamatController) { carianAlamatController.abort(); carianAlamatController = null; }
      searchResults.classList.remove('show');
      return;
    }
    carianAlamatTimer = setTimeout(function () { cariAlamat(query, false); }, 350);
  }
});

// ============================================
// MOD ARAH / LALUAN (DARI -> KE, 2 LOKASI)
// ============================================
const laluanState = {
  dari: { coord: null, controller: null, timer: null, inputEl: null, resultsEl: null, marker: null },
  ke: { coord: null, controller: null, timer: null, inputEl: null, resultsEl: null, marker: null },
};
let laluanRouteLayer = null;

function laluanCariAlamat(side, query) {
  const state = laluanState[side];
  if (state.controller) { state.controller.abort(); state.controller = null; }
  if (query.length < 3) {
    state.resultsEl.innerHTML = '<div class="search-result-item" style="color:#999;">Minimum 3 aksara.</div>';
    state.resultsEl.classList.add('show');
    return;
  }
  state.resultsEl.innerHTML = '<div class="search-result-item" style="color:#999;">Mencari...</div>';
  state.resultsEl.classList.add('show');

  const controller = new AbortController();
  state.controller = controller;
  const url = `api/geocode?q=${encodeURIComponent(query)}&countrycodes=my&limit=6&accept-language=ms&addressdetails=1&viewbox=${VIEWBOX_MALAYSIA}&bounded=0`;

  geocodeFetch(url, controller.signal)
    .then((data) => {
      if (state.controller !== controller) return;
      state.controller = null;
      if (!data || data.length === 0) {
        state.resultsEl.innerHTML = '<div class="search-result-item" style="color:#999;">Tiada hasil dijumpai.</div>';
        state.resultsEl.classList.add('show');
        return;
      }
      let html = '';
      data.forEach((item) => {
        html += `<div class="search-result-item" data-side="${side}" data-lat="${item.lat}" data-lng="${item.lon}" data-nama="${escapeHtml(item.display_name)}"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.display_name)}</div>`;
      });
      state.resultsEl.innerHTML = html;
      state.resultsEl.classList.add('show');
    })
    .catch((error) => {
      if (error.name === 'AbortError') return;
      if (state.controller !== controller) return;
      state.controller = null;
      console.error('Ralat carian laluan (' + side + '):', error);
      state.resultsEl.innerHTML = '<div class="search-result-item" style="color:red;">Ralat carian. Sila cuba lagi.</div>';
      state.resultsEl.classList.add('show');
    });
}

function laluanKemaskiniMarker(side) {
  const state = laluanState[side];
  if (state.marker) { map.removeLayer(state.marker); state.marker = null; }
  if (!state.coord) return;
  const isDari = side === 'dari';
  state.marker = L.marker([state.coord.lat, state.coord.lng], {
    icon: L.divIcon({
      className: 'laluan-point-icon',
      html: `<div class="laluan-point ${isDari ? 'laluan-point-a' : 'laluan-point-b'}"><span>${isDari ? 'A' : 'B'}</span></div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    }),
  }).addTo(map).bindPopup(`<b>${isDari ? 'Dari' : 'Ke'}:</b><br>${state.coord.label}`);
}

function laluanPilihLokasi(side, lat, lng, nama) {
  const state = laluanState[side];
  state.coord = { lat: parseFloat(lat), lng: parseFloat(lng), label: nama };
  state.inputEl.value = nama.length > 45 ? nama.substring(0, 45) + '...' : nama;
  state.resultsEl.classList.remove('show');
  laluanKemaskiniMarker(side);
  if (laluanState.dari.coord && laluanState.ke.coord) laluanCariLaluan();
}

async function laluanCariLaluan() {
  const dari = laluanState.dari.coord;
  const ke = laluanState.ke.coord;
  const infoEl = document.getElementById('laluan-info');
  if (!dari || !ke) {
    infoEl.innerHTML = '<div class="laluan-info-msg">Sila pilih lokasi "Dari" dan "Ke" daripada senarai cadangan.</div>';
    return;
  }
  if (laluanRouteLayer) { map.removeLayer(laluanRouteLayer); laluanRouteLayer = null; }
  infoEl.innerHTML = '<div class="laluan-info-msg"><i class="fa-solid fa-spinner fa-spin"></i> Mengira laluan...</div>';
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${dari.lng},${dari.lat};${ke.lng},${ke.lat}?geometries=geojson&overview=full&steps=false`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Gagal dapatkan laluan');
    const data = await response.json();
    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) throw new Error('Tiada laluan ditemui');
    const route = data.routes[0];
    const coords = route.geometry.coordinates.map((c) => [c[1], c[0]]);
    laluanRouteLayer = L.polyline(coords, { color: '#00897b', weight: 5, opacity: 0.85 }).addTo(map);
    map.fitBounds(laluanRouteLayer.getBounds(), { padding: [60, 60] });
    const jarakKm = (route.distance / 1000).toFixed(1);
    const masaMinit = Math.round(route.duration / 60);
    const masaTeks = masaMinit >= 60 ? `${Math.floor(masaMinit / 60)} jam ${masaMinit % 60} minit` : `${masaMinit} minit`;
    infoEl.innerHTML = `<div class="laluan-info-hasil"><i class="fa-solid fa-road"></i> Jarak: <b>${jarakKm} km</b>&nbsp;&nbsp;|&nbsp;&nbsp;<i class="fa-solid fa-clock"></i> Anggaran: <b>${masaTeks}</b></div>`;
  } catch (error) {
    console.error('Ralat laluan arah:', error);
    infoEl.innerHTML = '<div class="laluan-info-msg" style="color:#cc0000;">Gagal dapatkan laluan. Sila cuba lagi.</div>';
  }
}

function laluanInitInput(side, inputEl, resultsEl) {
  laluanState[side].inputEl = inputEl;
  laluanState[side].resultsEl = resultsEl;

  inputEl.addEventListener('input', function () {
    const query = this.value.trim();
    const state = laluanState[side];
    state.coord = null;
    if (state.timer) { clearTimeout(state.timer); state.timer = null; }
    if (query.length === 0) {
      if (state.controller) { state.controller.abort(); state.controller = null; }
      resultsEl.classList.remove('show');
      return;
    }
    state.timer = setTimeout(function () { laluanCariAlamat(side, query); }, 350);
  });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const state = laluanState[side];
      if (state.timer) { clearTimeout(state.timer); state.timer = null; }
      laluanCariAlamat(side, this.value.trim());
    }
  });

  resultsEl.addEventListener('click', function (e) {
    const item = e.target.closest('.search-result-item[data-lat]');
    if (!item) return;
    laluanPilihLokasi(item.dataset.side, item.dataset.lat, item.dataset.lng, item.dataset.nama);
  });
}

const laluanDariInputEl = document.getElementById('laluan-dari-input');
const laluanKeInputEl = document.getElementById('laluan-ke-input');
if (laluanDariInputEl && laluanKeInputEl) {
  laluanInitInput('dari', laluanDariInputEl, document.getElementById('laluan-dari-results'));
  laluanInitInput('ke', laluanKeInputEl, document.getElementById('laluan-ke-results'));

  document.getElementById('laluan-cari-btn').addEventListener('click', function (e) {
    e.preventDefault();
    laluanCariLaluan();
  });

  document.getElementById('laluan-swap-btn').addEventListener('click', function () {
    const dariCoord = laluanState.dari.coord;
    const keCoord = laluanState.ke.coord;
    const dariVal = laluanDariInputEl.value;
    const keVal = laluanKeInputEl.value;
    laluanState.dari.coord = keCoord;
    laluanState.ke.coord = dariCoord;
    laluanDariInputEl.value = keVal;
    laluanKeInputEl.value = dariVal;
    laluanKemaskiniMarker('dari');
    laluanKemaskiniMarker('ke');
    if (laluanState.dari.coord && laluanState.ke.coord) laluanCariLaluan();
  });

  document.querySelectorAll('.laluan-clear-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      const side = this.dataset.target;
      const state = laluanState[side];
      state.coord = null;
      state.inputEl.value = '';
      state.resultsEl.classList.remove('show');
      state.resultsEl.innerHTML = '';
      laluanKemaskiniMarker(side);
      if (laluanRouteLayer) { map.removeLayer(laluanRouteLayer); laluanRouteLayer = null; }
      document.getElementById('laluan-info').innerHTML = '';
      state.inputEl.focus();
    });
  });

  // Tutup dropdown cadangan bila klik di luar panel laluan
  document.addEventListener('click', function (e) {
    const panel = document.getElementById('laluan-panel');
    if (panel && !panel.contains(e.target)) {
      document.getElementById('laluan-dari-results').classList.remove('show');
      document.getElementById('laluan-ke-results').classList.remove('show');
    }
  });

  // Elak touch/scroll di panel laluan menyebabkan gangguan pada peta di belakang
  ['laluan-panel', 'laluan-dari-results', 'laluan-ke-results'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', function (e) { e.stopPropagation(); });
    el.addEventListener('mousedown', function (e) { e.stopPropagation(); });
    el.addEventListener('touchstart', function (e) { e.stopPropagation(); }, { passive: false });
    el.addEventListener('touchmove', function (e) { e.stopPropagation(); }, { passive: false });
    el.addEventListener('wheel', function (e) { e.stopPropagation(); });
  });
}

// ============================================
// SIDE MENU FUNCTIONS
// ============================================
function toggleMenu() {
  document.getElementById('side-menu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function resetPeta() { map.setView([1.85, 103.3], 9); toggleMenu(); }
function toggleFilter() {
  const filterDiv = document.getElementById('filter-zon');
  filterDiv.style.display = filterDiv.style.display === 'none' ? 'block' : 'none';
}
function toggleZon(zon, checkbox) {
  layerZon[zon].forEach((layer) => {
    if (checkbox.checked) map.addLayer(layer);
    else map.removeLayer(layer);
  });
}
function senaraiBalai() {
  const listDiv = document.getElementById('list-balai');
  if (listDiv.style.display === 'none' || listDiv.style.display === '') {
    let html = '';
    dataBalai.forEach((b) => {
      html += `<div onclick="flyToBalai(${b.lat}, ${b.lng})"><i class="fa-solid fa-building-shield"></i> ${b.nama} <small style="color:#999;">(${namaZon[b.zon]})</small></div>`;
    });
    listDiv.innerHTML = html;
    listDiv.style.display = 'block';
  } else {
    listDiv.style.display = 'none';
  }
}
function flyToBalai(lat, lng) { map.flyTo([lat, lng], 15); toggleMenu(); }

// ============================================
// STOP TOUCH/MOUSE EVENT
// ============================================
const popupModal = document.getElementById('popup-modal');
const popupContent = document.getElementById('popup-content');
const sideMenu = document.getElementById('side-menu');
const menuBody = document.getElementById('menu-body');
const searchResultsEl = document.getElementById('search-results');

[popupModal, popupContent, sideMenu, menuBody, searchResultsEl].forEach((el) => {
  if (el) {
    el.addEventListener('touchmove', function (e) { e.stopPropagation(); }, { passive: false });
    el.addEventListener('mousedown', function (e) { e.stopPropagation(); });
    el.addEventListener('mousewheel', function (e) { e.stopPropagation(); });
    el.addEventListener('wheel', function (e) { e.stopPropagation(); });
    el.addEventListener('scroll', function (e) { e.stopPropagation(); });
  }
});

// ============================================
// DATA KAWASAN JAGAAN PLUS
// ============================================
const dataKawasanBalai = [
  { balai: 'BBP TEBRAU', kmDari: 0, kmHingga: 8, arah: 'UTARA' },
  { balai: 'BBP KEMPAS', kmDari: 8, kmHingga: 14, arah: 'UTARA' },
  { balai: 'BBP SKUDAI', kmDari: 14, kmHingga: 21.5, arah: 'UTARA' },
  { balai: 'BBP BANDAR BARU KULAI', kmDari: 21.5, kmHingga: 27.8, arah: 'UTARA' },
  { balai: 'BBP KULAI', kmDari: 27.8, kmHingga: 41.3, arah: 'UTARA' },
  { balai: 'BBP RENGGAM', kmDari: 41.3, kmHingga: 72.6, arah: 'UTARA' },
  { balai: 'BBP AYER HITAM', kmDari: 72.6, kmHingga: 99.5, arah: 'UTARA' },
  { balai: 'BBP YONG PENG', kmDari: 99.5, kmHingga: 142.4, arah: 'UTARA' },
  { balai: 'BBP PAGOH', kmDari: 142.4, kmHingga: 157, arah: 'UTARA' },
  { balai: 'BBP BUKIT GAMBIR', kmDari: 157, kmHingga: 169.4, arah: 'UTARA' },
  { balai: 'BBP TANGKAK', kmDari: 169.4, kmHingga: 180.3, arah: 'UTARA' },
  { balai: 'BBP KEMPAS', kmDari: 0, kmHingga: 6.8, arah: 'SELATAN' },
  { balai: 'BBP SKUDAI', kmDari: 6.8, kmHingga: 14.8, arah: 'SELATAN' },
  { balai: 'BBP BANDAR BARU KULAI', kmDari: 14.8, kmHingga: 19.2, arah: 'SELATAN' },
  { balai: 'BBP KULAI', kmDari: 19.2, kmHingga: 41.3, arah: 'SELATAN' },
  { balai: 'BBP RENGGAM', kmDari: 41.3, kmHingga: 58.7, arah: 'SELATAN' },
  { balai: 'BBP RENGGAM', kmDari: 58.7, kmHingga: 72.6, arah: 'SELATAN' },
  { balai: 'BBP AYER HITAM', kmDari: 72.6, kmHingga: 80.5, arah: 'SELATAN' },
  { balai: 'BBP YONG PENG', kmDari: 80.5, kmHingga: 94.3, arah: 'SELATAN' },
  { balai: 'BBP YONG PENG', kmDari: 94.3, kmHingga: 99.4, arah: 'SELATAN' },
  { balai: 'BBP PAGOH', kmDari: 99.5, kmHingga: 141.8, arah: 'SELATAN' },
  { balai: 'BBP BUKIT GAMBIR', kmDari: 141.8, kmHingga: 157.5, arah: 'SELATAN' },
  { balai: 'BBP TANGKAK', kmDari: 157.5, kmHingga: 168.8, arah: 'SELATAN' },
  { balai: 'BBP JASIN BESTARI', kmDari: 168.8, kmHingga: 180, arah: 'SELATAN' },
];

function cariBalaiArah(km, arah) {
  return dataKawasanBalai.find(item => item.arah === arah && km >= item.kmDari && km <= item.kmHingga) || null;
}

function updateInfoPanel(km, jenis = 'PLUS', arahLabel = '') {
  const panel = document.getElementById('info-panel');
  if (!panel) return;
  const kmDisplay = document.getElementById('info-km');
  const utaraDiv = document.getElementById('info-utara');
  const utaraJulat = document.getElementById('info-utara-julat');
  const selatanDiv = document.getElementById('info-selatan');
  const selatanJulat = document.getElementById('info-selatan-julat');

  const utara = cariBalaiArah(km, 'UTARA');
  const selatan = cariBalaiArah(km, 'SELATAN');

  kmDisplay.innerHTML = `<i class="fa-solid fa-location-dot"></i> KM ${km.toFixed(1)} (${jenis}${arahLabel ? ' - ' + arahLabel : ''})`;

  if (utara) { utaraDiv.textContent = utara.balai; utaraJulat.textContent = `KM ${utara.kmDari} - ${utara.kmHingga}`; }
  else { utaraDiv.textContent = '-'; utaraJulat.textContent = '-'; }

  if (selatan) { selatanDiv.textContent = selatan.balai; selatanJulat.textContent = `KM ${selatan.kmDari} - ${selatan.kmHingga}`; }
  else { selatanDiv.textContent = '-'; selatanJulat.textContent = '-'; }

  panel.style.display = 'block';
}
function tutupInfoPanel() { const panel = document.getElementById('info-panel'); if (panel) panel.style.display = 'none'; }

// ============================================
// DATA KAWASAN JAGAAN EDL - UTARA=PANDAN, SELATAN=WOODLAND
// ============================================
const dataKawasanBalaiEDL = [
  { balai: 'BBP LARKIN', kmDari: 0, kmHingga: 5.5, arah: 'UTARA' },
  { balai: 'BBP TEBRAU', kmDari: 5.5, kmHingga: 8.1, arah: 'UTARA' },
  { balai: 'BBP LARKIN', kmDari: 0, kmHingga: 5.5, arah: 'SELATAN' },
  { balai: 'BBP TEBRAU', kmDari: 5.5, kmHingga: 8.1, arah: 'SELATAN' },
];

function cariBalaiArahEDL(km, arah) {
  return dataKawasanBalaiEDL.find(item => item.arah === arah && km >= item.kmDari && km <= item.kmHingga) || null;
}

function updateInfoPanelEDL(km, arahLabel = '') {
  const panel = document.getElementById('info-panel-edl');
  if (!panel) return;
  const kmDisplay = document.getElementById('info-km-edl');
  const utaraDiv = document.getElementById('info-utara-edl');
  const utaraJulat = document.getElementById('info-utara-edl-julat');
  const selatanDiv = document.getElementById('info-selatan-edl');
  const selatanJulat = document.getElementById('info-selatan-edl-julat');

  const utara = cariBalaiArahEDL(km, 'UTARA');
  const selatan = cariBalaiArahEDL(km, 'SELATAN');

  kmDisplay.innerHTML = `<i class="fa-solid fa-location-dot"></i> KM ${km.toFixed(1)} (EDL${arahLabel ? ' - ' + arahLabel : ''})`;

  if (utara) { utaraDiv.textContent = utara.balai; utaraJulat.textContent = `KM ${utara.kmDari} - ${utara.kmHingga}`; }
  else { utaraDiv.textContent = '-'; utaraJulat.textContent = '-'; }

  if (selatan) { selatanDiv.textContent = selatan.balai; selatanJulat.textContent = `KM ${selatan.kmDari} - ${selatan.kmHingga}`; }
  else { selatanDiv.textContent = '-'; selatanJulat.textContent = '-'; }

  panel.style.display = 'block';
}
function tutupInfoPanelEDL() { const panel = document.getElementById('info-panel-edl'); if (panel) panel.style.display = 'none'; }

// ============================================
// DATA KAWASAN JAGAAN SDE - UTARA=SENAI, SELATAN=PENAWAR
// ============================================
const dataKawasanBalaiSDE = [
  { balai: 'BBP BANDAR BARU KULAI', kmDari: 0, kmHingga: 21.8, arah: 'SELATAN' },
  { balai: 'BBP JOHOR JAYA', kmDari: 21.8, kmHingga: 42.1, arah: 'SELATAN' },
  { balai: 'BBP PASIR GUDANG', kmDari: 42.1, kmHingga: 47.7, arah: 'SELATAN' },
  { balai: 'BBP PENAWAR', kmDari: 47.7, kmHingga: 69.3, arah: 'SELATAN' },
  { balai: 'BBP JOHOR JAYA', kmDari: 0, kmHingga: 21.3, arah: 'UTARA' },
  { balai: 'BBP PASIR GUDANG', kmDari: 21.3, kmHingga: 41.8, arah: 'UTARA' },
  { balai: 'BBP PENAWAR', kmDari: 41.8, kmHingga: 69.3, arah: 'UTARA' },
];

function cariBalaiArahSDE(km, arah) {
  return dataKawasanBalaiSDE.find(item => item.arah === arah && km >= item.kmDari && km <= item.kmHingga) || null;
}

function updateInfoPanelSDE(km, arahLabel = '') {
  const panel = document.getElementById('info-panel-sde');
  if (!panel) return;
  const kmDisplay = document.getElementById('info-km-sde');
  const utaraDiv = document.getElementById('info-utara-sde');
  const utaraJulat = document.getElementById('info-utara-sde-julat');
  const selatanDiv = document.getElementById('info-selatan-sde');
  const selatanJulat = document.getElementById('info-selatan-sde-julat');

  const utara = cariBalaiArahSDE(km, 'UTARA');   // SENAI
  const selatan = cariBalaiArahSDE(km, 'SELATAN'); // PENAWAR

  kmDisplay.innerHTML = `<i class="fa-solid fa-location-dot"></i> KM ${km.toFixed(1)} (SDE${arahLabel ? ' - ' + arahLabel : ''})`;

  if (utara) { utaraDiv.textContent = utara.balai; utaraJulat.textContent = `KM ${utara.kmDari} - ${utara.kmHingga}`; }
  else { utaraDiv.textContent = '-'; utaraJulat.textContent = '-'; }

  if (selatan) { selatanDiv.textContent = selatan.balai; selatanJulat.textContent = `KM ${selatan.kmDari} - ${selatan.kmHingga}`; }
  else { selatanDiv.textContent = '-'; selatanJulat.textContent = '-'; }

  panel.style.display = 'block';
}
function tutupInfoPanelSDE() { const panel = document.getElementById('info-panel-sde'); if (panel) panel.style.display = 'none'; }

// ============================================
// DATA KM – MUAT KML PLUS & PG
// ============================================
let dataKM_Utara = [], dataKM_Selatan = [], dataKMPG_PasirGudang = [], dataKMPG_Perling = [];
const kmMapPlus = { utara: new Map(), selatan: new Map() };
const kmMapPG = { pasirgudang: new Map(), perling: new Map() };
let layerKMMarker = null, kmMarkerVisible = false;

async function loadKMLData() {
  try {
    const [respUtara, respSelatan] = await Promise.all([
      fetch('PLUS HALA UTARA.kml'), fetch('PLUS HALA SELATAN.kml')
    ]);
    if (!respUtara.ok) throw new Error('Fail PLUS HALA UTARA tidak dijumpai.');
    if (!respSelatan.ok) throw new Error('Fail PLUS HALA SELATAN tidak dijumpai.');
    const [textUtara, textSelatan] = await Promise.all([respUtara.text(), respSelatan.text()]);
    dataKM_Utara = parseKMLPointsDenganKM(textUtara);
    dataKM_Selatan = parseKMLPointsDenganKM(textSelatan);
    kmMapPlus.utara = binaKMMapLebuhrayaBaru(dataKM_Utara);
    kmMapPlus.selatan = binaKMMapLebuhrayaBaru(dataKM_Selatan);
    console.log(`[OK] PLUS Utara: ${dataKM_Utara.length} titik, PLUS Selatan: ${dataKM_Selatan.length} titik`);
    binaLayerKMMarker();
  } catch (error) {
    console.error('[RALAT] Gagal memuatkan fail KML PLUS:', error);
    alert('Gagal memuatkan data KM PLUS. Pastikan fail "PLUS HALA UTARA.kml" dan "PLUS HALA SELATAN.kml" wujud.');
  }
}

async function loadKMLPasirGudang() {
  try {
    const [respPG, respPerling] = await Promise.all([
      fetch('PG HALA PASIR GUDANG.kml'), fetch('PG HALA PERLING.kml')
    ]);
    if (!respPG.ok) throw new Error('Fail PG HALA PASIR GUDANG tidak dijumpai.');
    if (!respPerling.ok) throw new Error('Fail PG HALA PERLING tidak dijumpai.');
    const [textPG, textPerling] = await Promise.all([respPG.text(), respPerling.text()]);
    dataKMPG_PasirGudang = parseKMLPointsDenganKM(textPG);
    dataKMPG_Perling = parseKMLPointsDenganKM(textPerling);
    kmMapPG.pasirgudang = binaKMMapLebuhrayaBaru(dataKMPG_PasirGudang);
    kmMapPG.perling = binaKMMapLebuhrayaBaru(dataKMPG_Perling);
    console.log(`[OK] PG Pasir Gudang: ${dataKMPG_PasirGudang.length} titik, PG Perling: ${dataKMPG_Perling.length} titik`);
    binaLayerLebuhraya();
  } catch (error) {
    console.error('[RALAT] Gagal memuatkan fail KML PG:', error);
    alert('Gagal memuatkan data KM Pasir Gudang. Pastikan fail "PG HALA PASIR GUDANG.kml" dan "PG HALA PERLING.kml" wujud.');
  }
}

function parseKMLPoints(kmlText) {
  const parser = new DOMParser();
  const kmlDoc = parser.parseFromString(kmlText, 'text/xml');
  const pointNodes = kmlDoc.getElementsByTagName('Point');
  const coords = [];
  for (let i = 0; i < pointNodes.length; i++) {
    const coordNode = pointNodes[i].getElementsByTagName('coordinates')[0];
    if (coordNode) {
      const coordText = coordNode.textContent.trim();
      const parts = coordText.split(',').map(Number);
      coords.push([parts[1], parts[0]]);
    }
  }
  return coords;
}

function parseKMLPointsPG(kmlText) {
  const parser = new DOMParser();
  const kmlDoc = parser.parseFromString(kmlText, 'text/xml');
  const placemarks = kmlDoc.getElementsByTagName('Placemark');
  const points = [];
  for (let i = 0; i < placemarks.length; i++) {
    const pm = placemarks[i];
    const pointNode = pm.getElementsByTagName('Point')[0];
    if (!pointNode) continue;
    const coordNode = pointNode.getElementsByTagName('coordinates')[0];
    if (!coordNode) continue;
    const coordText = coordNode.textContent.trim();
    const parts = coordText.split(',').map(Number);
    if (parts.length < 2) continue;
    const lng = parts[0], lat = parts[1];
    if (!isNaN(lat) && !isNaN(lng)) points.push({ lat, lng });
  }
  return points;
}

function binaLayerKMMarker() {
  if (dataKM_Utara.length === 0 && dataKM_Selatan.length === 0) return;
  layerKMMarker = L.layerGroup();

  function tambahMarkerArray(arr, warna, labelArah) {
    arr.forEach((p) => {
      const kmValue = p.km.toFixed(1);
      const marker = L.circleMarker([p.lat, p.lng], { radius: 4, fillColor: warna, color: warna, weight: 1, opacity: 0.8, fillOpacity: 0.9 });
      marker.bindTooltip(`<b><i class="fa-solid fa-location-dot"></i> ${kmValue} KM (${labelArah})</b>`, { permanent: false, direction: 'top', offset: [0, -8], className: 'km-tooltip' });
      marker.on('click', function () {
        const kmNum = parseFloat(kmValue);
        updateInfoPanel(kmNum, 'PLUS', labelArah);
        lokasiTerakhir = { lat: p.lat, lng: p.lng, alamat: `KM ${kmValue} (PLUS - ${labelArah})` };
      });
      layerKMMarker.addLayer(marker);
    });
  }

  tambahMarkerArray(dataKM_Utara, '#2196F3', 'Utara');
  tambahMarkerArray(dataKM_Selatan, '#F44336', 'Selatan');
  console.log('[OK] Layer KM PLUS marker sedia (dua arah).');
}

let layerLebuhraya = null, lebuhrayaVisible = false;

function binaLayerLebuhraya() {
  if (dataKMPG_PasirGudang.length === 0 && dataKMPG_Perling.length === 0) return;
  layerLebuhraya = L.layerGroup();

  function tambahGarisan(arr, warna, labelArah) {
    if (arr.length === 0) return;
    const latlngs = arr.map(p => [p.lat, p.lng]);
    const polyline = L.polyline(latlngs, { color: warna, weight: 6, opacity: 0.9, smoothFactor: 1 });
    polyline.bindPopup(`<i class="fa-solid fa-road"></i> Lebuhraya Pasir Gudang - ${labelArah}`);
    layerLebuhraya.addLayer(polyline);
  }

  function tambahMarkerKM(arr, warna, labelArah) {
    arr.forEach((p) => {
      const kmValue = p.km.toFixed(1);
      const marker = L.circleMarker([p.lat, p.lng], { radius: 4, fillColor: warna, color: warna, weight: 1, opacity: 0.8, fillOpacity: 0.9 });
      marker.bindTooltip(`<b><i class="fa-solid fa-location-dot"></i> ${kmValue} KM (${labelArah})</b>`, { permanent: false, direction: 'top', offset: [0, -8], className: 'km-tooltip' });
      marker.on('click', function () {
        lokasiTerakhir = { lat: p.lat, lng: p.lng, alamat: `KM ${kmValue} (PG - ${labelArah})` };
      });
      layerLebuhraya.addLayer(marker);
    });
  }

  tambahGarisan(dataKMPG_PasirGudang, '#FF9800', 'Pasir Gudang');
  tambahGarisan(dataKMPG_Perling, '#4CAF50', 'Perling');
  tambahMarkerKM(dataKMPG_PasirGudang, '#FF9800', 'Pasir Gudang');
  tambahMarkerKM(dataKMPG_Perling, '#4CAF50', 'Perling');
  console.log('[OK] Layer Lebuhraya PG sedia (dua arah, dengan titik KM setiap 100m).');
}

function toggleKMMarker(checkbox) {
  if (!layerKMMarker) {
    if (checkbox) checkbox.checked = false;
    alert('Data KM PLUS masih dimuatkan. Sila tunggu sebentar.');
    loadKMLData(); return;
  }
  if (!kmMarkerVisible) { layerKMMarker.addTo(map); kmMarkerVisible = true; }
  else { map.removeLayer(layerKMMarker); kmMarkerVisible = false; }
  if (checkbox) checkbox.checked = kmMarkerVisible;
}

function toggleLebuhraya(checkbox) {
  if (!layerLebuhraya) {
    if (checkbox) checkbox.checked = false;
    alert('Data Lebuhraya Pasir Gudang masih dimuatkan. Sila tunggu sebentar.');
    loadKMLPasirGudang(); return;
  }
  if (!lebuhrayaVisible) { layerLebuhraya.addTo(map); lebuhrayaVisible = true; }
  else { map.removeLayer(layerLebuhraya); lebuhrayaVisible = false; }
  if (checkbox) checkbox.checked = lebuhrayaVisible;
}

// ============================================
// SISTEM GENERIK UNTUK LEBUHRAYA BARU (SDE, SECOND LINK, EDL)
// ============================================
function parseKMLPointsDenganKM(kmlText) {
  const parser = new DOMParser();
  const kmlDoc = parser.parseFromString(kmlText, 'text/xml');
  const placemarks = kmlDoc.getElementsByTagName('Placemark');
  const points = [];
  let guna_anggaran_fallback = false;

  for (let i = 0; i < placemarks.length; i++) {
    const pm = placemarks[i];
    const pointNode = pm.getElementsByTagName('Point')[0];
    if (!pointNode) continue;
    const coordNode = pointNode.getElementsByTagName('coordinates')[0];
    if (!coordNode) continue;
    const coordText = coordNode.textContent.trim();
    const parts = coordText.split(',').map(Number);
    if (parts.length < 2) continue;
    const lng = parts[0], lat = parts[1];
    if (isNaN(lat) || isNaN(lng)) continue;

    let kmValue = null, jarakMeter = null;
    const simpleDataNodes = pm.getElementsByTagName('SimpleData');
    for (let j = 0; j < simpleDataNodes.length; j++) {
      const namaField = simpleDataNodes[j].getAttribute('name');
      if (namaField === 'KM') {
        const rawKM = simpleDataNodes[j].textContent.trim();
        const match = rawKM.match(/([\d.]+)/);
        if (match) kmValue = parseFloat(match[1]);
      } else if (namaField === 'distance') {
        const rawJarak = parseFloat(simpleDataNodes[j].textContent.trim());
        if (!isNaN(rawJarak)) jarakMeter = rawJarak;
      }
    }

    if (kmValue === null || isNaN(kmValue)) {
      if (jarakMeter !== null) kmValue = jarakMeter / 1000;
      else kmValue = i * 0.1;
      guna_anggaran_fallback = true;
    }
    points.push({ lat, lng, km: kmValue });
  }

  if (guna_anggaran_fallback) {
    console.warn('[AMARAN] Sebahagian/semua titik dalam fail KML ini tiada label "KM" sebenar - nilai KM dianggarkan.');
  }
  points.sort((a, b) => a.km - b.km);
  return points;
}

function binaKMMapLebuhrayaBaru(arr) {
  const map = new Map();
  arr.forEach((p) => map.set(p.km.toFixed(1), p));
  return map;
}

async function loadKMLLebuhrayaBaru(mode) {
  const cfg = cariConfigLebuhraya(mode);
  if (!cfg) return;
  try {
    const [resp1, resp2] = await Promise.all([fetch(cfg.arah[0].file), fetch(cfg.arah[1].file)]);
    if (!resp1.ok) throw new Error(`Fail ${cfg.arah[0].file} tidak dijumpai.`);
    if (!resp2.ok) throw new Error(`Fail ${cfg.arah[1].file} tidak dijumpai.`);
    const [text1, text2] = await Promise.all([resp1.text(), resp2.text()]);

    dataLebuhrayaBaru[mode][cfg.arah[0].key] = parseKMLPointsDenganKM(text1);
    dataLebuhrayaBaru[mode][cfg.arah[1].key] = parseKMLPointsDenganKM(text2);
    kmMapLebuhrayaBaru[mode][cfg.arah[0].key] = binaKMMapLebuhrayaBaru(dataLebuhrayaBaru[mode][cfg.arah[0].key]);
    kmMapLebuhrayaBaru[mode][cfg.arah[1].key] = binaKMMapLebuhrayaBaru(dataLebuhrayaBaru[mode][cfg.arah[1].key]);

    console.log(`[OK] ${cfg.labelMenu}: ${cfg.arah[0].label} ${dataLebuhrayaBaru[mode][cfg.arah[0].key].length} titik, ${cfg.arah[1].label} ${dataLebuhrayaBaru[mode][cfg.arah[1].key].length} titik`);
    binaLayerLebuhrayaBaru(mode);
  } catch (error) {
    console.error(`[RALAT] Gagal memuatkan fail KML ${cfg.labelMenu}:`, error);
    alert(`Gagal memuatkan data KM ${cfg.labelMenu}. Pastikan fail "${cfg.arah[0].file}" dan "${cfg.arah[1].file}" wujud.`);
  }
}

function binaLayerLebuhrayaBaru(mode) {
  const cfg = cariConfigLebuhraya(mode);
  if (!cfg) return;
  const arr1 = dataLebuhrayaBaru[mode][cfg.arah[0].key];
  const arr2 = dataLebuhrayaBaru[mode][cfg.arah[1].key];
  if (arr1.length === 0 && arr2.length === 0) return;

  const layer = L.layerGroup();

  function tambahGarisan(arr, warna, label) {
    if (arr.length === 0) return;
    const latlngs = arr.map((p) => [p.lat, p.lng]);
    const polyline = L.polyline(latlngs, { color: warna, weight: 6, opacity: 0.9, smoothFactor: 1 });
    polyline.bindPopup(`<i class="fa-solid fa-road"></i> ${cfg.labelMenu} - ${label}`);
    layer.addLayer(polyline);
  }

  function tambahMarkerKM(arr, warna, label) {
    arr.forEach((p) => {
      const kmValue = p.km.toFixed(1);
      const marker = L.circleMarker([p.lat, p.lng], { radius: 4, fillColor: warna, color: warna, weight: 1, opacity: 0.8, fillOpacity: 0.9 });
      marker.bindTooltip(`<b><i class="fa-solid fa-location-dot"></i> ${kmValue} KM (${cfg.labelMenu} - ${label})</b>`, { permanent: false, direction: 'top', offset: [0, -8], className: 'km-tooltip' });
      marker.on('click', function () {
        if (cfg.mode === 'edl') updateInfoPanelEDL(parseFloat(kmValue), label);
        else if (cfg.mode === 'sde') updateInfoPanelSDE(parseFloat(kmValue), label);
        lokasiTerakhir = { lat: p.lat, lng: p.lng, alamat: `${cfg.labelMenu} KM ${kmValue} (${label})` };
      });
      layer.addLayer(marker);
    });
  }

  tambahGarisan(arr1, cfg.warnaGaris[0], cfg.arah[0].label);
  tambahGarisan(arr2, cfg.warnaGaris[1], cfg.arah[1].label);
  tambahMarkerKM(arr1, cfg.warnaGaris[0], cfg.arah[0].label);
  tambahMarkerKM(arr2, cfg.warnaGaris[1], cfg.arah[1].label);

  layerLebuhrayaBaru[mode].layer = layer;
  console.log(`[OK] Layer ${cfg.labelMenu} sedia (dua arah, dengan titik KM setiap 100m).`);
}

function toggleLebuhrayaBaru(mode, checkbox) {
  const cfg = cariConfigLebuhraya(mode);
  if (!cfg) return;
  const state = layerLebuhrayaBaru[mode];
  if (!state.layer) {
    if (checkbox) checkbox.checked = false;
    alert(`Data ${cfg.labelMenu} masih dimuatkan. Sila tunggu sebentar.`);
    loadKMLLebuhrayaBaru(mode); return;
  }
  if (!state.visible) { state.layer.addTo(map); state.visible = true; }
  else { map.removeLayer(state.layer); state.visible = false; }
  if (checkbox) checkbox.checked = state.visible;
}

function cariKMLebuhrayaBaru(mode, query) {
  const cfg = cariConfigLebuhraya(mode);
  if (!cfg) return null;
  const match = query.match(/^\s*(?:km\s*)?([\d.]+)\s*(?:km)?\s*$/i);
  if (!match) return null;
  const num = parseFloat(match[1]);
  if (isNaN(num) || num < 0 || num > 300) return null;

  const arahInfo = cfg.arah.find((a) => a.key === arahCarian);
  if (!arahInfo) return null;
  const kmKey = num.toFixed(1);
  const map = kmMapLebuhrayaBaru[mode][arahInfo.key];
  if (!map) return null;
  const titik = map.get(kmKey);
  if (!titik) return null;
  return { lat: titik.lat, lng: titik.lng, km: kmKey, arah: arahInfo.key, arahLabel: arahInfo.label };
}

function cariKMLebuhrayaBaruJalankan(mode, query) {
  const cfg = cariConfigLebuhraya(mode);
  if (!cfg) return;
  if (query.length === 0) { searchResults.classList.remove('show'); return; }

  const arahKeys = cfg.arah.map((a) => a.key);
  if (!arahKeys.includes(arahCarian)) {
    searchResults.innerHTML = `<div class="search-result-item" style="color:#cc0000;">Sila pilih arah (<i class="fa-solid fa-arrow-up"></i> ${cfg.arah[0].label} / <i class="fa-solid fa-arrow-down"></i> ${cfg.arah[1].label}) terlebih dahulu.</div>`;
    searchResults.classList.add('show'); return;
  }

  const kmResult = cariKMLebuhrayaBaru(mode, query);
  if (kmResult) {
    searchResults.classList.remove('show');
    map.flyTo([kmResult.lat, kmResult.lng], 15);
    if (searchMarker) map.removeLayer(searchMarker);
    searchMarker = L.marker([kmResult.lat, kmResult.lng], {
      icon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
      }),
    }).addTo(map).bindPopup(`<b><i class="fa-solid fa-road"></i> KM ${kmResult.km} (${cfg.labelMenu} - ${kmResult.arahLabel})</b>`).openPopup();

    searchInput.value = `${cfg.mode.toUpperCase()} KM ${kmResult.km} (${kmResult.arahLabel})`;
    lokasiTerakhir = { lat: kmResult.lat, lng: kmResult.lng, alamat: `${cfg.labelMenu} KM ${kmResult.km} (${kmResult.arahLabel})` };

    if (mode === 'edl') updateInfoPanelEDL(parseFloat(kmResult.km), kmResult.arahLabel);
    else if (mode === 'sde') updateInfoPanelSDE(parseFloat(kmResult.km), kmResult.arahLabel);
  } else {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#999;">Format KM tidak sah atau arah ini tiada data. Contoh: 10.5, km 15, 20</div>';
    searchResults.classList.add('show');
  }
}

// ============================================
// POLIGON ZON DAN BALAI
// ============================================
let layerPoligonZon = null, layerPoligonBalai = null, poligonZonVisible = false, poligonBalaiVisible = false;
let kawasanJagaanPolygons = [];

async function loadKMLPolygon() {
  try {
    const response = await fetch('PETA KAWASAN JAGAAN BOMBA NEGERI JOHOR 2025.kml');
    if (!response.ok) throw new Error('Fail KML poligon tidak dijumpai.');
    const kmlText = await response.text();
    const parser = new DOMParser();
    const kmlDoc = parser.parseFromString(kmlText, 'text/xml');

    const placemarks = kmlDoc.getElementsByTagName('Placemark');
    const polygonsZon = [], polygonsBalai = [];

    for (let i = 0; i < placemarks.length; i++) {
      const pm = placemarks[i];
      const name = pm.getElementsByTagName('name')[0]?.textContent || 'Kawasan';
      const description = pm.getElementsByTagName('description')[0]?.textContent || '';

      let kategori = 'lain';
      if (/^ZON\s*\d/i.test(name)) kategori = 'zon';
      else if (/PERSEMPADANAN|SEMPADAN/i.test(name)) kategori = 'sempadan';
      else kategori = 'balai';

      function tambahPoligon(coords) {
        if (kategori === 'zon') polygonsZon.push({ name, description, coordinates: coords });
        else if (kategori === 'balai') polygonsBalai.push({ name, description, coordinates: coords });
      }

      const polyNodes = pm.getElementsByTagName('Polygon');
      if (polyNodes.length > 0) {
        for (let p = 0; p < polyNodes.length; p++) {
          const coordsText = polyNodes[p].getElementsByTagName('coordinates')[0]?.textContent.trim();
          if (coordsText) {
            const coordPairs = coordsText.split(/\s+/).map((pair) => {
              const [lng, lat] = pair.split(',').map(Number);
              return [lat, lng];
            });
            tambahPoligon(coordPairs);
          }
        }
      }

      const multiGeom = pm.getElementsByTagName('MultiGeometry');
      if (multiGeom.length > 0) {
        for (let m = 0; m < multiGeom.length; m++) {
          const innerPolys = multiGeom[m].getElementsByTagName('Polygon');
          for (let p = 0; p < innerPolys.length; p++) {
            const coordsText = innerPolys[p].getElementsByTagName('coordinates')[0]?.textContent.trim();
            if (coordsText) {
              const coordPairs = coordsText.split(/\s+/).map((pair) => {
                const [lng, lat] = pair.split(',').map(Number);
                return [lat, lng];
              });
              tambahPoligon(coordPairs);
            }
          }
        }
      }
    }

    if (polygonsZon.length > 0) {
      layerPoligonZon = L.layerGroup();
      polygonsZon.forEach((poly) => {
        const zonMatch = poly.name.match(/ZON\s*(\d)/i);
        let color = '#1E90FF', fillColor = '#1E90FF', fillOpacity = 0.3;
        if (zonMatch) {
          const zonNum = parseInt(zonMatch[1]);
          if (warnaZon[zonNum]) { color = warnaZon[zonNum]; fillColor = warnaZon[zonNum]; fillOpacity = 0.3; }
        }
        const polygonLayer = L.polygon(poly.coordinates, { color, weight: 3, opacity: 0.8, fillColor, fillOpacity, smoothFactor: 1 });
        let popupContent = `<b>${poly.name}</b>`;
        if (poly.description) {
          const descText = poly.description.replace(/<[^>]*>/g, '').substring(0, 200);
          popupContent += `<br>${descText}`;
        }
        polygonLayer.bindPopup(popupContent);
        polygonLayer.on('mouseover', function () { this.setStyle({ fillOpacity: 0.6, weight: 4 }); });
        polygonLayer.on('mouseout', function () { this.setStyle({ fillOpacity: fillOpacity, weight: 3 }); });
        layerPoligonZon.addLayer(polygonLayer);
      });
      console.log(`[OK] ${polygonsZon.length} poligon ZON berjaya dimuatkan.`);
    }

    if (polygonsBalai.length > 0) {
      layerPoligonBalai = L.layerGroup();
      polygonsBalai.forEach((poly) => {
        let color = '#1E90FF', fillColor = '#1E90FF', fillOpacity = 0.2;
        let balaiDipadan = null;
        const balaiMatch = poly.name.match(/BBP\s+([A-Z\s]+)/i);
        if (balaiMatch) {
          const cari = balaiMatch[1].trim();
          const found = dataBalai.find((b) => b.nama.toUpperCase().includes(cari.toUpperCase()));
          if (found) {
            balaiDipadan = found;
            if (warnaZon[found.zon]) { color = warnaZon[found.zon]; fillColor = warnaZon[found.zon]; fillOpacity = 0.2; }
          }
        }
        kawasanJagaanPolygons.push({ namaBalai: balaiDipadan ? balaiDipadan.nama : poly.name, coordinates: poly.coordinates });

        if (color === '#1E90FF') {
          const zonMatch = poly.name.match(/ZON\s*(\d)/i);
          if (zonMatch) {
            const zonNum = parseInt(zonMatch[1]);
            if (warnaZon[zonNum]) { color = warnaZon[zonNum]; fillColor = warnaZon[zonNum]; fillOpacity = 0.2; }
          }
        }

        const polygonLayer = L.polygon(poly.coordinates, { color, weight: 2, opacity: 0.7, fillColor, fillOpacity, smoothFactor: 1 });
        let popupContent = `<b>${poly.name}</b>`;
        if (poly.description) {
          const descText = poly.description.replace(/<[^>]*>/g, '').substring(0, 200);
          popupContent += `<br>${descText}`;
        }
        polygonLayer.bindPopup(popupContent);
        polygonLayer.on('mouseover', function () { this.setStyle({ fillOpacity: 0.4, weight: 3 }); });
        polygonLayer.on('mouseout', function () { this.setStyle({ fillOpacity: fillOpacity, weight: 2 }); });
        layerPoligonBalai.addLayer(polygonLayer);
      });
      console.log(`[OK] ${polygonsBalai.length} poligon Kawasan Balai berjaya dimuatkan.`);
    }
    console.log('[OK] Layer poligon sedia (tersembunyi).');
  } catch (error) {
    console.error('[RALAT] Gagal memuatkan poligon KML:', error);
    alert('Gagal memuatkan poligon kawasan. Pastikan fail "PETA KAWASAN JAGAAN BOMBA NEGERI JOHOR 2025.kml" wujud.');
  }
}

function togglePoligonBalai(checkbox) {
  if (!layerPoligonBalai) {
    if (checkbox) checkbox.checked = false;
    alert('Poligon Kawasan Balai masih dimuatkan. Sila tunggu sebentar atau muat semula halaman.');
    loadKMLPolygon(); return;
  }
  if (!poligonBalaiVisible) { layerPoligonBalai.addTo(map); poligonBalaiVisible = true; }
  else { map.removeLayer(layerPoligonBalai); poligonBalaiVisible = false; }
  if (checkbox) checkbox.checked = poligonBalaiVisible;
}

// ============================================
// MUAT SEMUA DATA SECARA AUTOMATIK
// ============================================
loadKMLData();
loadKMLPasirGudang();
loadKMLPolygon();
lebuhrayaBaruConfig.forEach((cfg) => loadKMLLebuhrayaBaru(cfg.mode));
muatSemuaDataJentera();

console.log('[OK] Peta Kawasan Jagaan JBPM Johor siap!');
console.log('[INFO] 34 Balai | 4 Zon | Search dengan toggle arah untuk KM PLUS dan KM PG');