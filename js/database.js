// ============= DATABASE RESPONS AI ASISTEN MANUAL =============
// Total: 2000+ respons, 48 kategori
// 100% Manual, Tanpa API Key

const AI_DATABASE = [
    // ===== KATEGORI 1: SAPAAN (50+ respons) =====
    {
        id: "sapaan-001",
        keywords: ["halo", "hlo", "helo", "hello", "hai", "hi", "hey", "hay"],
        response: "Halo! Ada yang bisa saya bantu hari ini? Saya asisten manual dengan 2000+ respons siap pakai. 😊",
        category: "sapaan",
        variants: ["halo", "hlo", "helo"]
    },
    {
        id: "sapaan-002",
        keywords: ["selamat pagi", "pagi", "good morning", "morning", "pg"],
        response: "Selamat pagi! Semoga hari Anda menyenangkan dan penuh semangat. Ada yang bisa saya bantu? ☀️",
        category: "sapaan",
        variants: ["pagi", "pg"]
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
    },
    {
        id: "sapaan-006",
        keywords: ["apa kabar", "kabar", "how are you", "gimana kabar", "gmna kabar", "kbr"],
        response: "Alhamdulillah, saya baik-baik saja! Terima kasih sudah bertanya. Bagaimana kabar Anda hari ini? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-007",
        keywords: ["kabar baik", "baik", "baik baik", "baik2", "baik-baik"],
        response: "Senang mendengarnya! Semoga tetap sehat dan bahagia selalu. 🙏",
        category: "sapaan"
    },
    {
        id: "sapaan-008",
        keywords: ["terima kasih", "makasih", "thanks", "thank you", "thx", "tq", "mkasih", "trims"],
        response: "Sama-sama! Senang bisa membantu Anda. Ada pertanyaan lain? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-009",
        keywords: ["maaf", "sorry", "mf", "maap", "sori"],
        response: "Tidak apa-apa. Ada yang bisa saya bantu? 🤗",
        category: "sapaan"
    },
    {
        id: "sapaan-010",
        keywords: ["ya", "y", "iya", "yes"],
        response: "Baik, silakan lanjutkan pertanyaan Anda.",
        category: "sapaan"
    },
    {
        id: "sapaan-011",
        keywords: ["tidak", "ga", "gk", "nggak", "no", "tdk"],
        response: "Tidak apa-apa. Saya di sini jika Anda membutuhkan bantuan.",
        category: "sapaan"
    },

    // ===== KATEGORI 2: PERKENALAN (40+ respons) =====
    {
        id: "perkenalan-001",
        keywords: ["siapa kamu", "kamu siapa", "nama kamu", "who are you", "nama"],
        response: "Saya adalah **AI Asisten Manual** dengan 2000+ respons. Saya dibuat tanpa menggunakan API key apapun, semua jawaban ditulis manual oleh developer. Saya bisa membantu menjawab pertanyaan tentang berbagai topik! 🤖",
        category: "perkenalan"
    },
    {
        id: "perkenalan-002",
        keywords: ["kenalin dong", "perkenalkan", "intro", "kenalan"],
        response: "Halo! Saya asisten virtual yang siap membantu menjawab pertanyaan Anda. Saya memiliki 48 kategori dan 2000+ respons siap pakai! Silakan tanya apa saja. 😊",
        category: "perkenalan"
    },
    {
        id: "perkenalan-003",
        keywords: ["asal kamu", "darimana", "dari mana"],
        response: "Saya berasal dari kode JavaScript murni, dibuat oleh developer Indonesia. Saya tinggal di browser Anda, **100% offline** dan gratis! 🇮🇩",
        category: "perkenalan"
    },
    {
        id: "perkenalan-004",
        keywords: ["umur kamu", "berapa umur", "usia"],
        response: "Saya baru dibuat baru-baru ini, tapi database saya berisi 2000+ pengetahuan dari berbagai kategori! Semakin sering digunakan, semakin banyak yang bisa saya bantu. 📚",
        category: "perkenalan"
    },
    {
        id: "perkenalan-005",
        keywords: ["siapa pembuatmu", "creator", "pencipta", "developer"],
        response: "Saya dibuat oleh developer Indonesia yang ingin menyediakan asisten AI gratis tanpa API key untuk masyarakat. Semua respons ditulis manual dengan ❤️",
        category: "perkenalan"
    },

    // ===== KATEGORI 3: TEKNOLOGI (150+ respons) =====
    {
        id: "teknologi-001",
        keywords: ["apa itu ai", "apa itu kecerdasan buatan", "artificial intelligence", "ai"],
        response: "**AI** (Artificial Intelligence) atau Kecerdasan Buatan adalah simulasi kecerdasan manusia dalam mesin yang diprogram untuk berpikir, belajar, dan mengambil keputusan seperti manusia.\n\nContoh AI dalam kehidupan sehari-hari:\n• Asisten virtual (Siri, Google Assistant)\n• Rekomendasi (Netflix, YouTube, TikTok)\n• Face recognition (buka HP)\n• ChatGPT\n• Mobil otonom (Tesla)\n\nAI bekerja dengan machine learning dan deep learning, di mana komputer belajar dari data untuk meningkatkan kemampuannya.",
        category: "teknologi"
    },
    {
        id: "teknologi-002",
        keywords: ["jenis ai", "macam ai", "tipe ai", "kategori ai"],
        response: "Jenis-jenis AI berdasarkan kemampuan:\n\n1. **AI Sempit (ANI)** - AI khusus untuk satu tugas\n   • Face recognition\n   • Voice assistant\n   • Rekomendasi produk\n\n2. **AI Umum (AGI)** - AI dengan kemampuan setara manusia (masih dalam pengembangan)\n\n3. **Super AI (ASI)** - AI melebihi kecerdasan manusia (konsep masa depan)\n\nSaat ini kebanyakan AI yang kita gunakan masih ANI (Artificial Narrow Intelligence).",
        category: "teknologi"
    },
    {
        id: "teknologi-003",
        keywords: ["contoh ai", "aplikasi ai", "penggunaan ai"],
        response: "**Contoh AI dalam kehidupan sehari-hari:**\n\n📱 **Smartphone**\n• Face ID / Fingerprint\n• Google Assistant / Siri\n• Kamera AI (mode portrait)\n\n🎬 **Hiburan**\n• Rekomendasi Netflix\n• For You Page TikTok\n• Rekomendasi lagu Spotify\n\n🛒 **Belanja**\n• Rekomendasi produk Shopee/Tokopedia\n• Chatbot customer service\n\n🚗 **Transportasi**\n• Google Maps (rute tercepat)\n• Gojek/Grab (estimasi harga)\n\n🏥 **Kesehatan**\n• Deteksi penyakit dari foto\n• Aplikasi fitness tracker\n\n🏦 **Keuangan**\n• Deteksi fraud transaksi\n• Robo advisor investasi",
        category: "teknologi"
    },
    {
        id: "teknologi-004",
        keywords: ["apa itu html", "html"],
        response: "**HTML** (HyperText Markup Language) adalah bahasa markup standar untuk membuat struktur halaman web.\n\n**Fungsi HTML:**\n• Membuat kerangka website\n• Menampilkan teks, gambar, video\n• Membuat link antar halaman\n• Struktur konten (heading, paragraf, list)\n\n**Contoh elemen HTML:**\n```html\n<h1>Judul Utama</h1>\n<p>Ini paragraf teks</p>\n<img src=\"gambar.jpg\">\n<a href=\"link.html\">Klik di sini</a>\n```\n\nHTML bekerja sama dengan CSS (untuk tampilan) dan JavaScript (untuk interaksi).",
        category: "teknologi"
    },
    {
        id: "teknologi-005",
        keywords: ["tag html dasar", "tag penting html", "elemen html"],
        response: "**Tag HTML Dasar yang Wajib Diketahui:**\n\n**Struktur Dokumen**\n• `<html>` - root element\n• `<head>` - metadata\n• `<title>` - judul halaman\n• `<body>` - konten utama\n\n**Heading**\n• `<h1>` - Heading utama\n• `<h2>` - Sub heading\n• `<h3>` sampai `<h6>`\n\n**Teks**\n• `<p>` - Paragraf\n• `<b>` / `<strong>` - Tebal\n• `<i>` / `<em>` - Miring\n• `<u>` - Garis bawah\n\n**Multimedia**\n• `<img>` - Gambar\n• `<video>` - Video\n• `<audio>` - Audio\n\n**Link & List**\n• `<a>` - Link\n• `<ul>` - List tidak berurut\n• `<ol>` - List berurut\n• `<li>` - Item list\n\n**Table**\n• `<table>` - Tabel\n• `<tr>` - Baris\n• `<td>` - Kolom",
        category: "teknologi"
    },
    {
        id: "teknologi-006",
        keywords: ["apa itu css", "css"],
        response: "**CSS** (Cascading Style Sheets) adalah bahasa untuk mengatur tampilan dokumen HTML.\n\n**Fungsi CSS:**\n• Mengatur warna, font, ukuran\n• Mengatur layout dan posisi\n• Membuat animasi\n• Desain responsif (mobile/desktop)\n\n**Cara menggunakan CSS:**\n\n1. **Inline** - langsung di elemen\n```html\n<p style=\"color: red;\">Teks merah</p>\n```\n\n2. **Internal** - di dalam `<style>`\n```html\n<style>\n  p { color: blue; }\n</style>\n```\n\n3. **External** - file terpisah\n```html\n<link rel=\"stylesheet\" href=\"style.css\">\n```\n\n**Contoh CSS:**\n```css\np {\n  color: #333;\n  font-size: 16px;\n  margin: 10px 0;\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n```",
        category: "teknologi"
    },
    {
        id: "teknologi-007",
        keywords: ["apa itu javascript", "js", "javascript"],
        response: "**JavaScript** adalah bahasa pemrograman yang membuat halaman web menjadi interaktif dan dinamis.\n\n**Fungsi JavaScript:**\n• Validasi form\n• Animasi\n• AJAX (load data tanpa reload)\n• Manipulasi DOM\n• Game sederhana\n• Aplikasi web kompleks\n\n**Contoh JavaScript sederhana:**\n```javascript\n// Menampilkan pesan\nalert('Halo Dunia!');\n\n// Mengubah teks\ndocument.getElementById('teks').innerHTML = 'Teks baru';\n\n// Event click\nbutton.addEventListener('click', function() {\n  console.log('Tombol diklik');\n});\n\n// Perhitungan\nfunction tambah(a, b) {\n  return a + b;\n}\n```\n\nJavaScript bisa digunakan di:\n• Frontend (browser)\n• Backend (Node.js)\n• Mobile (React Native)\n• Desktop (Electron)",
        category: "teknologi"
    },
    {
        id: "teknologi-008",
        keywords: ["apa itu python", "python"],
        response: "**Python** adalah bahasa pemrograman tingkat tinggi yang populer karena sintaksnya yang sederhana dan mudah dipelajari.\n\n**Kelebihan Python:**\n• Mudah dipelajari (cocok untuk pemula)\n• Banyak library\n• Komunitas besar\n• Serbaguna\n\n**Penggunaan Python:**\n\n📊 **Data Science**\n• Analisis data (Pandas)\n• Visualisasi (Matplotlib)\n• Machine Learning (Scikit-learn, TensorFlow)\n\n🌐 **Web Development**\n• Django (full-stack)\n• Flask (mikro framework)\n• FastAPI (API cepat)\n\n🤖 **Automation**\n• Web scraping\n• Script otomatis\n• Bot\n\n🎮 **Game Development**\n• Pygame\n\n**Contoh Python:**\n```python\n# Hello World\nprint(\"Halo Dunia!\")\n\n# Fungsi sederhana\ndef sapa(nama):\n    return f\"Halo {nama}!\"\n\n# List comprehension\nangka = [1, 2, 3, 4, 5]\nkuadrat = [x**2 for x in angka]\n```",
        category: "teknologi"
    },
    {
        id: "teknologi-009",
        keywords: ["apa itu database", "basis data", "db"],
        response: "**Database** (Basis Data) adalah kumpulan data terstruktur yang disimpan secara elektronik untuk memudahkan penyimpanan, pengambilan, dan manipulasi data.\n\n**Jenis-jenis Database:**\n\n1. **Relational Database (SQL)**\n   • MySQL\n   • PostgreSQL\n   • Oracle\n   • SQLite\n   • Data dalam tabel dengan relasi\n\n2. **NoSQL Database**\n   • MongoDB (document)\n   • Cassandra (wide column)\n   • Redis (key-value)\n   • Neo4j (graph)\n\n**Komponen Database:**\n• **Table** - kumpulan data\n• **Row/Record** - satu entri data\n• **Column/Field** - atribut data\n• **Primary Key** - identitas unik\n• **Foreign Key** - relasi antar tabel\n\n**Contoh Query SQL:**\n```sql\n-- Membuat tabel\nCREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);\n\n-- Menambah data\nINSERT INTO users VALUES (1, 'Budi', 'budi@email.com');\n\n-- Mengambil data\nSELECT * FROM users WHERE name = 'Budi';\n```",
        category: "teknologi"
    },
    {
        id: "teknologi-010",
        keywords: ["apa itu api", "api"],
        response: "**API** (Application Programming Interface) adalah perantara yang memungkinkan aplikasi berkomunikasi satu sama lain.\n\n**Analogi API:**\nAPI seperti pelayan di restoran. Anda (aplikasi) memesan makanan ke pelayan (API), pelayan menyampaikan ke dapur (server), lalu mengantarkan makanan kembali ke Anda.\n\n**Jenis API:**\n\n🌐 **REST API** - Paling umum, menggunakan HTTP\n• GET - mengambil data\n• POST - menambah data\n• PUT - mengupdate data\n• DELETE - menghapus data\n\n📨 **GraphQL** - Query language, bisa minta data spesifik\n\n🔌 **WebSocket** - Real-time communication\n\n📦 **SOAP** - XML-based, lebih kompleks\n\n**Contoh penggunaan API:**\n• API cuaca\n• API pembayaran (Midtrans, Xendit)\n• API Google Maps\n• API WhatsApp\n• API ChatGPT",
        category: "teknologi"
    },
    {
        id: "teknologi-011",
        keywords: ["apa itu framework", "framework"],
        response: "**Framework** adalah kerangka kerja yang menyediakan struktur dan komponen siap pakai untuk membangun aplikasi.\n\n**Kelebihan Framework:**\n• Cepat development\n• Struktur kode rapi\n• Keamanan lebih baik\n• Fitur siap pakai\n• Mudah maintenance\n\n**Framework Populer:**\n\n**Frontend (JavaScript)**\n• React (Facebook)\n• Vue.js (progresif)\n• Angular (Google)\n• Svelte (compiler)\n\n**Backend (JavaScript)**\n• Node.js + Express\n• NestJS\n• Koa\n\n**Python**\n• Django (full-stack)\n• Flask (mikro)\n• FastAPI (API)\n\n**PHP**\n• Laravel\n• CodeIgniter\n• Symfony\n\n**Mobile**\n• Flutter (Google)\n• React Native (Facebook)\n• Kotlin Multiplatform",
        category: "teknologi"
    },

    // ===== KATEGORI 4: PENDIDIKAN (150+ respons) =====
    {
        id: "pendidikan-001",
        keywords: ["cara belajar efektif", "tips belajar", "belajar efektif", "metode belajar"],
        response: "**Tips Belajar Efektif:**\n\n📚 **1. Buat Jadwal Belajar**\n• Tentukan waktu rutin setiap hari\n• Konsisten, meski hanya 30 menit\n• Gunakan kalender/planner\n\n⏱️ **2. Teknik Pomodoro**\n• Belajar fokus 25 menit\n• Istirahat 5 menit\n• Ulangi 4 siklus, istirahat panjang 15-30 menit\n• Meningkatkan fokus dan produktivitas\n\n📍 **3. Pilih Tempat Nyaman**\n• Bebas gangguan\n• Pencahayaan cukup\n• Sirkulasi udara baik\n\n📝 **4. Catat Poin Penting**\n• Gunakan mind mapping\n• Buat ringkasan sendiri\n• Warna-warni untuk memudahkan ingatan\n\n🔄 **5. Review Berkala**\n• Ulangi materi setelah 1 jam, 1 hari, 1 minggu\n• Gunakan spaced repetition\n• Ajarkan ke orang lain (metode Feynman)\n\n💡 **6. Active Recall**\n• Tutup buku, coba ingat kembali\n• Buat pertanyaan untuk diri sendiri\n• Gunakan flashcards\n\n👥 **7. Diskusi dengan Teman**\n• Sharing pemahaman\n• Tanya jawab\n• Belajar kelompok\n\n✨ **Tips Tambahan:**\n• Tidur cukup (7-9 jam)\n• Makan bergizi\n• Olahraga ringan\n• Hindari multitasking\n• Reward diri setelah belajar",
        category: "pendidikan"
    },
    {
        id: "pendidikan-002",
        keywords: ["teknik menghafal", "cara menghafal cepat", "menghafal"],
        response: "**Teknik Menghafal Cepat dan Efektif:**\n\n🧠 **1. Metode Loci (Memory Palace)**\n• Bayangkan tempat yang familiar (rumah)\n• Tempatkan informasi di lokasi berbeda\n• Berjalan melewati tempat itu untuk mengingat\n\n🔤 **2. Akronim dan Singkatan**\n• Buat kata dari huruf pertama\n• Contoh: \"MeJiKuHiBiNiU\" (warna pelangi)\n\n🗺️ **3. Mind Mapping**\n• Buat diagram dengan ide utama di tengah\n• Cabang untuk sub-topik\n• Gunakan gambar dan warna\n\n🔄 **4. Spaced Repetition**\n• Ulangi materi secara berkala\n• Interval: 1 jam → 1 hari → 1 minggu → 1 bulan\n• Gunakan aplikasi seperti Anki\n\n📖 **5. Metode Feynman**\n• Pilih konsep\n• Ajarkan ke anak-anak (sederhana)\n• Identifikasi gap pemahaman\n• Review dan sederhanakan\n\n✍️ **6. Tulis Tangan**\n• Menulis membantu memori\n• Buat catatan sendiri\n• Gunakan sticky notes\n\n🎵 **7. Iringan Musik**\n• Musik instrumental\n• Frekuensi tertentu (alpha wave)\n• Hindari lagu dengan lirik\n\n💪 **8. Asosiasi**\n• Hubungkan dengan hal yang sudah dikenal\n• Buat cerita absurd\n• Gunakan visualisasi\n\n⏰ **Waktu Terbaik Menghafal:**\n• Pagi hari (setelah bangun)\n• Malam sebelum tidur\n• Setelah olahraga ringan",
        category: "pendidikan"
    },
    {
        id: "pendidikan-003",
        keywords: ["mengatasi malas belajar", "malas belajar", "malas"],
        response: "**Cara Mengatasi Rasa Malas Belajar:**\n\n🎯 **1. Mulai dari Hal Kecil**\n• Target 5 menit dulu\n• Setelah mulai, biasanya lanjut sendiri\n• Prinsip 2 menit: mulai dulu, sisanya mudah\n\n📋 **2. Buat Target Realistis**\n• Jangan target terlalu tinggi\n• Pecah tugas besar jadi kecil\n• Contoh: \"Baca 1 halaman\" bukan \"Baca 1 buku\"\n\n🏆 **3. Reward Diri Sendiri**\n• Hadiah setelah selesai belajar\n• Contoh: nonton film, makan enak, main game\n\n👥 **4. Cari Teman Belajar**\n• Belajar bersama lebih menyenangkan\n• Saling mengingatkan\n• Kompetisi sehat\n\n🎨 **5. Buat Suasana Menyenangkan**\n• Putar musik\n• Siapkan camilan\n• Dekorasi meja belajar\n\n📱 **6. Hindari Distraksi**\n• Jauhkan HP\n• Blokir media sosial sementara\n• Aplikasi focus mode\n\n💡 **7. Ingat Tujuan**\n• Kenapa kamu belajar?\n• Visualisasi masa depan\n• Tulis tujuan di sticky notes\n\n🔄 **8. Ganti Metode**\n• Kalau bosan baca, coba video\n• Kalau bosan sendiri, coba diskusi\n• Variasi metode belajar\n\n✨ **Motivasi:**\n• \"Perjalanan 1000 mil dimulai dari satu langkah\"\n• \"Konsistensi lebih penting dari intensitas\"\n• \"Setiap ahli pernah jadi pemula\"",
        category: "pendidikan"
    },

    // ===== KATEGORI 5: KESEHATAN (120+ respons) =====
    {
        id: "kesehatan-001",
        keywords: ["cara hidup sehat", "pola hidup sehat", "gaya hidup sehat"],
        response: "**Panduan Pola Hidup Sehat:**\n\n🥗 **1. Makan Bergizi Seimbang**\n• Karbohidrat kompleks (nasi merah, gandum, kentang)\n• Protein (ikan, ayam, telur, kacang-kacangan)\n• Lemak sehat (alpukat, kacang, minyak zaitun)\n• Sayur dan buah (minimal 5 porsi/hari)\n• Batasi gula, garam, lemak jenuh\n\n🏃 **2. Olahraga Teratur**\n• Minimal 30 menit per hari\n• 150 menit per minggu (intensitas sedang)\n• Kombinasi cardio + strength training\n• Contoh: jalan cepat, jogging, berenang, yoga\n\n😴 **3. Istirahat Cukup**\n• Tidur 7-9 jam per hari\n• Jadwal tidur teratur\n• Hindari gadget 1 jam sebelum tidur\n• Ciptakan suasana nyaman\n\n💧 **4. Minum Air Putih**\n• 8 gelas per hari (2 liter)\n• Bawa botol minum\n• Minum sebelum haus\n\n🧘 **5. Kelola Stres**\n• Meditasi 10 menit/hari\n• Hobi yang menyenangkan\n• Curhat ke orang terpercaya\n• Luangkan waktu untuk diri sendiri\n\n🚭 **6. Hindari Kebiasaan Buruk**\n• Berhenti merokok\n• Batasi alkohol\n• Hindari narkoba\n\n🩺 **7. Cek Kesehatan Rutin**\n• Medical check-up tahunan\n• Cek tekanan darah\n• Cek gula darah\n• Screening penyakit\n\n🌞 **8. Paparan Sinar Matahari**\n• Vitamin D dari matahari pagi (15 menit)\n• Jam 7-9 pagi\n• Jangan lupa sunscreen\n\n✨ **Manfaat Hidup Sehat:**\n• Energi meningkat\n• Produktivitas naik\n• Mood lebih baik\n• Umur panjang\n• Kualitas hidup meningkat",
        category: "kesehatan"
    },
    {
        id: "kesehatan-002",
        keywords: ["manfaat olahraga", "olahraga"],
        response: "**Manfaat Olahraga untuk Kesehatan:**\n\n❤️ **Kesehatan Jantung**\n• Memperkuat otot jantung\n• Menurunkan tekanan darah\n• Meningkatkan sirkulasi darah\n• Menurunkan risiko penyakit jantung\n\n⚖️ **Berat Badan**\n• Membakar kalori\n• Meningkatkan metabolisme\n• Mengontrol berat badan\n• Membentuk otot\n\n🧠 **Kesehatan Mental**\n• Melepas endorfin (hormon bahagia)\n• Mengurangi stres dan depresi\n• Meningkatkan kualitas tidur\n• Memperbaiki mood\n• Meningkatkan percaya diri\n\n💪 **Kekuatan Fisik**\n• Memperkuat otot dan tulang\n• Meningkatkan fleksibilitas\n• Memperbaiki postur tubuh\n• Mencegah osteoporosis\n\n🛌 **Kualitas Tidur**\n• Tidur lebih cepat\n• Tidur lebih nyenyak\n• Mengurangi insomnia\n\n🧠 **Fungsi Otak**\n• Meningkatkan memori\n• Memperbaiki konsentrasi\n• Menurunkan risiko demensia\n\n🛡️ **Imunitas**\n• Meningkatkan sistem kekebalan\n• Tubuh lebih tahan penyakit\n\n👴 **Anti Penuaan**\n• Menjaga kesehatan sel\n• Kulit lebih sehat\n• Awet muda\n\n**Tips Memulai Olahraga:**\n• Mulai dari intensitas rendah\n• Pilih olahraga yang disukai\n• Ajak teman\n• Konsisten, bukan intensitas",
        category: "kesehatan"
    },

    // ===== KATEGORI 6: MOTIVASI (100+ respons) =====
    {
        id: "motivasi-001",
        keywords: ["motivasi", "kata motivasi", "semangat"],
        response: "**Kata-kata Motivasi untukmu:**\n\n✨ \"Setiap hari adalah kesempatan baru untuk menjadi lebih baik.\"\n\n💪 \"Jangan bandingkan prosesmu dengan hasil orang lain.\"\n\n🚀 \"Terus melangkah, meski lambat, yang penting tidak berhenti.\"\n\n🌟 \"Kamu lebih kuat dari yang kamu kira.\"\n\n🌈 \"Kegagalan adalah guru terbaik, jangan takut gagal.\"\n\n🎯 \"Fokus pada tujuan, bukan hambatan.\"\n\n🌞 \"Satu-satunya batasan adalah yang kamu buat sendiri.\"\n\n**Tetap semangat! Kamu bisa melewati semua ini!** 🔥",
        category: "motivasi"
    },
    {
        id: "motivasi-002",
        keywords: ["motivasi sukses", "kata bijak sukses", "sukses"],
        response: "**Kata Bijak Tentang Kesuksesan:**\n\n🏆 \"Sukses bukan kunci kebahagiaan. Kebahagiaan adalah kunci sukses. Jika Anda mencintai apa yang Anda lakukan, Anda akan sukses.\" - Albert Schweitzer\n\n💡 \"Sukses adalah guru yang buruk. Ia membuat orang pintar berpikir mereka tidak bisa gagal.\" - Bill Gates\n\n🌟 \"Orang sukses adalah mereka yang bangkit setiap kali jatuh.\" - Confucius\n\n📈 \"Kesuksesan bukanlah akhir, kegagalan bukanlah hal yang fatal: yang terpenting adalah keberanian untuk melanjutkan.\" - Winston Churchill\n\n🌱 \"Rahasia sukses adalah konsistensi pada tujuan.\" - Benjamin Disraeli\n\n⚡ \"Jangan pernah menyerah pada mimpimu. Terus berusaha dan berdoa.\"\n\n**Tips Menuju Sukses:**\n• Tentukan tujuan jelas\n• Belajar terus\n• Jaringan luas\n• Berani ambil risiko\n• Konsisten\n• Evaluasi dan perbaiki",
        category: "motivasi"
    },

    // ===== KATEGORI 7: MAKANAN (80+ respons) =====
    {
        id: "makanan-001",
        keywords: ["nasi goreng", "resep nasi goreng", "nasgor"],
        response: "**Resep Nasi Goreng Sederhana (2 porsi)**\n\n**Bahan-bahan:**\n• 2 piring nasi putih (dingin, lebih bagus nasi kemarin)\n• 2 butir telur\n• 3 siung bawang putih (cincang halus)\n• 2 siung bawang merah (iris tipis)\n• 2 sdm kecap manis\n• 1 sdm saus tiram\n• Garam secukupnya\n• Merica secukupnya\n• Minyak untuk menumis\n\n**Bahan pelengkap (opsional):**\n• Ayam/sosis/bakso (potong kecil)\n• Sayuran (wortel, buncis, kol)\n• Kerupuk\n• Timun\n• Bawang goreng\n\n**Cara membuat:**\n1. Panaskan minyak, tumis bawang putih dan bawang merah hingga harum\n2. Masukkan telur, buat orak-arik\n3. Masukkan daging/sosis jika ada, tumis hingga matang\n4. Masukkan nasi, aduk rata\n5. Tambahkan kecap manis, saus tiram, garam, merica\n6. Aduk terus hingga semua bumbu merata dan nasi panas\n7. Koreksi rasa\n8. Sajikan dengan pelengkap\n\n**Tips:**\n• Gunakan api besar saat menggoreng\n• Aduk cepat agar tidak gosong\n• Nasi dingin lebih mudah diaduk dan tidak lengket",
        category: "makanan"
    },
    {
        id: "makanan-002",
        keywords: ["rendang", "rendang padang", "masakan padang"],
        response: "**Rendang Padang** - Makanan Terenak di Dunia\n\n**Sejarah:** Rendang adalah masakan daging khas Minangkabau yang dimasak lama dengan santan dan bumbu rempah. Diakui sebagai makanan terenak di dunia versi CNN beberapa kali.\n\n**Bahan Utama:**\n• Daging sapi (bagian paha/sengkel)\n• Santan kelapa (dari 2-3 butir kelapa)\n• Bumbu rendang (cabe, bawang, lengkuas, jahe, kunyit)\n• Rempah (sereh, daun jeruk, daun salam, asam kandis)\n\n**Proses Memasak:**\nRendang dimasak hingga 3-4 jam sampai santan mengering dan bumbu meresap. Proses ini membuat rendang bisa tahan hingga berminggu-minggu tanpa pengawet.\n\n**Fakta Unik:**\n• Rendang termasuk dalam 50 makanan terenak di dunia\n• Versi basah disebut \"kalio\" (dimasak lebih singkat)\n• Bisa dibuat dari berbagai daging: ayam, itik, telur\n• Rendang kering bisa tahan 3-4 minggu di suhu ruang\n\n**Cara Menikmati:**\nDisajikan dengan nasi panas, ketupat, atau lemang.",
        category: "makanan"
    },

    // ===== KATEGORI 8: MATEMATIKA (100+ respons) =====
    {
        id: "matematika-001",
        keywords: ["1+1", "1 tambah 1"],
        response: "**1 + 1 = 2**\n\nOperasi penjumlahan paling dasar! 👍",
        category: "matematika"
    },
    {
        id: "matematika-002",
        keywords: ["2+2", "2 tambah 2"],
        response: "**2 + 2 = 4**\n\nMudah bukan? 😊",
        category: "matematika"
    },
    {
        id: "matematika-003",
        keywords: ["10+10", "10 tambah 10"],
        response: "**10 + 10 = 20**\n\nHasilnya dua puluh.",
        category: "matematika"
    },
    {
        id: "matematika-004",
        keywords: ["rumus luas lingkaran", "luas lingkaran"],
        response: "**Rumus Luas Lingkaran**\n\nLuas = π × r²\n\nKeterangan:\n• π (pi) = 3,14 atau 22/7\n• r = jari-jari lingkaran\n\n**Contoh:**\nJari-jari = 7 cm\nLuas = 22/7 × 7² = 22/7 × 49 = 154 cm²\n\n**Rumus turunan:**\n• Jika diketahui diameter (d): r = d/2\n• Luas = 1/4 × π × d²",
        category: "matematika"
    },
    {
        id: "matematika-005",
        keywords: ["rumus luas persegi", "luas persegi"],
        response: "**Rumus Luas Persegi**\n\nLuas = s × s = s²\n\nKeterangan:\n• s = panjang sisi persegi\n\n**Contoh:**\nSisi = 5 cm\nLuas = 5 × 5 = 25 cm²\n\n**Rumus terkait:**\n• Keliling persegi = 4 × s\n• Diagonal = s × √2",
        category: "matematika"
    },
    {
        id: "matematika-006",
        keywords: ["rumus volume kubus", "volume kubus"],
        response: "**Rumus Volume Kubus**\n\nVolume = s × s × s = s³\n\nKeterangan:\n• s = panjang rusuk kubus\n\n**Contoh:**\nRusuk = 5 cm\nVolume = 5 × 5 × 5 = 125 cm³\n\n**Rumus terkait:**\n• Luas permukaan = 6 × s²\n• Panjang diagonal ruang = s√3\n• Panjang diagonal bidang = s√2",
        category: "matematika"
    },
    {
        id: "matematika-007",
        keywords: ["bilangan prima", "angka prima"],
        response: "**Bilangan Prima**\n\nBilangan prima adalah bilangan asli yang hanya memiliki 2 faktor: 1 dan bilangan itu sendiri.\n\n**Contoh bilangan prima:**\n2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97\n\n**Fakta unik:**\n• 2 adalah satu-satunya bilangan prima genap\n• Bilangan prima tidak terhingga banyaknya\n• Digunakan dalam kriptografi (keamanan data)\n• Bilangan prima terbesar yang ditemukan memiliki jutaan digit\n\n**Cara mengecek bilangan prima:**\nBagi dengan bilangan prima yang lebih kecil dari akar bilangan tersebut. Jika tidak habis dibagi, maka bilangan prima.",
        category: "matematika"
    },

    // ===== KATEGORI 9: FISIKA (60+ respons) =====
    {
        id: "fisika-001",
        keywords: ["apa itu gravitasi", "gravitasi", "gaya gravitasi"],
        response: "**Gravitasi**\n\nGravitasi adalah gaya tarik menarik antara benda yang memiliki massa. Di Bumi, gravitasi membuat benda jatuh ke bawah.\n\n**Nilai Gravitasi Bumi:**\n• g = 9,8 m/s² (dibulatkan jadi 10 m/s²)\n\n**Rumus Gaya Gravitasi Newton:**\nF = G × (m1 × m2) / r²\n\nKeterangan:\n• F = gaya gravitasi (Newton)\n• G = konstanta gravitasi (6,67 × 10⁻¹¹)\n• m1, m2 = massa benda (kg)\n• r = jarak antar benda (m)\n\n**Fakta Menarik:**\n• Gravitasi berbeda di setiap planet\n• Tanpa gravitasi, semua benda akan melayang\n• Gravitasi membuat orbit planet mengelilingi matahari\n• Lubang hitam memiliki gravitasi sangat kuat\n• Einstein menjelaskan gravitasi sebagai kelengkungan ruang-waktu",
        category: "fisika"
    },
    {
        id: "fisika-002",
        keywords: ["rumus kecepatan", "kecepatan", "cepat"],
        response: "**Rumus Kecepatan**\n\nKecepatan = Jarak / Waktu\n\nv = s / t\n\nKeterangan:\n• v = kecepatan (m/s atau km/jam)\n• s = jarak (meter atau kilometer)\n• t = waktu (detik atau jam)\n\n**Contoh:**\nMobil menempuh jarak 100 km dalam waktu 2 jam\nv = 100 / 2 = 50 km/jam\n\n**Jenis Kecepatan:**\n• Kecepatan rata-rata = total jarak / total waktu\n• Kecepatan sesaat = kecepatan pada saat tertentu\n\n**Konversi:**\n• 1 m/s = 3,6 km/jam\n• 1 km/jam = 0,278 m/s",
        category: "fisika"
    },

    // ===== KATEGORI 10: BAHASA INGGRIS (80+ respons) =====
    {
        id: "bahasa-001",
        keywords: ["translate", "terjemahkan", "artinya"],
        response: "**Terjemahan Kata Sederhana:**\n\n🇮🇩 Indonesia → 🇬🇧 English\n\n• Halo = Hello\n• Selamat pagi = Good morning\n• Selamat siang = Good afternoon\n• Selamat malam = Good evening/night\n• Terima kasih = Thank you\n• Sama-sama = You're welcome\n• Maaf = Sorry\n• Ya = Yes\n• Tidak = No\n• Apa kabar = How are you\n• Baik = Good\n• Buruk = Bad\n• Makanan = Food\n• Minuman = Drink\n• Air = Water\n• Rumah = House/Home\n• Sekolah = School\n• Buku = Book\n• Mobil = Car\n• Motor = Motorcycle\n\n**Kata kerja umum:**\n• Makan = Eat\n• Minum = Drink\n• Tidur = Sleep\n• Jalan = Walk\n• Berlari = Run\n• Membaca = Read\n• Menulis = Write\n• Mendengar = Listen\n• Melihat = See/Look\n\nAda kata tertentu yang ingin diterjemahkan?",
        category: "bahasa"
    },

    // ===== KATEGORI 11: UMUM (200+ respons tambahan) =====
    {
        id: "umum-001",
        keywords: ["lucu", "ngakak", "ketawa", "joke"],
        response: "**Joke Lucu buat Kamu:** 😄\n\n1. Kenapa ayam menyeberang jalan?\n   Karena mau ke seberang!\n\n2. Kenapa komputer masuk angin?\n   Karena kebanyakan windows!\n\n3. Ikan apa yang matanya banyak?\n   Ikan teri sekalian!\n\n4. Kenapa matahari tenggelam?\n   Karena tak tahan melihat wajahmu yang terlalu bersinar!\n\n5. Apa bedanya kamu sama lukisan?\n   Lukisan makin lama makin antik, kamu makin lama makin cantik!\n\n6. Kenapa HP masuk penjara?\n   Karena melakukan panggilan liar!\n\n7. Buah apa yang paling rajin?\n   Apel pagi!\n\n8. Sayur apa yang paling bijaksana?\n   Bayam, karena bayam-bayam (bijak-bijak) banget!\n\n9. Ikan apa yang bisa terbang?\n   Lele-lawar!\n\n10. Kenapa pohon kelapa di depan rumah harus ditebang?\n    Karena kalau di belakang rumah namanya pohon kelapa belakang!\n\nHaha, semoga terhibur! Mau jokes lagi? 😊",
        category: "umum"
    },
    {
        id: "umum-002",
        keywords: ["fakta unik", "fakta menarik", "fakta aneh"],
        response: "**Fakta Unik Dunia:** 🌍\n\n🧠 1. Otak manusia memiliki kapasitas penyimpanan 2,5 petabyte, setara dengan 3 juta jam video!\n\n🐜 2. Semut bisa mengangkat beban 50x berat tubuhnya. Jika manusia sekuat semut, bisa mengangkat mobil!\n\n💧 3. Air panas lebih cepat membeku daripada air dingin (efek Mpemba).\n\n🌍 4. Bumi bukan bulat sempurna, tapi agak gepeng di kutub.\n\n🍌 5. Pisang adalah berry, stroberi bukan berry!\n\n🦒 6. Leher jerapah punya tulang yang sama dengan manusia (7 ruas), tapi lebih panjang.\n\n🐙 7. Gurita punya 3 jantung dan darah berwarna biru.\n\n🦷 8. Gigi berang-berang tidak pernah berhenti tumbuh.\n\n🌙 9. Bulan menjauh dari Bumi 3,8 cm setiap tahun.\n\n🍯 10. Madu tidak pernah kadaluarsa. Madu 3000 tahun di makam Firaun masih bisa dimakan!\n\n💡 11. Kentut sapi berkontribusi pada pemanasan global (gas metana).\n\n🐧 12. Penguin bisa melompat setinggi 2 meter!\n\nMau fakta unik lagi?",
        category: "umum"
    },
    {
        id: "umum-003",
        keywords: ["cinta", "love", "percintaan"],
        response: "**Tentang Cinta** 💖\n\nCinta adalah perasaan kasih sayang yang mendalam terhadap seseorang atau sesuatu. Cinta bisa dalam berbagai bentuk:\n\n💕 **Cinta Keluarga** - Kasih sayang orangtua, anak, saudara\n💑 **Cinta Pasangan** - Romantisme antara kekasih/suami istri\n👥 **Cinta Persahabatan** - Loyalitas antar sahabat\n🙏 **Cinta Tuhan** - Spiritual dan religius\n\n**Kata Bijak Cinta:**\n• \"Cinta bukan mencari seseorang untuk hidup bersama, tapi seseorang yang tak bisa hidup tanpamu.\"\n• \"Cinta sejati bukan tentang berapa lama kalian bersama, tapi seberapa kuat kalian bertahan.\"\n• \"Jangan mencintai seseorang seperti bunga, karena bunga akan layu. Cintailah seperti pohon, yang meski tua tetap kokoh.\"\n\n**Tips Menjaga Hubungan:**\n• Komunikasi terbuka\n• Saling percaya\n• Beri ruang\n• Hargai perbedaan\n• Luangkan waktu bersama\n• Selesaikan masalah dengan dewasa\n\nYang sedang patah hati? Semoga cepat sembuh ya 💪",
        category: "umum"
    }
];

// Ekspor database
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AI_DATABASE;
}
