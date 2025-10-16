// Museu dos Memes - JavaScript

// Dados dos memes para a galeria
const memes = [
    {
        id: 1,
        name: "Rickroll",
        year: 2007,
        imageUrl: "https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png"
    },
    {
        id: 2,
        name: "FUUUUU (Rage Guy)",
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

// Elementos do DOM
let memeGrid;
let counters;

// Inicializar a aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    updateCounterTargets();
    renderMemeGallery();
    setupCounterAnimation();
    setupSmoothScrolling();
});

// Inicializar elementos do DOM
function initializeElements() {
    memeGrid = document.getElementById('memeGrid');
    counters = document.querySelectorAll('.counter');
}

// Atualizar contadores com dados reais
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

// Renderizar galeria de memes
function renderMemeGallery() {
    if (!memeGrid) return;
    
    memeGrid.innerHTML = '';
    
    memes.forEach((meme, index) => {
        const memeCard = createMemeCard(meme, index);
        memeGrid.appendChild(memeCard);
    });
    
    // Animar entrada dos cards
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

// Criar card individual do meme
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
    
    // Adicionar evento de clique para modal (se você quiser implementar)
    card.addEventListener('click', () => showMemeModal(meme));
    
    col.appendChild(card);
    return col;
}

// Configurar animação dos contadores
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

// Animar contador
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

// Configurar rolagem suave
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

// Função para rolar até seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função de meme aleatório
function randomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];
    
    // Mostrar toast com informações do meme aleatório
    showToast(`Meme Aleatório: ${randomMeme.name}`, `Ano: ${randomMeme.year}`, 'info');
    
    // Rolar até galeria e destacar o meme
    setTimeout(() => {
        scrollToSection('gallery');
        highlightMeme(randomMeme.id);
    }, 1000);
}



// Função de curtir meme
function likeMeme(memeId) {
    const meme = memes.find(m => m.id === memeId);
    if (meme) {
        showToast('❤️ Curtido!', `Você curtiu o meme "${meme.name}"!`, 'success');
        
        // Adicionar feedback visual
        const heartBtn = event.target.closest('button');
        heartBtn.classList.add('text-danger');
        heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
        
        setTimeout(() => {
            heartBtn.classList.remove('text-danger');
        }, 2000);
    }
}

// Compartilhar card individual do meme
function shareMemeCard(memeId) {
    const meme = memes.find(m => m.id === memeId);
    if (meme) {
        showToast('Compartilhado!', `Meme "${meme.name}" compartilhado!`, 'info');
    }
}

// Mostrar modal do meme (implementação básica)
function showMemeModal(meme) {
    // Você pode implementar um modal aqui para visualização detalhada
    console.log('Mostrando modal para:', meme);
}

// Destacar meme específico
function highlightMeme(memeId) {
    // Isso pode destacar um card específico do meme
    console.log('Destacando meme:', memeId);
}

// Funções Utilitárias

// Mostrar notificação toast
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

// Obter ou criar container de toast
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

// Criar elemento toast
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

// Copiar para área de transferência
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Otimização de performance: Carregamento lazy para imagens
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

// Inicializar carregamento lazy quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Exportar funções para uso global
window.scrollToSection = scrollToSection;
window.randomMeme = randomMeme;
window.likeMeme = likeMeme;
window.shareMemeCard = shareMemeCard;

// ============================================================================
// HALL DA FAMA - Funcionalidades específicas
// ============================================================================

// Dados do pódio para o Hall da Fama
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

// Detectar se estamos na página do Hall da Fama
function isHallOfFamePage() {
    return window.location.pathname.includes('hall-da-fama') || 
           document.title.includes('Hall da Fama');
}

// Inicializar funcionalidades específicas do Hall da Fama
function initializeHallOfFame() {
    if (!isHallOfFamePage()) return;
    
    console.log('🏆 Hall da Fama carregado!');
    
    // Adicionar efeitos especiais aos cards
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

// Configurar animações do Hall da Fama
function setupHallAnimations() {
    // Animação simples do troféu principal
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

// Configurar interações do Hall da Fama
function setupHallInteractions() {
    const podiumCards = document.querySelectorAll('.podium-card');
    
    podiumCards.forEach((card, index) => {
        // Efeito de clique para mostrar detalhes
        card.addEventListener('click', function() {
            showMemeDetails(podiumData[index]);
        });
    });
}

// Mostrar detalhes do meme (modal simples)
function showMemeDetails(memeData) {
    const message = `
🏆 ${memeData.name}
📍 Posição: ${memeData.position}°
🏅 ${memeData.badge}

Este é um dos memes mais lendários da história da internet!
    `;
    
    alert(message);
}

// Inicialização principal
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidades principais
    initializeElements();
    updateCounterTargets();
    
    // Funcionalidades específicas baseadas na página
    if (isHallOfFamePage()) {
        initializeHallOfFame();
    } else {
        // Página principal do museu
        renderMemeGallery();
        setupCounterAnimation();
        setupSmoothScrolling();
    }
});

// Função utilitária para logging
function logEvent(event, data = {}) {
    const page = isHallOfFamePage() ? 'Hall da Fama' : 'Museu Principal';
    console.log(`🎭 ${page} - ${event}:`, data);
}