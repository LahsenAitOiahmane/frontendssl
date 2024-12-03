document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    let started = false;

    const startCounting = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 10000; // Increased to 6 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    // Even smoother deceleration near the end
                    const remaining = target - current;
                    const step = Math.max(increment * 0.8, remaining * 0.05);
                    current = Math.min(current + step, target);
                    
                    // Round to whole numbers
                    counter.textContent = Math.round(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    };

    // Start animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                startCounting();
            }
        });
    }, { threshold: 0.3 });

    // Observe the counter section
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        observer.observe(counterSection);
    }
}); 