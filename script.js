// Suavizar rolagem para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Fecha o menu no mobile quando clica em um link
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Configurar número de telefone
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = '+351 936 059 112';
    const whatsappNumber = '351936059112';
    
    // Atualizar número exibido
    document.querySelectorAll('.phone-number').forEach(el => {
        el.textContent = phoneNumber;
    });
    
    // Atualizar link de telefone
    document.querySelectorAll('a[href="tel:+351936059112"]').forEach(el => {
        el.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
    });
    
    // Menu Hamburguer
    setupMobileMenu();
});

// Funcionalidade do Menu Hamburguer
function setupMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (!hamburgerBtn || !navMenu) return;
    
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Fecha o menu ao clicar fora (no overlay)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            !hamburgerBtn.contains(event.target)) {
            closeMobileMenu();
        }
    });
    
    // Fecha o menu ao redimensionar a janela para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Fecha o menu ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
}