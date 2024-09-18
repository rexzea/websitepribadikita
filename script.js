document.addEventListener('DOMContentLoaded', () => {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  
  