import './styles/main.scss';

const splash = document.getElementById("splash");
const menuPrincipal = document.getElementById("menu-principal");
const adivinarNumero = document.getElementById("adivinar-numero");
const pixelArt = document.getElementById("pixel-art");
const memoria = document.getElementById("memoria");
const clicker = document.getElementById("clicker");

const menuToAdivinarNumeroBtn = document.getElementById("adivinar-numero-btn");
const adivinarBtn = document.getElementById("adivinar-btn");
const adivinarNumeroToMenu = document.getElementById("adivinanzaToMenu-btn");
const menuToColonizaElPlanetaBtn = document.getElementById("coloniza-el-planeta-btn");
const clickerToMenuBtn = document.getElementById("clickerToMenu-btn");

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
    clicker.classList.add("hidden");
}

//Menú principal to adivina el número
document.addEventListener('DOMContentLoaded', function () {
    menuToAdivinarNumeroBtn.addEventListener('click', function () {
        menuPrincipal.classList.add("hidden");
        adivinarNumero.classList.remove("hidden");
        // loadDreams();
    });
});

//Adivina el número to Menú principal
document.addEventListener('DOMContentLoaded', function () {
    adivinarNumeroToMenu.addEventListener('click', function () {
        adivinarNumero.classList.add("hidden");
        cleanAdivinarNumero();
        menuPrincipal.classList.remove("hidden");
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
            else if (adivinanzaUsuario == adivinanzaRespuesta) {
                adivinanzaMsg1.textContent = "¡HAS GANADO!";
                adivinanzaMsg2.textContent = "El número era: " + adivinanzaRespuesta;
                adivinanzaMsg3.textContent = "Número de intentos: " + noDeIntentos;
                document.getElementById("adivinar-btn").disable = true;
            }
        }
    })
})

function cleanAdivinarNumero() {
    adivinanzaMsg1.textContent = "N° de intentos: 0";
    adivinanzaMsg2.textContent = "Números intentados: 0";
    adivinanzaMsg3.textContent = "";

    adivinanzaRespuesta = Math.floor(Math.random() * 100) + 1;
    noDeIntentos = 0;
    nosIntenados = [];

    var adivinanzaUsuario = document.getElementById("adivinanza")
    adivinanzaUsuario.value = ""
}

//Menú principal to adivina el número
document.addEventListener('DOMContentLoaded', function () {
    menuToColonizaElPlanetaBtn.addEventListener('click', function () {
        menuPrincipal.classList.add("hidden");
        clicker.classList.remove("hidden");
    });
});

//Coloniza el planeta to Menú principal
document.addEventListener('DOMContentLoaded', function () {
    adivinarNumeroToMenu.addEventListener('click', function () {
        adivinarNumero.classList.add("hidden");
        cleanAdivinarNumero();
        menuPrincipal.classList.remove("hidden");
    })
})

//Clicker to Menú principal
document.addEventListener('DOMContentLoaded', function () {
    clickerToMenuBtn.addEventListener('click', function () {
        clicker.classList.add("hidden");
        // cleanAdivinarNumero();
        menuPrincipal.classList.remove("hidden");
        resetGame();
    });
});

var score = 0;
var soldados = 0;
var herramientas = 0;
var vehiculos = 0;
var soldadosPts = 0;
var herramientasPts = 0;
var vehiculosPts = 0;

const planeta = document.getElementById("planeta");
var scoreDisplay = document.getElementById("score");
const soldadosBtn = document.getElementById("soldierButton");
const herramientasBtn = document.getElementById("toolsButton");
const vehiculosBtn = document.getElementById("vehicleButton");
var noSoldados = document.getElementById("noSoldados");
var noHerramientas = document.getElementById("noHerramientas");
var noVehiculos = document.getElementById("noVehiculos");

document.addEventListener('DOMContentLoaded', function () {
    planeta.addEventListener('click', function () {
        score += 1 + (soldados * soldadosPts) + (herramientas * herramientasPts) + (vehiculos * vehiculosPts)

        updateDisplay();

    });
});



function updateDisplay() {
    scoreDisplay.textContent = "Puntos: " + score;

    noSoldados.textContent = "N° soldados: " + soldados;
    noHerramientas.textContent = "N° herramientas: " + herramientas;
    noVehiculos.textContent = "N° vehiculos: " + vehiculos;

    if (score >= 100001) {
        alert("El planeta ha sido colonizado. ¡GANASTE EL JUEGO!");
        resetGame();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    soldadosBtn.addEventListener('click', function () {
        if (score >= 10) {
            soldados += 1;
            score -= 10;
            updateDisplay();
        }

    });
});

document.addEventListener('DOMContentLoaded', function () {
    herramientasBtn.addEventListener('click', function () {
        if (score >= 100) {
            herramientas += 1;
            score -= 100;
            updateDisplay();
        }

    });
});

document.addEventListener('DOMContentLoaded', function () {
    vehiculosBtn.addEventListener('click', function () {
        if (score >= 1000) {
            vehiculos += 1;
            score -= 1000;
            updateDisplay();
        }

    });
});

function startAutoScore() {
    if(score >= 100000){
        setInterval(() => {
            score += soldados;
            score += herramientas * 10;
            score += vehiculos * 100;
            updateDisplay();
        }, 1000);
    }
}


function resetGame() {
    score = 0;
    soldados = 1;
    herramientas = 1;
    vehiculos = 1;
    updateDisplay();
}

startAutoScore();



