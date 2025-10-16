// Meme Museum JavaScript

// Meme data for the gallery
const memes = [
    {
        id: 1,
        name: "Distracted Boyfriend",
        category: "viral",
        year: 2017,
        description: "O meme do namorado distraído se tornou um símbolo de escolhas difíceis.",
        imageUrl: "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/16:9/w_2494,h_1403,c_limit/MemeLoveTriangle_297886754.jpg",
        popularity: 95
    },
    {
        id: 2,
        name: "Grumpy Cat",
        category: "classic",
        year: 2012,
        description: "Tardar Sauce, conhecida como Grumpy Cat, conquistou a internet com sua expressão permanentemente irritada.",
        imageUrl: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/26AC/production/_107000990_grumpycat5.jpg",
        popularity: 98
    },
    {
        id: 3,
        name: "Doge",
        category: "classic",
        year: 2013,
        description: "Much wow! O Shiba Inu que inspirou uma criptomoeda e milhões de memes.",
        imageUrl: "https://istoedinheiro.com.br/wp-content/uploads/sites/17/2024/05/kabosu-doge.jpg",
        popularity: 92
    },
    {
        id: 4,
        name: "This Is Fine",
        category: "modern",
        year: 2016,
        description: "O cão em uma sala pegando fogo representa perfeitamente como lidamos com crises.",
        imageUrl: "https://miro.medium.com/0*ZjYSm_q36J4KChdn",
        popularity: 89
    },
    {
        id: 5,
        name: "Drake Pointing",
        category: "viral",
        year: 2015,
        description: "Drake rejeitando uma coisa e aprovando outra virou template universal de preferências.",
        imageUrl: "https://notesfromachair.com/wp-content/uploads/2024/03/0_jdp3i0c4ojnwyfbl.jpg",
        popularity: 94
    },
    {
        id: 6,
        name: "Woman Yelling at Cat",
        category: "viral",
        year: 2019,
        description: "A combinação perfeita de drama humano e indiferença felina.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/WomanYellingAtACat_meme.jpg",
        popularity: 91
    },
    {
        id: 7,
        name: "Pepe the Frog",
        category: "classic",
        year: 2008,
        description: "Feels good man! O sapo que se tornou um fenômeno cultural global.",
        imageUrl: "https://via.placeholder.com/400x300/00B894/FFFFFF?text=Pepe+Frog",
        popularity: 87
    },
    {
        id: 8,
        name: "Success Kid",
        category: "classic",
        year: 2007,
        description: "O punho cerrado de vitória de um bebê na praia virou símbolo de conquistas.",
        imageUrl: "https://via.placeholder.com/400x300/FDCB6E/FFFFFF?text=Success+Kid",
        popularity: 85
    },
    {
        id: 9,
        name: "Expanding Brain",
        category: "modern",
        year: 2017,
        description: "Quatro níveis de iluminação mental para demonstrar evolução de ideias.",
        imageUrl: "https://via.placeholder.com/400x300/E17055/FFFFFF?text=Expanding+Brain",
        popularity: 88
    },
    {
        id: 10,
        name: "Surprised Pikachu",
        category: "modern",
        year: 2018,
        description: "A expressão chocada do Pokémon mais famoso do mundo.",
        imageUrl: "https://via.placeholder.com/400x300/FFCB77/FFFFFF?text=Surprised+Pikachu",
        popularity: 90
    },
    {
        id: 11,
        name: "Hide the Pain Harold",
        category: "viral",
        year: 2011,
        description: "András Arató se tornou o rosto do sofrimento disfarçado com um sorriso.",
        imageUrl: "https://via.placeholder.com/400x300/FF7675/FFFFFF?text=Hide+Pain+Harold",
        popularity: 86
    },
    {
        id: 12,
        name: "Galaxy Brain",
        category: "modern",
        year: 2017,
        description: "Quando suas ideias transcendem a realidade conhecida.",
        imageUrl: "https://via.placeholder.com/400x300/74B9FF/FFFFFF?text=Galaxy+Brain",
        popularity: 83
    },
    {
        id: 13,
        name: "Nazaré Confusa",
        category: "brasileiro",
        year: 2020,
        description: "A expressão confusa da Nazaré Tedesco de Senhora do Destino virou símbolo universal de confusão.",
        imageUrl: "https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Nazaré+Confusa",
        popularity: 96
    },
    {
        id: 14,
        name: "Gretchen Shoqued",
        category: "brasileiro",
        year: 2019,
        description: "A cara de surpresa da Gretchen que conquistou o Brasil e se tornou meme internacional.",
        imageUrl: "https://via.placeholder.com/400x300/A8E6CF/FFFFFF?text=Gretchen+Shocked",
        popularity: 89
    },
    {
        id: 15,
        name: "Faustão Errou Rude",
        category: "brasileiro",
        year: 2018,
        description: "O clássico 'Errou rude!' do Faustão que virou expressão de erro épico no Brasil.",
        imageUrl: "https://via.placeholder.com/400x300/FFD93D/FFFFFF?text=Faustão+Errou",
        popularity: 92
    },
    {
        id: 16,
        name: "Stonks Brasileiro",
        category: "brasileiro",
        year: 2021,
        description: "A versão brasileira do meme Stonks, representando os investimentos tupiniquins.",
        imageUrl: "https://via.placeholder.com/400x300/6BCF7F/FFFFFF?text=Stonks+BR",
        popularity: 85
    },
    {
        id: 17,
        name: "Edir Macedo Ríspido",
        category: "brasileiro",
        year: 2020,
        description: "A expressão séria e determinada que virou meme para situações de confronto.",
        imageUrl: "https://via.placeholder.com/400x300/4D4D4D/FFFFFF?text=Edir+Macedo",
        popularity: 81
    },
    {
        id: 18,
        name: "Jair Messias",
        category: "brasileiro",
        year: 2019,
        description: "Memes políticos que dominaram as redes sociais brasileiras durante anos.",
        imageUrl: "https://via.placeholder.com/400x300/B4A7D6/FFFFFF?text=Jair+Messias",
        popularity: 88
    },
    {
        id: 19,
        name: "Galvão Bueno",
        category: "brasileiro",
        year: 2014,
        description: "As frases épicas do narrador mais famoso do Brasil que viraram memes eternos.",
        imageUrl: "https://via.placeholder.com/400x300/FF8B94/FFFFFF?text=Galvão+Bueno",
        popularity: 90
    },
    {
        id: 20,
        name: "Carreta Furacão",
        category: "brasileiro",
        year: 2017,
        description: "O funk que virou fenômeno e gerou milhares de memes e remixes na internet.",
        imageUrl: "https://via.placeholder.com/400x300/C7CEEA/FFFFFF?text=Carreta+Furacão",
        popularity: 87
    },
    {
        id: 21,
        name: "Agostinho Carrara",
        category: "brasileiro",
        year: 2016,
        description: "O personagem de A Grande Família que virou meme com suas expressões únicas.",
        imageUrl: "https://via.placeholder.com/400x300/FFEAA7/FFFFFF?text=Agostinho",
        popularity: 84
    },
    {
        id: 22,
        name: "Dollynho",
        category: "brasileiro",
        year: 2015,
        description: "Seu amiguinho! O refrigerante que conquistou a internet brasileira com seu jingle marcante.",
        imageUrl: "https://via.placeholder.com/400x300/FF7675/FFFFFF?text=Dollynho",
        popularity: 91
    }
];

