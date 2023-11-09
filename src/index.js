import './styles/main.scss';

const splash = document.getElementById("splash");
const menuPrincipal = document.getElementById("menu-principal");
const adivinarNumero = document.getElementById("adivinar-numero");
const pixelArt = document.getElementById("pixel-art");
const memoria = document.getElementById("memoria");
const ahorcado = document.getElementById("ahorcado");

const menuToAdivinarNumeroBtn = document.getElementById("adivinar-numero-btn");

window.onload = function () {
    hideAllSections();
    setTimeout(() => {
        hideSplahs();
    }, 3000);
}

function hideSplahs() {
    splash.classList.add("hidden");
    menuPrincipal.classList.remove("hidden");
}

function hideAllSections() {
    menuPrincipal.classList.add("hidden");
    adivinarNumero.classList.add("hidden");
    pixelArt.classList.add("hidden");
    memoria.classList.add("hidden");
    ahorcado.classList.add("hidden");
}

//Menú principal to adivina el número
document.addEventListener('DOMContentLoaded', function () {
    menuToAdivinarNumeroBtn.addEventListener('click', function () {
        menuPrincipal.classList.add("hidden");
        adivinarNumero.classList.remove("hidden");
        // loadDreams();
    });
});