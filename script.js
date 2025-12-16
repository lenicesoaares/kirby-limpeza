// Suavizar rolagem para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
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
});