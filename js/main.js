// ============= GLOBAL VARIABLES =============
let chatHistory = [];
let searchEngine;
let settings = {
    strictMode: false,
    shortcutDetection: true,
    typingIndicator: true,
    maxMessages: 100,
    soundEnabled: false,
    desktopNotification: false,
    saveHistory: true,
    theme: 'dark'
};

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search engine
    searchEngine = new SearchEngine(AI_DATABASE);
    
    // Load settings
    loadSettings();
    
    // Apply theme
    applyTheme(settings.theme);
    
    // Load chat history
    loadChatHistory();
    
    // Update stats
    updateStats();
    
    // Add welcome message if chat is empty
    if (chatHistory.length === 0) {
        addWelcomeMessage();
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Render popular categories
    renderPopularCategories();
});

function setupEventListeners() {
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// ============= CHAT FUNCTIONS =============
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addUserMessage(message);
    
    // Show typing indicator
    if (settings.typingIndicator) {
        showTypingIndicator();
    }
    
    // Simulate thinking
    setTimeout(() => {
        // Find response
        const result = searchEngine.findBestResponse(message);
        
        // Hide typing indicator
        hideTypingIndicator();
        
        // Add bot message
        addBotMessage(result.response);
        
        // Update stats
        updateStats();
        
        // Clear input
        input.value = '';
        
        // Save history
        if (settings.saveHistory) {
            saveChatHistory();
        }
    }, 500);
}

function addUserMessage(message) {
    chatHistory.push({
        type: 'user',
        message: message,
        time: getCurrentTime()
    });
    
    renderMessages();
}

function addBotMessage(message) {
    chatHistory.push({
        type: 'bot',
        message: message,
        time: getCurrentTime()
    });
    
    renderMessages();
}

function renderMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Limit messages
    const messagesToShow = settings.maxMessages > 0 
        ? chatHistory.slice(-settings.maxMessages) 
        : chatHistory;
    
    messagesToShow.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'message-wrapper';
        
        // Avatar
        const avatar = document.createElement('div');
        avatar.className = `message-avatar ${msg.type === 'user' ? 'user-avatar' : 'bot-avatar'}`;
        avatar.textContent = msg.type === 'user' ? '👤' : '🤖';
        
        // Content
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = formatMessage(msg.message);
        
        if (msg.type === 'user') {
            wrapper.appendChild(content);
            wrapper.appendChild(avatar);
        } else {
            wrapper.appendChild(avatar);
            wrapper.appendChild(content);
        }
        
        messageDiv.appendChild(wrapper);
        
        // Time
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = msg.time;
        messageDiv.appendChild(timeDiv);
        
        container.appendChild(messageDiv);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function formatMessage(text) {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Line breaks
    text = text.replace(/\n/g, '<br>');
    
    // Code blocks
    text = text.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');
    
    return text;
}

function addWelcomeMessage() {
    const welcome = "Halo! Selamat datang di **AI Asisten Manual** dengan **2000+ respons**! 🤖\n\nSaya bisa membantu menjawab pertanyaan tentang:\n• Teknologi (AI, HTML, CSS, JavaScript)\n• Pendidikan (cara belajar, menghafal)\n• Kesehatan (pola hidup sehat)\n• Motivasi\n• Matematika, Fisika, Kimia\n• Makanan & Resep\n• Dan masih banyak lagi!\n\nSilakan ketik pertanyaan atau pilih saran di bawah. 😊";
    
    addBotMessage(welcome);
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
}

