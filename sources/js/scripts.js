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