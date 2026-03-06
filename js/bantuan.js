// Bantuan Page Functions

document.addEventListener('DOMContentLoaded', function() {
    loadFAQs();
    loadGuides();
    setupSearch();
});

function loadFAQs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    
    const faqs = [
        {
            question: 'Bagaimana cara memulai chat?',
            answer: 'Cukup ketik pertanyaan di kolom chat lalu tekan Enter atau klik tombol Kirim. AI akan merespon dengan jawaban dari database manual kami.'
        },
        {
            question: 'Apakah AI ini membutuhkan API key?',
            answer: 'TIDAK! AI ini 100% gratis dan tidak membutuhkan API key sama sekali. Semua respons ditulis manual dan berjalan offline di browser Anda.'
        },
        {
            question: 'Bisakah menggunakan singkatan?',
            answer: 'Bisa! AI akan mendeteksi singkatan umum seperti "hlo" (halo), "mksh" (terima kasih), "mf" (maaf), dan lainnya.'
        },
        {
            question: 'Berapa banyak respons yang tersedia?',
            answer: 'Saat ini tersedia lebih dari 2000 respons dalam 48 kategori berbeda, dari teknologi hingga motivasi, dan akan terus bertambah!'
        },
        {
            question: 'Apakah bisa digunakan offline?',
            answer: 'Ya! Setelah halaman dimuat pertama kali, Anda bisa menggunakan AI ini sepenuhnya offline tanpa koneksi internet.'
        },
        {
            question: 'Bagaimana cara menambah respons baru?',
            answer: 'Anda bisa menambah respons dengan mengedit file database.js di folder js. Tambahkan objek baru dengan format yang sama.'
        },
        {
            question: 'Apakah data chat saya aman?',
            answer: 'Sangat aman! Semua data chat disimpan hanya di browser Anda (localStorage) dan tidak dikirim ke server manapun.'
        },
        {
            question: 'Bisa ganti tema?',
            answer: 'Bisa! Klik ikon bulan/matahari di pojok kanan atas untuk toggle antara tema gelap dan terang.'
        }
    ];
    
    container.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" onclick="toggleFaq(${index})">
            <div class="faq-question">
                <span>${faq.question}</span>
                <span class="faq-toggle">▼</span>
            </div>
            <div class="faq-answer" id="faq-${index}">
                ${faq.answer}
            </div>
        </div>
    `).join('');
}

function toggleFaq(index) {
    const item = document.querySelectorAll('.faq-item')[index];
    item.classList.toggle('open');
}

function loadGuides() {
    const container = document.getElementById('guideContainer');
    if (!container) return;
    
    const guides = [
        {
            title: 'Memulai Chat',
            steps: [
                'Buka halaman Dashboard',
                'Ketik pertanyaan di kolom chat',
                'Tekan Enter atau klik Kirim',
                'Tunggu respons dari AI'
            ]
        },
        {
            title: 'Menggunakan Kategori',
            steps: [
                'Klik menu Kategori di sidebar',
                'Pilih kategori yang diinginkan',
                'Lihat semua respons dalam kategori',
                'Klik pertanyaan untuk langsung chat'
            ]
        },
        {
            title: 'Melihat Statistik',
            steps: [
                'Buka halaman Statistik',
                'Lihat grafik aktivitas harian',
                'Cek top pertanyaan populer',
                'Analisis performa AI'
            ]
        },
        {
            title: 'Mengatur Pengaturan',
            steps: [
                'Buka halaman Pengaturan',
                'Ubah tema sesuai keinginan',
                'Atur preferensi chat',
                'Simpan perubahan'
            ]
        }
    ];
    
    container.innerHTML = guides.map(guide => `
        <div class="guide-step">
            <div class="guide-step-number">📘</div>
            <div class="guide-step-content">
                <h4>${guide.title}</h4>
                <ul>
                    ${guide.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function setupSearch() {
    const searchInput = document.getElementById('helpSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchHelp(query);
    });
}

function searchHelp(query) {
    if (!query) {
        document.querySelectorAll('.faq-item').forEach(item => item.style.display = 'block');
        return;
    }
    
    document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function showGuide(guideId) {
    const guide = document.getElementById(guideId);
    if (guide) {
        guide.scrollIntoView({ behavior: 'smooth' });
    }
}

function openContact(contactType) {
    if (contactType === 'email') {
        window.location.href = 'mailto:bantuan@aiasisten.com';
    } else if (contactType === 'whatsapp') {
        window.open('https://wa.me/6281234567890', '_blank');
    } else if (contactType === 'telegram') {
        window.open('https://t.me/aiasisten', '_blank');
    }
}

function submitFeedback() {
    const feedback = document.getElementById('feedbackText')?.value;
    if (!feedback) {
        alert('Silakan isi feedback terlebih dahulu');
        return;
    }
    
    // Save to localStorage
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks.push({
        text: feedback,
        date: new Date().toISOString()
    });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    
    alert('Terima kasih atas feedback Anda!');
    document.getElementById('feedbackText').value = '';
}

function printGuide() {
    window.print();
}

function downloadGuide() {
    const guides = document.getElementById('guideContainer').innerHTML;
    const style = document.querySelector('style').innerHTML;
    
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Panduan AI Asisten</title>
            <style>${style}</style>
        </head>
        <body>
            <div class="print-version">
                <h1>Panduan Penggunaan AI Asisten</h1>
                ${guides}
            </div>
        </body>
        </html>
    `;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'panduan-ai-asisten.html';
    a.click();
    URL.revokeObjectURL(url);
}
