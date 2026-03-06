// Dashboard Page Specific Functions

document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    initCharts();
    loadActivityFeed();
});

function loadDashboardData() {
    // Load stats
    const stats = searchEngine.getStats();
    
    document.getElementById('totalResponses').textContent = stats.totalResponses;
    document.getElementById('totalCategories').textContent = stats.totalCategories;
    
    // Load recent activity
    loadRecentActivity();
}

function initCharts() {
    const ctx = document.getElementById('activityChart');
    if (!ctx) return;
    
    // Simple chart using canvas
    const chart = ctx.getContext('2d');
    // Implement chart drawing here
}

function loadActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    
    const activities = [
        { icon: '💬', text: 'Percakapan baru tentang AI', time: '2 menit lalu' },
        { icon: '📚', text: 'Kategori Teknologi diakses', time: '15 menit lalu' },
        { icon: '🔍', text: 'Pencarian: "cara belajar"', time: '1 jam lalu' },
        { icon: '⭐', text: 'Respons favorit ditambahkan', time: '3 jam lalu' }
    ];
    
    activities.forEach(activity => {
        const item = document.createElement('div');
        item.className = 'feed-item';
        item.innerHTML = `
            <div class="feed-icon">${activity.icon}</div>
            <div class="feed-content">
                <div class="feed-text">${activity.text}</div>
                <div class="feed-time">${activity.time}</div>
            </div>
        `;
        feed.appendChild(item);
    });
}

function loadRecentActivity() {
    const recent = document.getElementById('recentQuestions');
    if (!recent) return;
    
    const questions = [
        'Apa itu AI?',
        'Cara belajar efektif',
        'Resep nasi goreng',
        'Motivasi sukses'
    ];
    
    questions.forEach(q => {
        const item = document.createElement('div');
        item.className = 'recent-item';
        item.innerHTML = `
            <span>🔍</span>
            <span>${q}</span>
        `;
        item.addEventListener('click', () => {
            document.getElementById('userInput').value = q;
            sendMessage();
        });
        recent.appendChild(item);
    });
}
