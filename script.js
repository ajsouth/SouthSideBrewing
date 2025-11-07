// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
