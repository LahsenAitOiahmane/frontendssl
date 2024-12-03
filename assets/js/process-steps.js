document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.process-step');

    steps.forEach(step => {
        step.querySelector('.step-header').addEventListener('click', () => {
            // Close all other steps
            steps.forEach(s => {
                if (s !== step) {
                    s.classList.remove('active');
                }
            });
            
            // Toggle current step
            step.classList.toggle('active');
        });
    });

    // Open first step by default
    steps[0].classList.add('active');
}); 