// DOM Elements
let memeGrid;
let filterButtons;
let counters;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    renderMemeGallery();
    setupFilterButtons();
    setupCounterAnimation();
    setupSmoothScrolling();
});

// Initialize DOM elements
function initializeElements() {
    memeGrid = document.getElementById('memeGrid');
    filterButtons = document.querySelectorAll('.filter-buttons .btn');
    counters = document.querySelectorAll('.counter');
}

// Render meme gallery
function renderMemeGallery(filter = 'all') {
    if (!memeGrid) return;
    
    memeGrid.innerHTML = '';
    
    const filteredMemes = filter === 'all' ? memes : memes.filter(meme => meme.category === filter);
    
    filteredMemes.forEach((meme, index) => {
        const memeCard = createMemeCard(meme, index);
        memeGrid.appendChild(memeCard);
    });
    
    // Animate cards entrance
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

// Create individual meme card
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
                <i class="fas fa-eye fa-2x"></i>
            </div>
            <div class="position-absolute top-0 end-0 p-2">
                <span class="badge bg-primary">${meme.year}</span>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold">${meme.name}</h5>
            <p class="card-text text-muted">${meme.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">
                    <i class="fas fa-fire text-danger me-1"></i>
                    ${meme.popularity}% Popular
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
    
    // Add click event for modal (if you want to implement it)
    card.addEventListener('click', () => showMemeModal(meme));
    
    col.appendChild(card);
    return col;
}

// Setup filter buttons
function setupFilterButtons() {
    if (!filterButtons) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value and render gallery
            const filter = this.getAttribute('data-filter');
            renderMemeGallery(filter);
        });
    });
}

