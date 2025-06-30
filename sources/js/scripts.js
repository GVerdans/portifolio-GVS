'use strict'

// Funções de carregamento da página

    // Carregar os elementos
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});


    // Efeitos de pular das Hard Skills
document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.ul-icons-skills li');
    const skillsSection = document.querySelector('.hard-skills');

    if (skillsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    icons.forEach((icon, i) => {
                        setTimeout(() => {
                            icon.classList.add('animated');
                        }, i * 200);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }
});

// Funções do Botão Voltar ao Topo

function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = () => {
    const btnGoTop = document.querySelector(".btn-go-top");
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        btnGoTop.style.display = "block";
    } else {
        btnGoTop.style.display = "none";
    }
};