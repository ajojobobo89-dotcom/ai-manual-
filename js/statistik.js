// Statistik Page Functions

let statsData = {};

document.addEventListener('DOMContentLoaded', function() {
    loadStatsData();
    initCharts();
    loadTopQuestions();
    loadActivityHeatmap();
});

function loadStatsData() {
    statsData = {
        totalChats: 1284,
        totalUsers: 342,
        avgResponseTime: 0.3,
        accuracyRate: 98,
        popularCategories: [
            { name: 'Teknologi', count: 324, percentage: 25 },
            { name: 'Pendidikan', count: 287, percentage: 22 },
            { name: 'Kesehatan', count: 198, percentage: 15 },
            { name: 'Motivasi', count: 156, percentage: 12 },
            { name: 'Makanan', count: 134, percentage: 10 },
            { name: 'Lainnya', count: 185, percentage: 16 }
        ],
        dailyActivity: [45, 52, 38, 65, 82, 71, 54],
        weeklyGrowth: 12
    };
    
    updateStatsDisplay();
}

function updateStatsDisplay() {
    document.getElementById('totalChats').textContent = statsData.totalChats.toLocaleString();
    document.getElementById('totalUsers').textContent = statsData.totalUsers;
    document.getElementById('avgResponse').textContent = statsData.avgResponseTime + ' detik';
    document.getElementById('accuracyStats').textContent = statsData.accuracyRate + '%';
}

function initCharts() {
    createDailyChart();
    createCategoryChart();
}

function createDailyChart() {
    const chartContainer = document.getElementById('dailyChart');
    if (!chartContainer) return;
    
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const maxValue = Math.max(...statsData.dailyActivity);
    
    chartContainer.innerHTML = '<div class="bar-chart"></div>';
    const barChart = chartContainer.querySelector('.bar-chart');
    
    days.forEach((day, index) => {
        const height = (statsData.dailyActivity[index] / maxValue) * 200;
        barChart.innerHTML += `
            <div class="bar-wrapper">
                <div class="bar" style="height: ${height}px"></div>
                <div class="bar-label">${day}</div>
            </div>
        `;
    });
}

function createCategoryChart() {
    const chartContainer = document.getElementById('categoryChart');
    if (!chartContainer) return;
    
    // Create pie chart using CSS conic-gradient
    const percentages = statsData.popularCategories.map(c => c.percentage).join('%, ');
    chartContainer.innerHTML = `
        <div class="pie-chart" style="background: conic-gradient(
            var(--primary) 0% 25%,
            var(--success) 25% 47%,
            var(--warning) 47% 62%,
            var(--danger) 62% 74%,
            var(--info) 74% 84%,
            var(--text-secondary) 84% 100%
        )"></div>
        <div class="legend">
            ${statsData.popularCategories.map(cat => `
                <div class="legend-item">
                    <span class="legend-color" style="background: var(--primary)"></span>
                    <span>${cat.name} (${cat.percentage}%)</span>
                </div>
            `).join('')}
        </div>
    `;
}

function loadTopQuestions() {
    const container = document.getElementById('topQuestions');
    if (!container) return;
    
    const questions = [
        { question: 'Apa itu AI?', category: 'Teknologi', count: 234, trend: 23 },
        { question: 'Cara belajar efektif', category: 'Pendidikan', count: 187, trend: 15 },
        { question: 'Motivasi sukses', category: 'Motivasi', count: 156, trend: 8 },
        { question: 'Cara hidup sehat', category: 'Kesehatan', count: 143, trend: -2 },
        { question: 'Resep nasi goreng', category: 'Makanan', count: 132, trend: 5 },
        { question: 'Bahasa Inggris dasar', category: 'Bahasa', count: 98, trend: 12 },
        { question: 'Rumus matematika', category: 'Matematika', count: 87, trend: 0 },
        { question: 'Hewan peliharaan', category: 'Hewan', count: 76, trend: 3 }
    ];
    
    container.innerHTML = questions.map((q, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${q.question}</td>
            <td>${q.category}</td>
            <td>${q.count}x</td>
            <td class="${q.trend > 0 ? 'trend-up' : q.trend < 0 ? 'trend-down' : ''}">
                ${q.trend > 0 ? '↑' : q.trend < 0 ? '↓' : '→'} ${Math.abs(q.trend)}%
            </td>
        </tr>
    `).join('');
}

function loadActivityHeatmap() {
    const container = document.getElementById('activityHeatmap');
    if (!container) return;
    
    const hours = Array.from({length: 24}, (_, i) => i);
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    
    container.innerHTML = '<div class="heatmap"></div>';
    const heatmap = container.querySelector('.heatmap');
    
    // Generate random activity data
    for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour++) {
            const intensity = Math.floor(Math.random() * 5) + 1;
            const opacity = intensity / 5;
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            cell.style.backgroundColor = `rgba(79, 70, 229, ${opacity})`;
            cell.setAttribute('data-value', `${days[day]} ${hour}:00 - ${intensity * 20} chat`);
            heatmap.appendChild(cell);
        }
    }
}

function exportStats() {
    const data = JSON.stringify(statsData, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'statistik-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
}

function changeTimeRange(range) {
    console.log('Changing time range to:', range);
    // Refresh data based on selected range
    loadStatsData();
}
