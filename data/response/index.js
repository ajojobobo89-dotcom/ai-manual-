// ============= INDEX DATABASE AI ASISTEN =============
// File ini menggabungkan semua kategori respons

// Sapaan
const SAPAAN_RESPONSES = [
    {
        id: "sapaan-001",
        keywords: ["halo", "hlo", "helo", "hello", "hai", "hi", "hey", "hay"],
        response: "Halo! Ada yang bisa saya bantu hari ini? Saya asisten manual dengan 2000+ respons siap pakai. 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-002",
        keywords: ["selamat pagi", "pagi", "good morning", "morning", "pg"],
        response: "Selamat pagi! Semoga hari Anda menyenangkan dan penuh semangat. Ada yang bisa saya bantu? ☀️",
        category: "sapaan"
    },
    {
        id: "sapaan-003",
        keywords: ["selamat siang", "siang", "good afternoon"],
        response: "Selamat siang! Sudah makan siang? Jangan lupa istirahat sebentar ya. 🌤️",
        category: "sapaan"
    },
    {
        id: "sapaan-004",
        keywords: ["selamat sore", "sore", "good evening"],
        response: "Selamat sore! Bagaimana kabar Anda di sore hari ini? Semoga tetap produktif. 🌆",
        category: "sapaan"
    },
    {
        id: "sapaan-005",
        keywords: ["selamat malam", "malam", "good night", "night", "gn"],
        response: "Selamat malam! Semoga istirahat Anda nyenyak dan mimpi indah. 🌙",
        category: "sapaan"
    }
];

// Teknologi
const TEKNOLOGI_RESPONSES = [
    {
        id: "teknologi-001",
        keywords: ["apa itu ai", "apa itu kecerdasan buatan", "artificial intelligence", "ai"],
        response: "**AI** (Artificial Intelligence) atau Kecerdasan Buatan adalah simulasi kecerdasan manusia dalam mesin yang diprogram untuk berpikir, belajar, dan mengambil keputusan seperti manusia. 🤖",
        category: "teknologi"
    },
    {
        id: "teknologi-002",
        keywords: ["apa itu html", "html"],
        response: "**HTML** (HyperText Markup Language) adalah bahasa markup standar untuk membuat struktur halaman web. HTML menggunakan tag untuk menentukan elemen seperti heading, paragraf, gambar, dan link.",
        category: "teknologi"
    },
    {
        id: "teknologi-003",
        keywords: ["apa itu css", "css"],
        response: "**CSS** (Cascading Style Sheets) adalah bahasa untuk mengatur tampilan dokumen HTML. CSS mengontrol warna, font, layout, dan responsivitas website.",
        category: "teknologi"
    }
];

// Pendidikan
const PENDIDIKAN_RESPONSES = [
    {
        id: "pendidikan-001",
        keywords: ["cara belajar efektif", "tips belajar", "belajar efektif"],
        response: "**Tips Belajar Efektif:**\n\n1. Buat jadwal rutin\n2. Gunakan teknik Pomodoro (25 menit belajar, 5 menit istirahat)\n3. Pilih tempat nyaman\n4. Catat poin penting\n5. Review materi berkala\n6. Diskusi dengan teman",
        category: "pendidikan"
    }
];

// Gabungkan semua database
const AI_DATABASE = [
    ...SAPAAN_RESPONSES,
    ...TEKNOLOGI_RESPONSES,
    ...PENDIDIKAN_RESPONSES
    // Tambahkan kategori lainnya
];

// Export untuk digunakan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AI_DATABASE;
}
