// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glowing effect on hover
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.boxShadow = '0 0 20px #ff99c8';
  });

  button.addEventListener('mouseout', () => {
    button.style.boxShadow = '6px 6px 10px rgba(0, 0, 0, 0.15), -6px -6px 10px #ffffff';
  });
});
