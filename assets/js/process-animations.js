document.addEventListener('DOMContentLoaded', () => {
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-50px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        step.style.opacity = '1';
                        step.style.transform = 'translateX(0)';
                        
                        // Animate the line after the step appears
                        const line = step.querySelector('.step-line');
                        if (line) {
                            line.style.height = '100%';
                        }
                    }, index * 300);
                    
                    observer.unobserve(step);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(step);
    });

    // Add hover effect for step icons
    processSteps.forEach(step => {
        const icon = step.querySelector('.step-icon');
        
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1) rotate(360deg)';
            icon.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}); 