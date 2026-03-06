// Kategori Page Functions

let currentView = 'grid';
let filteredCategories = [];

document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    setupCategorySearch();
    loadCategoryStats();
});

function loadCategories() {
    const categories = [
        { id: 'teknologi', name: 'Teknologi', icon: '💻', desc: 'AI, Programming, Internet', count: 156, color: 'blue' },
        { id: 'pendidikan', name: 'Pendidikan', icon: '📚', desc: 'Belajar, Sekolah, Tips', count: 203, color: 'green' },
        { id: 'kesehatan', name: 'Kesehatan', icon: '🏥', desc: 'Hidup Sehat, Olahraga, Nutrisi', count: 145, color: 'orange' },
        { id: 'motivasi', name: 'Motivasi', icon: '🔥', desc: 'Semangat, Sukses, Inspirasi', count: 98, color: 'purple' },
        { id: 'makanan', name: 'Makanan', icon: '🍜', desc: 'Resep, Kuliner, Masakan', count: 112, color: 'red' },
        { id: 'hewan', name: 'Hewan', icon: '🐾', desc: 'Peliharaan, Satwa Liar', count: 87, color: 'yellow' },
        { id: 'wisata', name: 'Wisata', icon: '🏖️', desc: 'Tempat Liburan, Travel', count: 76, color: 'teal' },
        { id: 'matematika', name: 'Matematika', icon: '➕', desc: 'Rumus, Hitungan, Angka', count: 134, color: 'indigo' },
        { id: 'fisika', name: 'Fisika', icon: '⚡', desc: 'Gaya, Energi, Gerak', count: 92, color: 'cyan' },
        { id: 'kimia', name: 'Kimia', icon: '🧪', desc: 'Unsur, Reaksi, Senyawa', count: 88, color: 'pink' },
        { id: 'biologi', name: 'Biologi', icon: '🧬', desc: 'Sel, Tubuh, Ekosistem', count: 95, color: 'lime' },
        { id: 'bahasa', name: 'Bahasa', icon: '🗣️', desc: 'Inggris, Grammar, Terjemahan', count: 121, color: 'amber' },
        { id: 'olahraga', name: 'Olahraga', icon: '⚽', desc: 'Sepak Bola, Basket, Fitness', count: 67, color: 'emerald' },
        { id: 'seni', name: 'Seni', icon: '🎨', desc: 'Musik, Lukis, Tari', count: 54, color: 'violet' },
        { id: 'bisnis', name: 'Bisnis', icon: '💼', desc: 'Wirausaha, Marketing', count: 73, color: 'slate' },
        { id: 'psikologi', name: 'Psikologi', icon: '🧠', desc: 'Mental, Emosi, Perilaku', count: 81, color: 'stone' }
    ];
    
    filteredCategories = categories;
    renderCategories(currentView);
}

function renderCategories(view) {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    if (view === 'grid') {
        container.className = 'category-grid-view';
        container.innerHTML = filteredCategories.map(cat => `
            <div class="category-grid-item" onclick="viewCategory('${cat.id}')">
                <div class="category-grid-icon">${cat.icon}</div>
                <div class="category-grid-name">${cat.name}</div>
                <div class="category-grid-desc">${cat.desc}</div>
                <div class="category-grid-footer">
                    <span class="category-grid-count">${cat.count} respons</span>
                    <span>→</span>
                </div>
            </div>
        `).join('');
    } else {
        container.className = 'category-list-view';
        container.innerHTML = `
            <div class="category-list-header">
                <div>#</div>
                <div>Kategori</div>
                <div>Respons</div>
                <div>Aksi</div>
            </div>
            ${filteredCategories.map((cat, index) => `
                <div class="category-list-item" onclick="viewCategory('${cat.id}')">
                    <div>${index + 1}</div>
                    <div>${cat.icon} ${cat.name}</div>
                    <div>${cat.count}</div>
                    <div>👁️ Lihat</div>
                </div>
            `).join('')}
        `;
    }
}

function toggleView(view) {
    currentView = view;
    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(view));
    });
    renderCategories(view);
}

function setupCategorySearch() {
    const searchInput = document.getElementById('categorySearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        filterCategories(query);
    });
}

function filterCategories(query) {
    // This will be implemented with actual data
    console.log('Searching:', query);
}

function loadCategoryStats() {
    const stats = searchEngine.getStats();
    
    document.getElementById('totalKategori').textContent = stats.totalCategories;
    document.getElementById('totalResponsKategori').textContent = stats.totalResponses;
}

function viewCategory(categoryId) {
    window.location.href = `kategori-detail.html?id=${categoryId}`;
}
