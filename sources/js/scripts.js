'use strict'

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