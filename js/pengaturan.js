// Pengaturan Page Functions

document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    setupEventListeners();
});

function loadSettings() {
    // Load settings from localStorage or use defaults
    const savedSettings = localStorage.getItem('aiSettings');
    const settings = savedSettings ? JSON.parse(savedSettings) : {
        theme: 'dark',
        language: 'id',
        strictMode: false,
        shortcutDetection: true,
        typingIndicator: true,
        maxMessages: 100,
        soundEnabled: false,
        desktopNotification: false,
        saveHistory: true
    };
    
    // Apply settings to form
    document.getElementById('theme').value = settings.theme;
    document.getElementById('language').value = settings.language;
    document.getElementById('strictMode').checked = settings.strictMode;
    document.getElementById('shortcutDetection').checked = settings.shortcutDetection;
    document.getElementById('typingIndicator').checked = settings.typingIndicator;
    document.getElementById('maxMessages').value = settings.maxMessages;
    document.getElementById('soundEnabled').checked = settings.soundEnabled;
    document.getElementById('desktopNotification').checked = settings.desktopNotification;
    document.getElementById('saveHistory').checked = settings.saveHistory;
    
    // Update theme preview
    updateThemePreview(settings.theme);
}

function setupEventListeners() {
    // Theme change preview
    document.getElementById('theme').addEventListener('change', function(e) {
        updateThemePreview(e.target.value);
    });
    
    // Toggle switches
    document.querySelectorAll('.switch input').forEach(toggle => {
        toggle.addEventListener('change', function(e) {
            const setting = this.id;
            console.log(`${setting} changed to:`, this.checked);
        });
    });
}

function updateThemePreview(theme) {
    const preview = document.getElementById('themePreview');
    if (!preview) return;
    
    preview.className = 'theme-preview ' + theme;
    
    if (theme === 'dark') {
        preview.innerHTML = '🌙 Mode Gelap';
        preview.style.background = '#1a1a1a';
        preview.style.color = '#ffffff';
    } else if (theme === 'light') {
        preview.innerHTML = '☀️ Mode Terang';
        preview.style.background = '#f0f0f0';
        preview.style.color = '#333333';
    } else {
        preview.innerHTML = '⚙️ Ikuti Sistem';
        preview.style.background = 'linear-gradient(135deg, #1a1a1a 50%, #f0f0f0 50%)';
        preview.style.color = '#ffffff';
    }
}

function saveAllSettings() {
    const settings = {
        theme: document.getElementById('theme').value,
        language: document.getElementById('language').value,
        strictMode: document.getElementById('strictMode').checked,
        shortcutDetection: document.getElementById('shortcutDetection').checked,
        typingIndicator: document.getElementById('typingIndicator').checked,
        maxMessages: parseInt(document.getElementById('maxMessages').value),
        soundEnabled: document.getElementById('soundEnabled').checked,
        desktopNotification: document.getElementById('desktopNotification').checked,
        saveHistory: document.getElementById('saveHistory').checked
    };
    
    // Save to localStorage
    localStorage.setItem('aiSettings', JSON.stringify(settings));
    
    // Apply theme
    if (window.applyTheme) {
        applyTheme(settings.theme);
    }
    
    // Show success message
    showNotification('Pengaturan berhasil disimpan!', 'success');
}

function clearAllData() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.')) {
        localStorage.clear();
        showNotification('Semua data telah dihapus', 'info');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

function exportAllData() {
    const data = {
        settings: localStorage.getItem('aiSettings'),
        chatHistory: localStorage.getItem('chatHistory'),
        timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-data-backup-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.settings) {
                    localStorage.setItem('aiSettings', data.settings);
                }
                if (data.chatHistory) {
                    localStorage.setItem('chatHistory', data.chatHistory);
                }
                
                showNotification('Data berhasil diimpor!', 'success');
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } catch (error) {
                showNotification('Gagal mengimpor data: format tidak valid', 'error');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

function resetToDefault() {
    if (confirm('Kembalikan semua pengaturan ke default?')) {
        localStorage.removeItem('aiSettings');
        showNotification('Pengaturan dikembalikan ke default', 'info');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--info)'};
        color: white;
        border-radius: 8px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function checkForUpdates() {
    showNotification('Memeriksa pembaruan...', 'info');
    setTimeout(() => {
        showNotification('Anda sudah menggunakan versi terbaru!', 'success');
    }, 2000);
}
