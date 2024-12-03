document.addEventListener('DOMContentLoaded', () => {
    // Utility function to handle element animation
    const animateElement = (element, animation, delay = 0) => {
        setTimeout(() => {
            element.classList.add('animate__animated', animation);
            element.style.opacity = '1';
        }, delay);
    };

    // Initialize Intersection Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Hero section animations
                if (element.classList.contains('hero-content')) {
                    const title = element.querySelector('h1');
                    const subtitle = element.querySelector('p');
                    const cta = element.querySelector('.hero-cta');

                    animateElement(title, 'animate__fadeInUp');
                    animateElement(subtitle, 'animate__fadeInUp', 200);
                    animateElement(cta, 'animate__fadeInUp', 400);
                }

                // Benefits card animations
                if (element.classList.contains('benefit-card')) {
                    const delay = element.dataset.delay || 0;
                    animateElement(element, 'animate__fadeInUp', parseInt(delay));
                }

                // Product card animations
                if (element.classList.contains('product-card')) {
                    const delay = element.dataset.delay || 0;
                    animateElement(element, 'animate__fadeInUp', parseInt(delay));
                }

                // Stop observing after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        observer.observe(heroContent);
    }

    // Observe benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.dataset.delay = index * 200; // Stagger the animations
        observer.observe(card);
    });

    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.dataset.delay = index * 200;
        observer.observe(card);
    });
}); 