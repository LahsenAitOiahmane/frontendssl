document.addEventListener('DOMContentLoaded', () => {
    const cursorEffect = document.querySelector('.cursor-effect');
    const cursorDot = document.querySelector('.cursor-dot');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isMoving = false;
    let movementTimeout;

    // Update mouse position with throttling
    const updateMousePosition = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate update for cursor dot
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
        
        // Set movement flag
        isMoving = true;
        clearTimeout(movementTimeout);
        
        // Reset movement flag after mouse stops
        movementTimeout = setTimeout(() => {
            isMoving = false;
        }, 100);
    };

    document.addEventListener('mousemove', updateMousePosition);

    // Smooth animation for cursor effect
    function animate() {
        // Smooth following effect with dynamic easing
        const ease = isMoving ? 0.15 : 0.08;
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        
        // Apply position
        cursorEffect.style.left = `${cursorX}px`;
        cursorEffect.style.top = `${cursorY}px`;

        // Calculate movement speed for dynamic effects
        const deltaX = mouseX - cursorX;
        const deltaY = mouseY - cursorY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Add subtle rotation based on movement
        const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
        const scale = Math.min(1 + distance * 0.001, 1.5);
        
        cursorEffect.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${isMoving ? scale : 1})`;

        requestAnimationFrame(animate);
    }
    animate();

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .benefit-card, .product-card, .interactive');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorEffect.classList.add('hover');
            cursorDot.classList.add('hover');
        });

        element.addEventListener('mouseleave', () => {
            cursorEffect.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });

    // Handle cursor visibility
    document.addEventListener('mouseleave', () => {
        cursorEffect.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorEffect.style.opacity = '';
        cursorDot.style.opacity = '';
    });

    // Handle window blur/focus
    window.addEventListener('blur', () => {
        cursorEffect.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });

    window.addEventListener('focus', () => {
        cursorEffect.style.opacity = '';
        cursorDot.style.opacity = '';
    });
}); 