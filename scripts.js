// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  // Utiliza a API do Bootstrap Collapse para gerenciar o menu mobile
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  // Alterna o menu ao clicar no botão (hamburger)
  navbarToggler.addEventListener('click', function (e) {
    e.stopPropagation();
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', function (e) {
    if (navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(e.target) &&
        !navbarToggler.contains(e.target)) {
      bsCollapse.hide();
    }
  });

  // Fecha o menu quando um link do menu é clicado
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // (Opcional) Atualização automática do ano
  // const yearElement = document.getElementById('year');
  // if (yearElement) {
  //   yearElement.textContent = new Date().getFullYear();
  // }
});
