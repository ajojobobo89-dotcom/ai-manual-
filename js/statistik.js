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
            ${statsData.popular
