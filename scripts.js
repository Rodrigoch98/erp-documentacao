// scripts.js
// Adiciona interatividade ao menu mobile
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });

  // Fecha o menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarCollapse.classList.remove('show');
    });
  });

  // Atualiza automaticamente o ano no rodapé
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
