
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
   

        document.addEventListener('DOMContentLoaded', function() {
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            const backToTop = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                    backToTop.classList.add('active');
                } else {
                    navbar.classList.remove('scrolled');
                    backToTop.classList.remove('active');
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        const navbarCollapse = document.getElementById('navbarNav');
                        if (navbarCollapse.classList.contains('show')) {
                            document.querySelector('.navbar-toggler').click();
                        }
                    }
                });
            });
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            if(contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // Validate form
                    if(!name || !email || !subject || !message) {
                        alert('Please fill all fields');
                        return;
                    }
                    
                    // In a real application, you would send the form data to a server
                    // For demo purposes, we'll just log the data and show a success message
                    console.log({
                        name,
                        email,
                        subject,
                        message
                    });
                    
                    // Show success message
                    alert('Thank you for your message. I will get back to you soon!');
                    
                    // Reset form
                    contactForm.reset();
                });
            }
            
            // Project filter functionality could be added here
            
            // Automatic copyright year
            document.querySelectorAll('.copyright-year').forEach(el => {
                el.textContent = new Date().getFullYear();
            });
            
            // Animation on scroll could be added here using libraries like AOS
            
            // Newsletter subscription
            const subscribeBtn = document.getElementById('subscribe-btn');
            if(subscribeBtn) {
                subscribeBtn.addEventListener('click', function() {
                    const emailInput = this.previousElementSibling;
                    const email = emailInput.value;
                    
                    if(!email) {
                        alert('Please enter your email address');
                        return;
                    }
                    
                    // In a real application, you would send the email to a server
                    // For demo purposes, we'll just log the email and show a success message
                    console.log({ email });
                    
                    // Show success message
                    alert('Thank you for subscribing to my newsletter!');
                    
                    // Clear input
                    emailInput.value = '';
                });
            }
            
            // Projects hover effect enhancement
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                });
            });
            
            // Skills progress bars animation (could be added if needed)
            
            // Testimonial slider (could be added using Swiper.js or other libraries)
            
            // Theme switcher (light/dark mode) could be added here
        });