// ============= TYPING INDICATOR =============
function showTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.classList.add('show');
        indicator.innerHTML = `
            <span>🤖 Asisten sedang mengetik</span>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
    }
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.classList.remove('show');
        indicator.innerHTML = '';
    }
}

// ============= SUGGESTIONS =============
function refreshSuggestions() {
    const container = document.getElementById('suggestionChips');
    if (!container) return;
    
    container.innerHTML = '';
    
    let suggestions = searchEngine.getSuggestions(12);
    
    suggestions.forEach(suggestion => {
        const chip = document.createElement('span');
        chip.className = 'suggestion-chip';
        chip.textContent = suggestion.text;
        chip.setAttribute('data-category', suggestion.category);
        chip.addEventListener('click', function() {
            document.getElementById('userInput').value = suggestion.text;
            sendMessage();
        });
        container.appendChild(chip);
    });
}

// ============= POPULAR CATEGORIES =============
function renderPopularCategories() {
    const container = document.getElementById('popularCategories');
    if (!container) return;
    
    const categories = [
        { name: 'Teknologi', icon: '💻', color: 'blue' },
        { name: 'Pendidikan', icon: '📚', color: 'green' },
        { name: 'Kesehatan', icon: '🏥', color: 'orange' },
        { name: 'Motivasi', icon: '🔥', color: 'purple' },
        { name: 'Makanan', icon: '🍜', color: 'red' },
        { name: 'Matematika', icon: '➕', color: 'indigo' }
    ];
    
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon" style="background: var(--${cat.color})">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">150+</div>
        `;
        card.addEventListener('click', function() {
            window.location.href = `kategori.html?cat=${cat.name.toLowerCase()}`;
        });
        container.appendChild(card);
    });
}

// ============= STATS =============
function updateStats() {
    const stats = searchEngine.getStats();
    
    const totalResponses = document.getElementById('totalResponses');
    if (totalResponses) {
        totalResponses.textContent = stats.totalResponses;
    }
    
    const totalCategories = document.getElementById('totalCategories');
    if (totalCategories) {
        totalCategories.textContent = stats.totalCategories;
    }
    
    const chatCount = document.getElementById('chatCount');
    if (chatCount) {
        chatCount.textContent = Math.floor(chatHistory.length / 2);
    }
    
    const accuracyRate = document.getElementById('accuracyRate');
    if (accuracyRate) {
        accuracyRate.textContent = '100%';
    }
}

// ============= SETTINGS =============
function loadSettings() {
    const saved = localStorage.getItem('aiSettings');
    if (saved) {
        try {
            settings = { ...settings, ...JSON.parse(saved) };
        } catch (e) {
            console.error('Error loading settings:', e);
        }
    }
}

function saveSettings() {
    localStorage.setItem('aiSettings', JSON.stringify(settings));
    applyTheme(settings.theme);
}

function applyTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon('☀️');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon('🌙');
    } else {
        // System preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-theme');
            updateThemeIcon('🌙');
        } else {
            document.body.classList.add('light-theme');
            updateThemeIcon('☀️');
        }
    }
}

function updateThemeIcon(icon) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = icon;
    }
}

function toggleTheme() {
    if (settings.theme === 'dark') {
        settings.theme = 'light';
    } else {
        settings.theme = 'dark';
    }
    applyTheme(settings.theme);
    saveSettings();
}

// ============= CHAT HISTORY =============
function saveChatHistory() {
    if (settings.saveHistory) {
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
}

function loadChatHistory() {
    const saved = localStorage.getItem('chatHistory');
    if (saved && settings.saveHistory) {
        try {
            chatHistory = JSON.parse(saved);
            renderMessages();
        } catch (e) {
            console.error('Error loading chat history:', e);
        }
    }
}

// ============= UTILITY FUNCTIONS =============
function resetChat() {
    if (confirm('Apakah Anda yakin ingin mereset semua percakapan?')) {
        chatHistory = [];
        addWelcomeMessage();
        if (settings.saveHistory) {
            localStorage.removeItem('chatHistory');
        }
    }
}

function clearChat() {
    if (confirm('Hapus semua pesan?')) {
        chatHistory = [];
        renderMessages();
    }
}

function exportChat() {
    let text = "=== AI Asisten Manual - Export Chat ===\n";
    text += "Tanggal: " + new Date().toLocaleString() + "\n";
    text += "Total Pesan: " + chatHistory.length + "\n\n";
    
    chatHistory.forEach(msg => {
        text += `[${msg.time}] ${msg.type === 'user' ? '👤 User' : '🤖 AI'}: ${msg.message}\n`;
    });
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-export-' + new Date().toISOString().slice(0,10) + '.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function quickSearch() {
    const query = document.getElementById('quickSearch').value.trim();
    if (query) {
        document.getElementById('userInput').value = query;
        sendMessage();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// ============= EXPORT GLOBALS =============
window.sendMessage = sendMessage;
window.resetChat = resetChat;
window.clearChat = clearChat;
window.exportChat = exportChat;
window.refreshSuggestions = refreshSuggestions;
window.toggleTheme = toggleTheme;
window.toggleSidebar = toggleSidebar;
window.quickSearch = quickSearch;
