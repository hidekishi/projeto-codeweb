// Dados dos memes exibidos na galeria
const memes = [
    {
        id: 1,
        name: "Rickroll",
        year: 2007,
        imageUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png"
    },
    {
        id: 2,
        name: "FUUUUU",
        year: 2008,
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/000/063/Rage.jpg"
    },
    {
        id: 3,
        name: "Trollface",
        year: 2008,
        imageUrl: "https://m.media-amazon.com/images/I/61s0CU9bmGL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg"
    },
    {
        id: 4,
        name: "Poker Face",
        year: 2009,
        imageUrl: "https://ih1.redbubble.net/image.652250735.0700/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
    },
    {
        id: 5,
        name: "Forever Alone",
        year: 2010,
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/003/619/ForeverAlone.jpg"
    },
    {
        id: 6,
        name: "Me Gusta",
        year: 2010,
        imageUrl: "https://ih1.redbubble.net/image.651876224.0374/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
    },
    {
        id: 7,
        name: "Bad Luck Brian",
        year: 2012,
        imageUrl: "https://f8n-ipfs-production.imgix.net/QmPEggJSiMtAZCFsRqvRNYtbJFuj34h2a2Abcm6qFbdQfg/nft.jpg?auto=format%2Ccompress&q=70&cs=srgb&h=1200&w=1200&fnd_key=v1"
    },
    {
        id: 8,
        name: "Grumpy Cat",
        year: 2012,
        imageUrl: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/26AC/production/_107000990_grumpycat5.jpg"
    },
    {
        id: 9,
        name: "Doge",
        year: 2013,
        imageUrl: "https://istoedinheiro.com.br/wp-content/uploads/sites/17/2024/05/kabosu-doge.jpg"
    },
];

// Referências de elementos do DOM
let memeGrid;
let counters;

// Inicialização principal da página
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    updateCounterTargets();
    renderMemeGallery();
    setupCounterAnimation();
    setupSmoothScrolling();
});

// Captura elementos usados frequentemente
function initializeElements() {
    memeGrid = document.getElementById('memeGrid');
    counters = document.querySelectorAll('.counter');
}

// Define valores dos contadores dinamicamente
function updateCounterTargets() {
    const counterElements = document.querySelectorAll('.counter');
    
    if (counterElements.length >= 2) {
        // Primeiro contador: número real de memes
        counterElements[0].setAttribute('data-target', memes.length);
        
        // Segundo contador: anos de história (calculado dinamicamente)
        const years = memes.map(meme => meme.year);
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);
        const yearRange = maxYear - minYear + 1;
        counterElements[1].setAttribute('data-target', yearRange);
    }
}

