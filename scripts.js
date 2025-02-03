// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  // Utilize a API do Bootstrap Collapse para manipular o menu
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  // Cria uma instância do Collapse sem toggling automático
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  // Ao clicar no botão, alterna entre mostrar e ocultar o menu
  navbarToggler.addEventListener('click', function (e) {
    e.stopPropagation(); // Impede propagação para evitar conflitos
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  });

  // Fecha o menu quando clicar fora dele
  document.addEventListener('click', function (e) {
    if (navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(e.target) &&
        !navbarToggler.contains(e.target)) {
      bsCollapse.hide();
    }
  });

  // Fecha o menu ao clicar em qualquer link do menu
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  // (Opcional) Atualização automática do ano:
  // const yearElement = document.getElementById('year');
  // if (yearElement) {
  //   yearElement.textContent = new Date().getFullYear();
  // }
});
