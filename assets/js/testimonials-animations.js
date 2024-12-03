document.addEventListener('DOMContentLoaded', () => {
    // Testimonial cards animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(card);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
    });

    // Rating stars animation
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('i');
        stars.forEach((star, index) => {
            star.style.opacity = '0';
            star.style.transform = 'scale(0)';
            
            setTimeout(() => {
                star.style.opacity = '1';
                star.style.transform = 'scale(1)';
            }, 1000 + (index * 200));
        });
    });
}); 