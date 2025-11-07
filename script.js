// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
