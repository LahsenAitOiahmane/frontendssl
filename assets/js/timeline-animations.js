document.addEventListener('DOMContentLoaded', () => {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    const revealOnScroll = () => {
        timelineSteps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.85;
            
            if (stepTop < triggerPoint) {
                step.classList.add('reveal');
            }
        });
    };

    // Force initial check after a slight delay
    setTimeout(() => {
        revealOnScroll();
    }, 300);
    
    // Check on scroll with throttling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            revealOnScroll();
        });
    });
}); 