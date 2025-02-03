// scripts.js
// Interatividade do menu mobile e atualização automática do ano (se desejado)
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbarCollapse.classList.remove('show');
    });
  });

  // Para atualizar o ano automaticamente, descomente as linhas abaixo:
  // const yearElement = document.getElementById('year');
  // if (yearElement) {
  //   yearElement.textContent = new Date().getFullYear();
  // }
});