// Setup counter animation
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

// Animate counter
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

// Setup smooth scrolling
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

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Random meme function
function randomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];
    
    // Show a toast with random meme info
    showToast(`Meme Aleatório: ${randomMeme.name}`, `${randomMeme.description} (${randomMeme.year})`, 'info');
    
    // Scroll to gallery and highlight the meme
    setTimeout(() => {
        scrollToSection('gallery');
        highlightMeme(randomMeme.id);
    }, 1000);
}



// Like meme function
function likeMeme(memeId) {
    const meme = memes.find(m => m.id === memeId);
    if (meme) {
        showToast('❤️ Curtido!', `Você curtiu o meme "${meme.name}"!`, 'success');
        
        // Add some visual feedback
        const heartBtn = event.target.closest('button');
        heartBtn.classList.add('text-danger');
        heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
        
        setTimeout(() => {
            heartBtn.classList.remove('text-danger');
        }, 2000);
    }
}

// Share individual meme card
function shareMemeCard(memeId) {
    const meme = memes.find(m => m.id === memeId);
    if (meme) {
        showToast('Compartilhado!', `Meme "${meme.name}" compartilhado!`, 'info');
    }
}

// Show meme modal (basic implementation)
function showMemeModal(meme) {
    // You could implement a modal here for detailed view
    console.log('Showing modal for:', meme);
}

// Highlight specific meme
function highlightMeme(memeId) {
    // This could highlight a specific meme card
    console.log('Highlighting meme:', memeId);
}

// Utility Functions

// Show toast notification
function showToast(title, message, type = 'info') {
    const toastContainer = getOrCreateToastContainer();
    const toast = createToast(title, message, type);
    toastContainer.appendChild(toast);
    
    // Show toast with Bootstrap
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Get or create toast container
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

// Create toast element
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

// Copy to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Create confetti effect
function createConfetti() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
    }
}

// Create individual confetti piece
function createConfettiPiece(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    
    document.body.appendChild(confetti);
    
    // Animate confetti falling
    const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: 'translateY(100vh) rotate(720deg)', opacity: 0 }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
    });
    
    animation.onfinish = () => confetti.remove();
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

// Activate easter egg
function activateEasterEgg() {
    showToast('🎉 Easter Egg!', 'Você descobriu o código secreto! Todos os memes são agora ÉPICOS!', 'success');
    
    // Add rainbow effect to all meme cards
    const memeCards = document.querySelectorAll('.meme-card');
    memeCards.forEach(card => {
        card.style.animation = 'rainbow 2s infinite';
        card.style.border = '3px solid transparent';
        card.style.backgroundImage = 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
        card.style.backgroundSize = '400%';
        card.style.backgroundClip = 'padding-box';
    });
    
    // Add CSS for rainbow animation
    if (!document.getElementById('rainbow-styles')) {
        const style = document.createElement('style');
        style.id = 'rainbow-styles';
        style.textContent = `
            @keyframes rainbow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
    }
    
    createConfetti();
}

// Performance optimization: Lazy loading for images
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

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Export functions for global use
window.scrollToSection = scrollToSection;
window.randomMeme = randomMeme;
window.likeMeme = likeMeme;
window.shareMemeCard = shareMemeCard;