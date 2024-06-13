<!-- Optional: Add your JavaScript for interactivity -->
    document.addEventListener('DOMContentLoaded', function () {
        // Form validation
        const form = document.getElementById('contactForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Perform your custom validation here
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const errorElement = document.getElementById('error');

            if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                errorElement.textContent = 'All fields are required';
            } else {
                // Handle form submission (you can replace this with your own logic)
                alert('Form submitted successfully!');
                form.reset();
                errorElement.textContent = '';
            }
        });
    });
