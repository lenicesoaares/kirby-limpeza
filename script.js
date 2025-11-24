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
        
        // Adicionar número de telefone real
        document.addEventListener('DOMContentLoaded', function() {
            // Substitua pelo número real da sua mãe
            const phoneNumber = '+351 XXX XXX XXX';
            const whatsappNumber = '351XXXXXXXXX';
            
            // Atualizar todos os elementos com número de telefone
            document.querySelectorAll('.phone-number').forEach(el => {
                el.textContent = phoneNumber;
            });
            
            // Atualizar links de telefone e WhatsApp
            document.querySelectorAll('a[href="tel:+351XXXXXXXXX"]').forEach(el => {
                el.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
            });
            
            document.querySelectorAll('a[href="https://wa.me/351XXXXXXXXX?text=Olá! Gostaria de saber mais sobre o Kurby"]').forEach(el => {
                el.href = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre o Kurby`;
            });
        });