// Monta e insere os cards de memes na galeria
function renderMemeGallery() {
    if (!memeGrid) return;
    
    memeGrid.innerHTML = '';
    
    memes.forEach((meme, index) => {
        const memeCard = createMemeCard(meme, index);
        memeGrid.appendChild(memeCard);
    });
    
    // Anima a entrada dos cards
    setTimeout(() => {
        const cards = memeGrid.querySelectorAll('.meme-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// Cria um card de meme (HTML)
function createMemeCard(meme, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    const card = document.createElement('div');
    card.className = 'card meme-card shadow-lg h-100';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    card.innerHTML = `
        <div class="position-relative overflow-hidden">
            <img src="${meme.imageUrl}" class="card-img-top meme-image" alt="${meme.name}">
            <div class="meme-overlay">
            </div>
            <div class="position-absolute top-0 end-0 p-2">
                <span class="badge bg-primary">${meme.year}</span>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold">${meme.name}</h5>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">
                    <i class="fas fa-calendar text-primary me-1"></i>
                    ${meme.year}
                </small>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary btn-sm" onclick="likeMeme(${meme.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="shareMemeCard(${meme.id})">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Clique no card: exibir detalhes (placeholder)
    card.addEventListener('click', () => showMemeModal(meme));
    
    col.appendChild(card);
    return col;
}

// Observa os contadores e inicia a animação quando visíveis
function setupCounterAnimation() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Anima um contador numérico até o alvo
function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        counter.textContent = Math.floor(current);
        
        if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

// Habilita rolagem suave para âncoras internas
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Rola até a seção informada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Seleciona e destaca um meme aleatório
function randomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];
    
    // Notificação com o meme sorteado
    showToast(`Meme Aleatório: ${randomMeme.name}`, `Ano: ${randomMeme.year}`, 'info');
    
    // Vai até a galeria e destaca o meme (visualmente)
    setTimeout(() => {
        scrollToSection('gallery');
        highlightMeme(randomMeme.id);
    }, 1000);
}



// Marca um meme como curtido (feedback visual + toast)
function likeMeme(memeId) {
    const meme = memes.find(m => m.id === memeId);
    if (meme) {
        showToast('❤️ Curtido!', `Você curtiu o meme "${meme.name}"!`, 'success');
        
    // Feedback visual no botão de coração
        const heartBtn = event.target.closest('button');
        heartBtn.classList.add('text-danger');
        heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
        
        setTimeout(() => {
            heartBtn.classList.remove('text-danger');
        }, 2000);
    }
}

// Simula compartilhar um meme (toast)
function shareMemeCard(memeId) {
    const meme = memes.find(m => m.id === memeId);
    if (meme) {
        showToast('Compartilhado!', `Meme "${meme.name}" compartilhado!`, 'info');
    }
}

// Exibe detalhes do meme (placeholder de modal)
function showMemeModal(meme) {
    // Você pode implementar um modal aqui para visualização detalhada
    console.log('Mostrando modal para:', meme);
}

// Destaca visualmente um card de meme (placeholder)
function highlightMeme(memeId) {
    // Isso pode destacar um card específico do meme
    console.log('Destacando meme:', memeId);
}

// Utilitários

// Cria e exibe uma notificação (Bootstrap Toast)
function showToast(title, message, type = 'info') {
    const toastContainer = getOrCreateToastContainer();
    const toast = createToast(title, message, type);
    toastContainer.appendChild(toast);
    
    // Mostrar toast com Bootstrap
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remover toast após ser ocultado
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Obtém (ou cria) o container de toasts
function getOrCreateToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container position-fixed top-0 end-0 p-3';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }
    return container;
}

// Monta o HTML de um toast Bootstrap
function createToast(title, message, type) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    
    const bgClass = {
        'success': 'bg-success',
        'error': 'bg-danger',
        'warning': 'bg-warning',
        'info': 'bg-info'
    }[type] || 'bg-info';
    
    toast.innerHTML = `
        <div class="toast-header ${bgClass} text-white">
            <strong class="me-auto">${title}</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    return toast;
}

// Copia um texto para a área de transferência
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
    // Alternativa para navegadores sem Clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Lazy-load de imagens com IntersectionObserver
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicia o lazy-load após o DOM estar pronto
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Exporta funções globais usadas no HTML
window.scrollToSection = scrollToSection;
window.randomMeme = randomMeme;
window.likeMeme = likeMeme;
window.shareMemeCard = shareMemeCard;

// ===== Hall da Fama: comportamentos da página dedicada =====

// Dados do pódio (exemplo)
const podiumData = [
    {
        position: 1,
        id: "trollface",
        name: "Trollface",
        badge: "👑 LENDA ETERNA",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
    },
    {
        position: 2,
        id: "rage-guy",
        name: "FUUUU (Rage Guy)",
        badge: "🥈 PIONEIRO",
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/000/063/Rage.jpg"
    },
    {
        position: 3,
        id: "rickroll",
        name: "Rickroll",
        badge: "🥉 IMORTAL",
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/000/305/Rickroll.jpg"
    }
];

// Verifica se a URL/título indicam a página de Hall da Fama
function isHallOfFamePage() {
    return window.location.pathname.includes('hall-da-fama') || 
           document.title.includes('Hall da Fama');
}

// Inicia recursos exclusivos do Hall da Fama
function initializeHallOfFame() {
    if (!isHallOfFamePage()) return;
    
    console.log('🏆 Hall da Fama carregado!');
    
    // Efeito de entrada dos cards do pódio
    const podiumCards = document.querySelectorAll('.podium-card');
    podiumCards.forEach((card, index) => {
        // Delay na animação de entrada
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    setupHallAnimations();
    setupHallInteractions();
}

// Animações simples do Hall da Fama
function setupHallAnimations() {
    // Efeito hover no ícone de troféu
    const trophyIcon = document.querySelector('.trophy-icon');
    if (trophyIcon) {
        trophyIcon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        trophyIcon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Interações dos cards do pódio
function setupHallInteractions() {
    const podiumCards = document.querySelectorAll('.podium-card');
    
    podiumCards.forEach((card, index) => {
    // Clique: exibe detalhes do meme
        card.addEventListener('click', function() {
            showMemeDetails(podiumData[index]);
        });
    });
}

// Mostra detalhes do meme (alert simples)
function showMemeDetails(memeData) {
    const message = `
🏆 ${memeData.name}
📍 Posição: ${memeData.position}°
🏅 ${memeData.badge}

Este é um dos memes mais lendários da história da internet!
    `;
    
    alert(message);
}

// Roteia inicialização conforme a página atual
document.addEventListener('DOMContentLoaded', function() {
    // Comum às páginas
    initializeElements();
    updateCounterTargets();
    
    // Específicas por página
    if (isHallOfFamePage()) {
        initializeHallOfFame();
    } else {
    // Página principal do museu
        renderMemeGallery();
        setupCounterAnimation();
        setupSmoothScrolling();
    }
});

// Log com tag da página atual
function logEvent(event, data = {}) {
    const page = isHallOfFamePage() ? 'Hall da Fama' : 'Museu Principal';
    console.log(`🎭 ${page} - ${event}:`, data);
}