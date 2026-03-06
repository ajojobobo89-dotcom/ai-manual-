class SearchEngine {
    constructor(database) {
        this.database = database;
        this.cache = new Map();
        this.initShortcuts();
    }

    initShortcuts() {
        this.shortcuts = {
            // Singkatan umum
            "hlo": "halo",
            "helo": "halo",
            "hai": "halo",
            "hi": "halo",
            "mksh": "terima kasih",
            "thx": "terima kasih",
            "tq": "terima kasih",
            "mkasih": "terima kasih",
            "trims": "terima kasih",
            "mf": "maaf",
            "maap": "maaf",
            "sori": "maaf",
            "iya": "ya",
            "y": "ya",
            "ga": "tidak",
            "gk": "tidak",
            "nggak": "tidak",
            "tdk": "tidak",
            "gpp": "tidak apa apa",
            "ok": "oke",
            "oke": "oke",
            "udh": "sudah",
            "blm": "belum",
            "jg": "juga",
            "aja": "saja",
            "dgn": "dengan",
            "utk": "untuk",
            "krn": "karena",
            "kpd": "kepada",
            "pd": "pada",
            "dr": "dari",
            "ttg": "tentang",
            "bgmn": "bagaimana",
            "gmna": "gimana",
            "kpn": "kapan",
            "dmn": "dimana",
            "knp": "kenapa",
            "ngapain": "apa",
            "pls": "tolong",
            "tolong": "tolong",
            "bantu": "bantu",
            "help": "tolong"
        };
    }

    normalizeInput(input) {
        return input.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    expandShortcuts(input) {
        let words = input.split(' ');
        let expanded = words.map(word => {
            return this.shortcuts[word] || word;
        });
        return expanded.join(' ');
    }

    calculateRelevance(input, keywords) {
        let score = 0;
        let inputWords = input.split(' ');
        let keywordWords = keywords.join(' ').split(' ');

        for (let iWord of inputWords) {
            for (let kWord of keywordWords) {
                if (iWord === kWord) {
                    score += 1;
                } else if (kWord.includes(iWord) && iWord.length > 2) {
                    score += 0.5;
                } else if (iWord.includes(kWord) && kWord.length > 2) {
                    score += 0.5;
                }
            }
        }

        return score;
    }

    findBestResponse(input) {
        // Cek cache
        if (this.cache.has(input)) {
            return this.cache.get(input);
        }

        let normalized = this.normalizeInput(input);
        let expanded = this.expandShortcuts(normalized);
        
        let bestMatch = null;
        let highestScore = 0;
        
        // Cari di database
        for (let item of this.database) {
            for (let keyword of item.keywords) {
                let keywordNorm = this.normalizeInput(keyword);
                
                // Exact match
                if (normalized === keywordNorm || expanded === keywordNorm) {
                    bestMatch = item;
                    highestScore = 100;
                    break;
                }
                
                // Partial match
                if (normalized.includes(keywordNorm) || keywordNorm.includes(normalized)) {
                    let score = 80;
                    if (score > highestScore) {
                        highestScore = score;
                        bestMatch = item;
                    }
                }
                
                // Relevance score
                let relevance = this.calculateRelevance(normalized, item.keywords);
                if (relevance > 5 && relevance > highestScore) {
                    highestScore = relevance;
                    bestMatch = item;
                }
            }
            if (highestScore === 100) break;
        }
        
        // Jika tidak ada yang cocok, return default
        if (!bestMatch) {
            bestMatch = {
                id: "default",
                keywords: ["default"],
                response: "Maaf, saya belum memiliki jawaban untuk pertanyaan tersebut. Database saya memiliki 2000+ respons, tapi belum mencakup pertanyaan ini. Coba tanyakan hal lain atau gunakan saran pertanyaan yang tersedia. 😊",
                category: "umum"
            };
        }
        
        // Simpan ke cache
        this.cache.set(input, bestMatch);
        
        return bestMatch;
    }

    getAllCategories() {
        let categories = new Set();
        for (let item of this.database) {
            if (item.category) {
                categories.add(item.category);
            }
        }
        return Array.from(categories).sort();
    }

    getResponsesByCategory(category) {
        return this.database.filter(item => item.category === category);
    }

    getCategoryCount() {
        let counts = {};
        for (let item of this.database) {
            if (item.category) {
                counts[item.category] = (counts[item.category] || 0) + 1;
            }
        }
        return counts;
    }

    getSuggestions(limit = 10, category = null) {
        let suggestions = [];
        let usedIds = new Set();

        if (category) {
            let items = this.getResponsesByCategory(category);
            for (let item of items.slice(0, limit)) {
                if (item.keywords && item.keywords[0]) {
                    suggestions.push({
                        text: item.keywords[0],
                        category: item.category
                    });
                }
            }
        } else {
            // Ambil dari berbagai kategori
            let categories = this.getAllCategories();
            let perCategory = Math.ceil(limit / categories.length);

            for (let cat of categories) {
                if (suggestions.length >= limit) break;
                
                let items = this.getResponsesByCategory(cat);
                let shuffled = this.shuffleArray(items);
                
                for (let i = 0; i < Math.min(perCategory, shuffled.length); i++) {
                    if (suggestions.length >= limit) break;
                    if (shuffled[i].keywords && shuffled[i].keywords[0] && !usedIds.has(shuffled[i].id)) {
                        suggestions.push({
                            text: shuffled[i].keywords[0],
                            category: shuffled[i].category
                        });
                        usedIds.add(shuffled[i].id);
                    }
                }
            }
        }

        return this.shuffleArray(suggestions).slice(0, limit);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getStats() {
        let total = this.database.length;
        let categories = this.getAllCategories().length;
        let categoryCounts = this.getCategoryCount();

        return {
            totalResponses: total,
            totalCategories: categories,
            categoryCounts: categoryCounts
        };
    }
}
