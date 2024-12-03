document.addEventListener('DOMContentLoaded', () => {
    const circuitOverlay = document.querySelector('.circuit-overlay');
    const circuitLines = document.querySelector('.circuit-lines');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const revealThreshold = window.innerHeight * 0.3;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollY > revealThreshold) {
                    circuitOverlay.classList.add('reveal-background');
                    circuitLines.classList.add('reveal-background');
                } else {
                    circuitOverlay.classList.remove('reveal-background');
                    circuitLines.classList.remove('reveal-background');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add subtle mouse parallax effect
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        circuitOverlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
        circuitLines.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    });
}); 