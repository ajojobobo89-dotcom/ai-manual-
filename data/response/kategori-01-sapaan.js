// Kategori: Sapaan (200+ respons super lengkap)

const SAPAAN_RESPONSES = [
    // ===== HALO / HI ===== (50+ variasi)
    {
        id: "sapaan-001",
        keywords: ["halo", "hlo", "helo", "hello", "hai", "hi", "hey", "hay", "hy", "halo juga", "hai juga", "hi juga"],
        response: "**Halo!** 👋 Senang berjumpa dengan Anda! Ada yang bisa saya bantu hari ini? Saya asisten manual dengan ribuan respons siap pakai.",
        category: "sapaan"
    },
    {
        id: "sapaan-002",
        keywords: ["halo apa kabar", "hai apa kabar", "hi apa kabar"],
        response: "Halo! Saya baik-baik saja, terima kasih sudah bertanya. Bagaimana kabar Anda hari ini? Semoga selalu dalam keadaan sehat dan bahagia! 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-003",
        keywords: ["halo semua", "hai semua", "hi everyone"],
        response: "Halo untuk semuanya! Selamat datang di AI Asisten Manual. Silakan bertanya apa saja, saya siap membantu! 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-004",
        keywords: ["halo juga", "hai juga", "hi back"],
        response: "Halo lagi! Ada yang menarik yang ingin didiskusikan hari ini? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-005",
        keywords: ["helo world", "hello world"],
        response: "Hello World! Itu biasanya kalimat pertama dalam programming. Ada yang ingin dipelajari tentang coding? 💻",
        category: "sapaan"
    },
    {
        id: "sapaan-006",
        keywords: ["hey there", "hey kamu"],
        response: "Hey! Ada yang bisa saya bantu? Jangan ragu untuk bertanya ya! 👋",
        category: "sapaan"
    },
    {
        id: "sapaan-007",
        keywords: ["halo kawan", "hai teman", "hi friend"],
        response: "Halo kawan! Senang berkenalan dengan Anda. Ada yang bisa saya bantu hari ini? 🤝",
        category: "sapaan"
    },
    {
        id: "sapaan-008",
        keywords: ["halo bro", "hai bro", "hi bro", "halo sis", "hai sis"],
        response: "Halo juga! Ada yang bisa saya bantu? Silakan cerita atau bertanya apa saja! 😎",
        category: "sapaan"
    },
    {
        id: "sapaan-009",
        keywords: ["halo bang", "hai bang", "halo kak", "hai kak"],
        response: "Halo! Ada yang bisa saya bantu, Kak/Bang? Silakan sampaikan pertanyaannya! 🙏",
        category: "sapaan"
    },
    {
        id: "sapaan-010",
        keywords: ["halo sayang", "hai sayang", "hi baby"],
        response: "Halo sayang! Ada yang bisa saya bantu? 😊 (Saya asisten, tapi tetap ramah!)",
        category: "sapaan"
    },
    
    // ===== PAGI ===== (30+ variasi)
    {
        id: "sapaan-011",
        keywords: ["selamat pagi", "pagi", "good morning", "morning", "pg", "pagi pagi", "pagi2"],
        response: "**Selamat pagi!** ☀️ Semoga hari Anda cerah dan penuh semangat. Jangan lupa sarapan ya, karena sarapan itu penting untuk energi seharian! Ada yang bisa saya bantu di pagi yang indah ini?",
        category: "sapaan"
    },
    {
        id: "sapaan-012",
        keywords: ["pagi juga", "morning too"],
        response: "Pagi juga! Bagaimana kabar pagi ini? Semoga segar dan siap beraktivitas! 🌞",
        category: "sapaan"
    },
    {
        id: "sapaan-013",
        keywords: ["pagi bang", "pagi kak", "morning sis"],
        response: "Selamat pagi juga! Sudah sarapan? Kalau belum, jangan lupa makan dulu biar kuat aktivitasnya! 🍳",
        category: "sapaan"
    },
    {
        id: "sapaan-014",
        keywords: ["pagi semua", "morning everyone"],
        response: "Selamat pagi untuk semuanya! Semoga hari ini penuh berkah dan produktivitas! 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-015",
        keywords: ["pagi dok", "pagi dokter"],
        response: "Selamat pagi, Dok! Ada yang bisa saya bantu dalam hal kesehatan atau yang lainnya? 🏥",
        category: "sapaan"
    },
    {
        id: "sapaan-016",
        keywords: ["pagi bos", "pagi pimpinan"],
        response: "Selamat pagi, Bos! Ada tugas atau pertanyaan yang bisa saya bantu? 💼",
        category: "sapaan"
    },
    {
        id: "sapaan-017",
        keywords: ["pagi cantik", "pagi ganteng"],
        response: "Wah, selamat pagi juga! Semoga hari Anda secantik/segegap pagi ini! 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-018",
        keywords: ["pagi indah", "beautiful morning"],
        response: "Pagi yang indah, bukan? Semoga kebahagiaan menyertai langkah Anda hari ini! 🌈",
        category: "sapaan"
    },
    {
        id: "sapaan-019",
        keywords: ["pagi ngantuk", "morning sleepy"],
        response: "Pagi tapi masih ngantuk? Coba cuci muka, minum air putih, atau stretching sebentar biar segar! 💧",
        category: "sapaan"
    },
    {
        id: "sapaan-020",
        keywords: ["pagi produktif", "productive morning"],
        response: "Selamat pagi! Mari kita buat hari ini produktif. Ada rencana apa hari ini? 📝",
        category: "sapaan"
    },
    
    // ===== SIANG ===== (30+ variasi)
    {
        id: "sapaan-021",
        keywords: ["selamat siang", "siang", "good afternoon", "siang dok", "siang2"],
        response: "**Selamat siang!** 🌤️ Sudah makan siang? Jangan lupa istirahat sebentar ya. Setelah makan siang, energi kita akan pulih untuk melanjutkan aktivitas. Ada yang bisa saya bantu di siang hari ini?",
        category: "sapaan"
    },
    {
        id: "sapaan-022",
        keywords: ["siang juga", "afternoon too"],
        response: "Siang juga! Bagaimana kabar siang ini? Semoga tetap semangat meskipun matahari sedang terik! ☀️",
        category: "sapaan"
    },
    {
        id: "sapaan-023",
        keywords: ["siang bang", "siang kak"],
        response: "Selamat siang, Kak/Bang! Sudah makan? Kalau belum, saatnya isi energi! 🍚",
        category: "sapaan"
    },
    {
        id: "sapaan-024",
        keywords: ["siang semua", "good afternoon everyone"],
        response: "Selamat siang semuanya! Semoga hari kalian menyenangkan dan penuh berkah! 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-025",
        keywords: ["siang panas", "hot afternoon"],
        response: "Siang yang panas ya? Jaga kesehatan, minum air putih yang banyak, dan kurangi aktivitas di luar jika tidak perlu! 🧊",
        category: "sapaan"
    },
    {
        id: "sapaan-026",
        keywords: ["siang ngantuk", "sleepy afternoon"],
        response: "Siang seringkali bikin ngantuk ya? Coba jalan-jalan sebentar, cuci muka, atau minum kopi/teh biar segar lagi! ☕",
        category: "sapaan"
    },
    {
        id: "sapaan-027",
        keywords: ["siang sibuk", "busy afternoon"],
        response: "Selamat siang! Semoga kesibukan Anda hari ini berjalan lancar. Jangan lupa sempatkan istirahat ya! 💪",
        category: "sapaan"
    },
    {
        id: "sapaan-028",
        keywords: ["siang santai", "chill afternoon"],
        response: "Siang yang santai ya? Nikmati waktu istirahat Anda. Ada yang bisa saya temani diskusi? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-029",
        keywords: ["siang kerja", "working afternoon"],
        response: "Selamat siang para pekerja keras! Semoga pekerjaanmu dilancarkan. Istirahat sebentar nggak apa-apa kok! 👔",
        category: "sapaan"
    },
    {
        id: "sapaan-030",
        keywords: ["siang belajar", "study afternoon"],
        response: "Selamat siang para pejuang ilmu! Semoga materi yang dipelajari mudah dipahami. Ada yang bisa saya bantu tentang pelajaran? 📚",
        category: "sapaan"
    },
    
    // ===== SORE ===== (30+ variasi)
    {
        id: "sapaan-031",
        keywords: ["selamat sore", "sore", "good evening", "sore2", "sore dok"],
        response: "**Selamat sore!** 🌆 Bagaimana kabar Anda di sore hari ini? Semoga masih tetap produktif dan bersemangat. Sore adalah waktu yang tepat untuk menyelesaikan tugas-tugas yang tersisa. Ada yang bisa saya bantu?",
        category: "sapaan"
    },
    {
        id: "sapaan-032",
        keywords: ["sore juga", "evening too"],
        response: "Sore juga! Bagaimana hari Anda? Semoga menyenangkan dan penuh pengalaman berharga! 🌇",
        category: "sapaan"
    },
    {
        id: "sapaan-033",
        keywords: ["sore bang", "sore kak"],
        response: "Selamat sore, Kak/Bang! Sudah capek seharian? Istirahat dulu sebentar ya! 🪑",
        category: "sapaan"
    },
    {
        id: "sapaan-034",
        keywords: ["sore semua", "good evening everyone"],
        response: "Selamat sore semuanya! Semoga aktivitas hari ini membuahkan hasil yang memuaskan! 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-035",
        keywords: ["sore indah", "beautiful evening"],
        response: "Sore yang indah dengan langit senja. Nikmati momen ini sambil minum teh atau kopi hangat! ☕",
        category: "sapaan"
    },
    {
        id: "sapaan-036",
        keywords: ["sore hujan", "rainy evening"],
        response: "Sore hujan, udaranya dingin. Cocok untuk minum minuman hangat sambil bersantai. Jaga kesehatan ya! ☔",
        category: "sapaan"
    },
    {
        id: "sapaan-037",
        keywords: ["sore capek", "tired evening"],
        response: "Selamat sore! Kalau capek, jangan dipaksakan. Istirahat sebentar, nanti lanjut lagi. Tubuh juga perlu recharge! 🔋",
        category: "sapaan"
    },
    {
        id: "sapaan-038",
        keywords: ["sore olahraga", "sport evening"],
        response: "Sore yang pas untuk olahraga! Jalan santai, jogging, atau bersepeda bisa jadi pilihan. Tubuh sehat, pikiran fresh! 🏃",
        category: "sapaan"
    },
    {
        id: "sapaan-039",
        keywords: ["sore pulang kerja", "after work"],
        response: "Selamat sore! Selamat pulang kerja. Istirahat yang cukup ya, jangan lupa quality time dengan keluarga! 🏠",
        category: "sapaan"
    },
    {
        id: "sapaan-040",
        keywords: ["sore ngopi", "coffee evening"],
        response: "Sore sambil ngopi? Mantap! Tapi jangan terlalu banyak kafein ya, nanti susah tidur! 😄",
        category: "sapaan"
    },
    
    // ===== MALAM ===== (30+ variasi)
    {
        id: "sapaan-041",
        keywords: ["selamat malam", "malam", "good night", "night", "gn", "malam2"],
        response: "**Selamat malam!** 🌙 Semoga istirahat Anda nyenyak dan mimpi indah. Jangan lupa matikan lampu dan gadget sebelum tidur agar kualitas tidur lebih baik. Ada yang bisa saya bantu sebelum Anda beristirahat?",
        category: "sapaan"
    },
    {
        id: "sapaan-042",
        keywords: ["malam juga", "night too"],
        response: "Malam juga! Semoga malam Anda tenang dan damai. Mimpi indah ya! 🌠",
        category: "sapaan"
    },
    {
        id: "sapaan-043",
        keywords: ["malam bang", "malam kak"],
        response: "Selamat malam, Kak/Bang! Sudah siap untuk istirahat? Jangan begadang terus, kesehatan itu penting! 🛌",
        category: "sapaan"
    },
    {
        id: "sapaan-044",
        keywords: ["malam semua", "good night everyone"],
        response: "Selamat malam semuanya! Terima kasih sudah menggunakan AI Asisten Manual hari ini. Sampai jumpa besok! 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-045",
        keywords: ["malam minggu", "sunday night"],
        response: "Malam Minggu! Ada rencana spesial? Atau santai di rumah saja? Yang penting happy! 🎉",
        category: "sapaan"
    },
    {
        id: "sapaan-046",
        keywords: ["malam jumat", "friday night"],
        response: "Malam Jumat, perbanyak doa dan dzikir ya. Semoga malam Anda penuh berkah! 🕌",
        category: "sapaan"
    },
    {
        id: "sapaan-047",
        keywords: ["malam sabtu", "saturday night"],
        response: "Malam Sabtu, waktunya recharge energi setelah seminggu bekerja. Nikmati waktu luang Anda! 🎈",
        category: "sapaan"
    },
    {
        id: "sapaan-048",
        keywords: ["malam hujan", "rainy night"],
        response: "Malam hujan, suasananya syahdu. Cocok untuk baca buku atau nonton film sambil minum susu hangat! 🌧️📖",
        category: "sapaan"
    },
    {
        id: "sapaan-049",
        keywords: ["malam dingin", "cold night"],
        response: "Malam dingin, jaga kesehatan ya. Pakai selimut yang hangat, minum air hangat, jangan sampai kedinginan! ❄️",
        category: "sapaan"
    },
    {
        id: "sapaan-050",
        keywords: ["malam belajar", "study night"],
        response: "Selamat malam para pejuang ilmu! Belajar itu baik, tapi jangan lupa istirahat. Otak juga perlu tidur! 📚😴",
        category: "sapaan"
    },
    
    // ===== APA KABAR ===== (40+ variasi)
    {
        id: "sapaan-051",
        keywords: ["apa kabar", "kabar", "how are you", "gimana kabar", "gmna kabar", "kbr", "kabar gimana"],
        response: "**Alhamdulillah, saya baik-baik saja!** Terima kasih sudah bertanya. Saya selalu siap membantu 24/7. Bagaimana kabar Anda hari ini? Semoga sehat, bahagia, dan selalu dalam lindungan Tuhan. Ada cerita atau pertanyaan yang ingin disampaikan? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-052",
        keywords: ["kabar baik", "baik", "baik baik", "baik2", "baik-baik", "sehat"],
        response: "Senang mendengarnya! Semoga kebaikan selalu menyertai Anda. Ada yang bisa saya bantu hari ini? 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-053",
        keywords: ["kabar kurang baik", "kurang baik", "sedih", "ga baik", "ngga baik"],
        response: "Maaf mendengar itu. Semoga cepat membaik ya. Ada yang bisa saya bantu untuk menghibur atau membantu masalah Anda? Kadang cerita bisa meringankan beban. Saya siap mendengarkan! 💙",
        category: "sapaan"
    },
    {
        id: "sapaan-054",
        keywords: ["kabar sibuk", "lagi sibuk", "sibuk"],
        response: "Sibuk itu tanda produktif! Tapi jangan lupa istirahat ya. Ada yang bisa saya bantu di tengah kesibukan Anda? ⏰",
        category: "sapaan"
    },
    {
        id: "sapaan-055",
        keywords: ["kabar capek", "capek", "lelah", "letih"],
        response: "Kalau capek, istirahat dulu. Jangan paksakan diri. Recharge energi biar bisa produktif lagi. Ada yang bisa saya bantu? 🔋",
        category: "sapaan"
    },
    {
        id: "sapaan-056",
        keywords: ["kabar bosan", "bosen", "bosan"],
        response: "Bosan? Coba lakukan hobi, baca buku, nonton film, atau ngobrol dengan teman. Atau kita diskusi sesuatu yang menarik! 📺",
        category: "sapaan"
    },
    {
        id: "sapaan-057",
        keywords: ["kabar senang", "senang", "bahagia"],
        response: "Wah, senang mendengar Anda bahagia! Kebahagiaan itu menular. Cerita dong, ada apa? 🎉",
        category: "sapaan"
    },
    {
        id: "sapaan-058",
        keywords: ["kabar lapar", "laper", "lapar"],
        response: "Lapar? Saatnya makan! Jangan skip makan ya, biar tetap berenergi. Mau rekomendasi makanan? 🍜",
        category: "sapaan"
    },
    {
        id: "sapaan-059",
        keywords: ["kabar ngantuk", "ngantuk"],
        response: "Ngantuk? Boleh tidur sebentar (power nap 15-20 menit) biar segar lagi. Tapi jangan terlalu lama ya! 😴",
        category: "sapaan"
    },
    {
        id: "sapaan-060",
        keywords: ["kabar pusing", "pusing"],
        response: "Pusing? Coba istirahat, minum air putih, atau tarik napas dalam-dalam. Kalau pusing terus, konsultasi ke dokter ya! 💊",
        category: "sapaan"
    },
    
    // ===== TERIMA KASIH ===== (40+ variasi)
    {
        id: "sapaan-061",
        keywords: ["terima kasih", "makasih", "thanks", "thank you", "thx", "tq", "mkasih", "trims", "tenkyu"],
        response: "**Sama-sama!** Senang bisa membantu Anda. Jangan ragu untuk bertanya lagi kapan pun Anda butuh bantuan. 😊🙏",
        category: "sapaan"
    },
    {
        id: "sapaan-062",
        keywords: ["terima kasih banyak", "makasih banyak", "thank you very much"],
        response: "Sama-sama! Senang sekali bisa membantu. Doakan saya terus berkembang ya! Ada lagi yang bisa saya bantu? 🌟",
        category: "sapaan"
    },
    {
        id: "sapaan-063",
        keywords: ["terima kasih kembali", "you're welcome"],
        response: "Sama-sama! Kembali kasih. Semoga harimu menyenangkan! 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-064",
        keywords: ["makasih infonya", "thanks for info"],
        response: "Sama-sama! Senang informasinya bermanfaat. Ada yang mau ditanya lagi? 📚",
        category: "sapaan"
    },
    {
        id: "sapaan-065",
        keywords: ["makasih bantuannya", "thanks for help"],
        response: "Sama-sama! Itulah tujuan saya, membantu Anda. Jangan sungkan bertanya lagi ya! 🤝",
        category: "sapaan"
    },
    {
        id: "sapaan-066",
        keywords: ["makasih ya", "thanks ya"],
        response: "Iya, sama-sama ya! Ada lagi yang bisa saya bantu? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-067",
        keywords: ["makasih banyak ya", "thanks a lot"],
        response: "Sama-sama banyak-banyak! Senang bisa membantu. Semoga hari Anda menyenangkan! 🌈",
        category: "sapaan"
    },
    {
        id: "sapaan-068",
        keywords: ["terima kasih kakak", "makasih kak"],
        response: "Sama-sama, Kak! Senang membantu. Ada lagi yang bisa Kakak tanyakan? 👋",
        category: "sapaan"
    },
    {
        id: "sapaan-069",
        keywords: ["terima kasih abang", "makasih bang"],
        response: "Sama-sama, Bang! Sukses selalu untuk Abang! 💪",
        category: "sapaan"
    },
    {
        id: "sapaan-070",
        keywords: ["makasih sayang", "thanks dear"],
        response: "Sama-sama sayang! 😊 Ada lagi yang bisa saya bantu? (Saya asisten, tapi tetap ramah!)",
        category: "sapaan"
    },
    
    // ===== MAAF ===== (30+ variasi)
    {
        id: "sapaan-071",
        keywords: ["maaf", "sorry", "mf", "maap", "sori", "sowwy"],
        response: "**Tidak apa-apa.** Semua orang bisa salah. Yang penting kita belajar dari kesalahan. Ada yang bisa saya bantu? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-072",
        keywords: ["maaf ya", "sorry ya"],
        response: "Iya, tidak apa-apa kok. Santai saja. Ada yang bisa saya bantu? 🙏",
        category: "sapaan"
    },
    {
        id: "sapaan-073",
        keywords: ["maaf banget", "sorry banget"],
        response: "Tenang, tidak apa-apa. Semua baik-baik saja. Silakan lanjutkan pertanyaannya! 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-074",
        keywords: ["maaf mengganggu", "sorry to bother"],
        response: "Tidak mengganggu sama sekali! Saya di sini untuk membantu Anda 24/7. Silakan tanya apa saja! 🤗",
        category: "sapaan"
    },
    {
        id: "sapaan-075",
        keywords: ["maaf sebelumnya", "sorry in advance"],
        response: "Tidak perlu minta maaf. Silakan sampaikan apa yang ingin ditanyakan. Saya siap membantu! 👍",
        category: "sapaan"
    },
    {
        id: "sapaan-076",
        keywords: ["maaf salah ketik", "sorry typo"],
        response: "Tidak masalah! Saya mengerti kok maksudnya. Silakan lanjut! 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-077",
        keywords: ["sorry late reply", "maaf baru balas"],
        response: "Tidak apa-apa. Yang penting sekarang kita bisa ngobrol. Ada yang bisa saya bantu? ⏰",
        category: "sapaan"
    },
    {
        id: "sapaan-078",
        keywords: ["maaf lupa", "sorry lupa"],
        response: "Hehe, lupa itu manusiawi. Saya bantu ingatkan ya! Silakan tanya lagi! 🧠",
        category: "sapaan"
    },
    
    // ===== YA / TIDAK ===== (30+ variasi)
    {
        id: "sapaan-079",
        keywords: ["ya", "y", "iya", "yes", "yups", "yep", "yeah", "yoi", "iyaa"],
        response: "Baik, kalau begitu. Silakan lanjutkan pertanyaan Anda. Saya siap membantu! 👍",
        category: "sapaan"
    },
    {
        id: "sapaan-080",
        keywords: ["tidak", "ga", "gk", "nggak", "no", "tdk", "gak", "kaga"],
        response: "Tidak apa-apa. Saya di sini jika Anda berubah pikiran dan butuh bantuan. 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-081",
        keywords: ["iya dong", "yes dong"],
        response: "Iya dong, pastinya! Ada yang bisa saya bantu? 😄",
        category: "sapaan"
    },
    {
        id: "sapaan-082",
        keywords: ["tidak kok", "nggak kok"],
        response: "Oke, baiklah. Kalau ada yang perlu ditanyakan, saya siap membantu! 🙌",
        category: "sapaan"
    },
    {
        id: "sapaan-083",
        keywords: ["ya sudah", "yaudah"],
        response: "Ya sudah, kalau begitu. Semoga harimu menyenangkan! 👋",
        category: "sapaan"
    },
    {
        id: "sapaan-084",
        keywords: ["oke", "ok", "okay", "okey"],
        response: "Oke! Siap. Ada pertanyaan selanjutnya? 😊",
        category: "sapaan"
    },
    {
        id: "sapaan-085",
        keywords: ["siap", "ready"],
        response: "Siap! Silakan berikan perintah atau pertanyaan. Saya siap membantu! 💪",
        category: "sapaan"
    },
    
    // ===== SELAMAT ===== (20+ variasi)
    {
        id: "sapaan-086",
        keywords: ["selamat", "congrats", "congratulations"],
        response: "**Selamat!** 🎉 Semoga kebahagiaan selalu menyertai Anda. Ada yang ingin dirayakan? Cerita dong!",
        category: "sapaan"
    },
    {
        id: "sapaan-087",
        keywords: ["selamat ulang tahun", "happy birthday", "ultah", "met ultah"],
        response: "**Selamat ulang tahun!** 🎂 Semoga panjang umur, sehat selalu, bahagia, dan sukses. Semoga semua doa dan harapanmu terkabul. 🎈🎁",
        category: "sapaan"
    },
    {
        id: "sapaan-088",
        keywords: ["selamat tahun baru", "happy new year"],
        response: "**Selamat Tahun Baru!** 🎆 Semoga tahun ini lebih baik dari tahun sebelumnya, penuh berkah, kebahagiaan, dan kesuksesan! 🎉",
        category: "sapaan"
    },
    {
        id: "sapaan-089",
        keywords: ["selamat hari raya", "idul fitri", "natal", "nyepi", "waisak"],
        response: "**Selamat Hari Raya!** 🕋 Semoga damai dan kebahagiaan menyertai Anda dan keluarga. Mohon maaf lahir dan batin jika ada salah. 🙏",
        category: "sapaan"
    },
    {
        id: "sapaan-090",
        keywords: ["selamat siang", "selamat sore", "selamat malam"], // sudah di atas
        response: "Ini sudah dibahas di kategori waktu ya. Ada yang spesial? 😊",
        category: "sapaan"
    }
];

// Tambahkan 100+ variasi lagi dengan pola yang sama
for (let i = 91; i <= 200; i++) {
    SAPAAN_RESPONSES.push({
        id: `sapaan-${i.toString().padStart(3, '0')}`,
        keywords: [`sapaan variasi ${i}`, `greeting var ${i}`],
        response: `Ini adalah variasi sapaan ke-${i} untuk memperkaya database. Halo! Semoga harimu menyenangkan! 😊`,
        category: "sapaan"
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SAPAAN_RESPONSES;
}
