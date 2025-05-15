// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    themeIcon.classList.toggle('fa-sun', !isLightMode);
    themeIcon.classList.toggle('fa-moon', isLightMode);
  });

  // Dynamic Text in Hero Section
  const dynamicText = document.getElementById('dynamic-text');
  if (dynamicText) {
    const words = ['Programmer', 'Designer', 'Innovator', 'Visionary'];
    let wordIndex = 0;
    setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      dynamicText.textContent = words[wordIndex];
      dynamicText.classList.add('fade-in');
    }, 2000);
  }

  // Contact Form Submission (Client-Side Only)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Basic Validation
      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all fields.';
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        return;
      }

      // Simulate form submission (since there's no server)
      console.log('Form Submission:', { name, email, message });
      formStatus.textContent = 'Message sent successfully! (Note: This is a demo - emails are logged to the console.)';
      contactForm.reset();
    });
  }

  // Smooth Scroll for Nav Links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Fade-in Animation for Dynamic Text
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
});
