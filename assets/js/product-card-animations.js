document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Random floating animation duration between 3-6 seconds
        const duration = 3 + Math.random() * 3;
        // Random delay between 0-2 seconds
        const delay = Math.random() * 2;
        
        card.style.animation = `floating ${duration}s ease-in-out ${delay}s infinite`;

        // Add glitch effect on hover
        card.addEventListener('mouseover', () => {
            createGlitchEffect(card);
        });
    });

    function createGlitchEffect(element) {
        const glitchLines = 3;
        for(let i = 0; i < glitchLines; i++) {
            const glitch = document.createElement('div');
            glitch.className = 'glitch-line';
            glitch.style.cssText = `
                position: absolute;
                top: ${Math.random() * 100}%;
                left: 0;
                height: ${2 + Math.random() * 3}px;
                width: 100%;
                background: rgba(0, 255, 242, ${0.1 + Math.random() * 0.3});
                transform: translateX(-100%);
                animation: glitchLine 0.5s linear forwards;
            `;
            element.appendChild(glitch);
            
            // Remove glitch line after animation
            setTimeout(() => {
                glitch.remove();
            }, 500);
        }
    }
});

// Add this to your HTML file 