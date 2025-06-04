const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  document.querySelectorAll('.about-img, .university-img, .gmail-img, .stack-list').forEach(el => observer.observe(el));
