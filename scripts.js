// Função para registrar acessos
let totalAcessos = 0;

function registrarAcesso() {
    totalAcessos++;
    console.log("Total de acessos:", totalAcessos);
}

// Função para animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
