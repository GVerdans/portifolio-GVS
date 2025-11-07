'use strict'

// Funções do Botão Voltar ao Topo
function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = () => {
    const btnGoTop = document.querySelector(".btn-go-top");
    if (window.scrollY >= 100) {
        btnGoTop.classList.add("show");
    } else {
        btnGoTop.classList.remove("show");
    }
};


// Animação de carregamento da página
window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
});



// Hover dos social-icons
document.querySelectorAll(".social-icon").forEach((img) => {
    const originalImg = img.src;
    let hoverImg = originalImg;

    if (img.classList.contains("git-icon")) {
        hoverImg = "./sources/icons/social/Git-rosa.svg";
    }

    if (img.classList.contains("linkedin-icon")) {
        hoverImg = "./sources/icons/social/linkedin-rosa.svg";
    }

    if (img.classList.contains("zap-icon")) {
        hoverImg = "./sources/icons/social/zap-rosa.svg";
    }

    img.addEventListener('mouseenter', function () {
        img.src = hoverImg;
    })

    img.addEventListener('mouseleave', function () {
        img.src = originalImg;
    })
})