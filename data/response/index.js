// ============= INDEX DATABASE AI ASISTEN =============
// Menggabungkan semua kategori respons

// Import semua kategori
const SAPAAN_RESPONSES = require('./kategori-01-sapaan.js');
const TEKNOLOGI_RESPONSES = require('./kategori-02-teknologi.js');
const PENDIDIKAN_RESPONSES = require('./kategori-03-pendidikan.js');
const KESEHATAN_RESPONSES = require('./kategori-04-kesehatan.js');
const MOTIVASI_RESPONSES = require('./kategori-05-motivasi.js');
const MAKANAN_RESPONSES = require('./kategori-06-makanan.js');
const HEWAN_RESPONSES = require('./kategori-07-hewan.js');
const WISATA_RESPONSES = require('./kategori-08-wisata.js');
const MATEMATIKA_RESPONSES = require('./kategori-09-matematika.js');
const FISIKA_RESPONSES = require('./kategori-10-fisika.js');
const KIMIA_RESPONSES = require('./kategori-11-kimia.js');
const BIOLOGI_RESPONSES = require('./kategori-12-biologi.js');
const BAHASA_RESPONSES = require('./kategori-13-bahasa.js');
const OLAHRAGA_RESPONSES = require('./kategori-14-olahraga.js');
const SENI_RESPONSES = require('./kategori-15-seni.js');
const BISNIS_RESPONSES = require('./kategori-16-bisnis.js');
const PSIKOLOGI_RESPONSES = require('./kategori-17-psikologi.js');
const ASTRONOMI_RESPONSES = require('./kategori-18-astronomi.js');
const SEJARAH_RESPONSES = require('./kategori-19-sejarah.js');
const BUDAYA_RESPONSES = require('./kategori-20-budaya.js');
const GAME_RESPONSES = require('./kategori-21-game.js');
const FILM_RESPONSES = require('./kategori-22-film.js');
const MUSIK_RESPONSES = require('./kategori-23-musik.js');
const FILSAFAT_RESPONSES = require('./kategori-24-filsafat.js');
const UMUM_RESPONSES = require('./kategori-25-umum.js');
const PEMBUAT_RESPONSES = require('./kategori-26-pembuat.js'); // <-- KATEGORI BARU

// Gabungkan semua database
const AI_DATABASE = [
    ...SAPAAN_RESPONSES,
    ...TEKNOLOGI_RESPONSES,
    ...PENDIDIKAN_RESPONSES,
    ...KESEHATAN_RESPONSES,
    ...MOTIVASI_RESPONSES,
    ...MAKANAN_RESPONSES,
    ...HEWAN_RESPONSES,
    ...WISATA_RESPONSES,
    ...MATEMATIKA_RESPONSES,
    ...FISIKA_RESPONSES,
    ...KIMIA_RESPONSES,
    ...BIOLOGI_RESPONSES,
    ...BAHASA_RESPONSES,
    ...OLAHRAGA_RESPONSES,
    ...SENI_RESPONSES,
    ...BISNIS_RESPONSES,
    ...PSIKOLOGI_RESPONSES,
    ...ASTRONOMI_RESPONSES,
    ...SEJARAH_RESPONSES,
    ...BUDAYA_RESPONSES,
    ...GAME_RESPONSES,
    ...FILM_RESPONSES,
    ...MUSIK_RESPONSES,
    ...FILSAFAT_RESPONSES,
    ...UMUM_RESPONSES,
    ...PEMBUAT_RESPONSES // <-- KATEGORI BARU
];

// Export untuk digunakan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AI_DATABASE;
}

// Untuk penggunaan di browser
window.AI_DATABASE = AI_DATABASE;
