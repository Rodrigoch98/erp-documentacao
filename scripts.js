// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');

  // Quando o botão do menu é clicado, alterna a classe "show"
  navbarToggler.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation(); // Impede que o clique se propague e interfira no fechamento
    navbarCollapse.classList.toggle('show');
  });

  // Fecha o menu quando clicar fora dele
  document.addEventListener('click', function (e) {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
      navbarCollapse.classList.remove('show');
    }
  });

  // Fecha o menu quando um link é clicado
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      navbarCollapse.classList.remove('show');
    });
  });

  // (Opcional) Atualização automática do ano
  // const yearElement = document.getElementById('year');
  // if (yearElement) {
  //   yearElement.textContent = new Date().getFullYear();
  // }
});
