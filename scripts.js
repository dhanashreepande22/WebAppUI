document.addEventListener('DOMContentLoaded', function() {
    const contactEmail = document.querySelector('.footer-right a[href^="mailto:"]');
    
    contactEmail.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = this.getAttribute('href');
    });

    // Get the modal elements
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const trackModal = document.getElementById('track-modal');

    // Get the button elements
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const trackBtn = document.querySelector('.cta-btn');

    // Get the <span> element that closes the modal
    const closeButtons = document.querySelectorAll('.close-btn');

    // Functions to handle form submissions
    function handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (!email.includes('@')) {
            document.getElementById('email-error').textContent = 'Invalid Email';
        } else {
            document.getElementById('email-error').textContent = '';
        }
        if (!password.match(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!]).{8,}$/)) {
            document.getElementById('password-error').textContent = 'Password must include uppercase, lowercase, digit, and special character';
        } else {
            document.getElementById('password-error').textContent = '';
        }
    }

    function handleSignUp(event) {
        event.preventDefault();
        alert('Sign Up functionality not implemented yet.');
    }

    function handleTrack(event) {
        event.preventDefault();
        const shipmentId = document.getElementById('shipment-id').value;
        alert(`Tracking shipment: ${shipmentId}`);
    }

    // Functions to open modals
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Functions to close modals
    function closeModal() {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
        trackModal.style.display = 'none';
    }

    // Event listeners for buttons
    loginBtn.onclick = () => openModal(loginModal);
    signupBtn.onclick = () => openModal(signupModal);
    trackBtn.onclick = () => openModal(trackModal);

    // Event listeners for close buttons
    closeButtons.forEach(button => {
        button.onclick = closeModal;
    });

    // Close modals when clicking outside of modal content
    window.onclick = event => {
        if (event.target === loginModal) {
            closeModal();
        }
        if (event.target === signupModal) {
            closeModal();
        }
        if (event.target === trackModal) {
            closeModal();
        }
    }

    // Event listeners for form submissions
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('signup-form').addEventListener('submit', handleSignUp);
    document.getElementById('track-form').addEventListener('submit', handleTrack);

    // Highlight the active link in the navigation bar
    document.querySelectorAll('.nav-links li a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Get the buttons for the offerings section
    const driverBtn = document.querySelector('.driver-btn');
    const customerBtn = document.querySelector('.customer-btn');

    // Event Listener for driver button
    driverBtn.addEventListener('click', function() {
        alert('Redirecting to Driver application page');
        // Replace with actual URL
        window.location.href = 'driver-application-page.html';
    });

    // Event Listener for customer button
    customerBtn.addEventListener('click', function() {
        alert('Redirecting to Contact Us page');
        // Replace with actual URL
        window.location.href = 'contact-us-page.html';
    });

    // Services Section Modals
    const learnMoreModal = document.getElementById('learn-more-modal');
    
    // Get the Learn More button
    const learnMoreBtn = document.querySelector('.learn-more-btn');

    // Event Listener for Learn More button
    learnMoreBtn.addEventListener('click', function() {
        learnMoreModal.style.display = 'block';
    });

    // Event Listener for close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            learnMoreModal.style.display = 'none';
        });
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == learnMoreModal) {
            learnMoreModal.style.display = 'none';
        }
    });

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Email Validation
        const emailValue = emailInput.value;
        if (!emailValue.includes('@')) {
            emailError.textContent = 'Invalid Email';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        const formData = new FormData(contactForm);

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Perform an action, such as sending the data to a server
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        alert("Thank you for your message, " + name + "! We will get back to you soon.");

        contactForm.reset();
    });
});
