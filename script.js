const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
