import './styles/main.scss';

const splash = document.getElementById("splash");
const menuPrincipal = document.getElementById("menu-principal");
const adivinarNumero = document.getElementById("adivinar-numero");
const pixelArt = document.getElementById("pixel-art");
const memoria = document.getElementById("memoria");
const ahorcado = document.getElementById("ahorcado");

const menuToAdivinarNumeroBtn = document.getElementById("adivinar-numero-btn");
const adivinarBtn = document.getElementById("adivinar-btn");

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

/* ADIVINANZA */
var adivinanzaMsg1 = document.getElementById("adivinar-numero-mensaje1");
var adivinanzaMsg2 = document.getElementById("adivinar-numero-mensaje2");
var adivinanzaMsg3 = document.getElementById("adivinar-numero-mensaje3");

var adivinanzaRespuesta = Math.floor(Math.random() * 100) + 1;
var noDeIntentos = 0;
var nosIntenados = [];

document.addEventListener('DOMContentLoaded', function () {
    adivinarBtn.addEventListener('click', function () {
        var adivinanzaUsuario = document.getElementById("adivinanza").value;

        if (adivinanzaUsuario < 1 || adivinanzaUsuario > 100) {
            alert("Ingresa un número entre 1 y 100");
        }
        else {
            nosIntenados.push(adivinanzaUsuario);
            noDeIntentos += 1;

            if (adivinanzaUsuario < adivinanzaRespuesta) {
                adivinanzaMsg1.textContent = "Tu número intentado es muy bajo";
                adivinanzaMsg2.textContent = "N° de intentos: " + noDeIntentos;
                adivinanzaMsg3.textContent = "Núemros intentados: " + nosIntenados;
            }
            else if (adivinanzaUsuario > adivinanzaRespuesta) {
                adivinanzaMsg1.textContent = "Tu número intentado es muy alto";
                adivinanzaMsg2.textContent = "N° de intentos: " + noDeIntentos;
                adivinanzaMsg3.textContent = "Núemros intentados: " + nosIntenados;
            }
            else if (adivinanzaUsuario == adivinanzaRespuesta){
                adivinanzaMsg1.textContent = "¡HAS GANADO!";
                adivinanzaMsg2.textContent = "El número era: " + adivinanzaRespuesta;
                adivinanzaMsg3.textContent = "Número de intentos: " + noDeIntentos;
                document.getElementById("adivinar-btn").disable = true;
            }
        }
    })
})

// function playAdivinanza() {

// }