document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
  
    navbar.addEventListener('mouseenter', function() {
      navbar.style.backgroundColor = '#165678';
    });
  
    navbar.addEventListener('mouseleave', function() {
      navbar.style.backgroundColor = '#0c689d';
    });
  });
  