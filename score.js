// Puntuación

let contadorAciertos = 0
let contadorFallos = 0

// Sumar acierto y actualizar puntuación
function sumarAcierto() {
    contadorAciertos++
    updateScore()
}

// Sumar fallo y actualizar puntuación
function sumarFallo() {
    contadorFallos++
    updateScore()
}

// Actualizar puntuación a través del DOM
function updateScore() {

    document.getElementById('iconosAcierto').innerHTML = ""
    document.getElementById('iconosFallos').innerHTML = ""


// Insertar n=contadorAciertos icono de Font-Awesome
    for (let i = 0; i < contadorAciertos; i++) {
        const iconoAcierto = document.createElement('i')
        iconoAcierto.classList.add('fas', 'fa-check')
        document.getElementById('iconosAcierto').appendChild(iconoAcierto)
    }

// Insertar n=contadorFallos icono de Font-Awesome
    for (let i = 0; i < contadorFallos; i++) {
        const iconoFallo = document.createElement('i')
        iconoFallo.classList.add('fas', 'fa-xmark')
        document.getElementById('iconosFallos').appendChild(iconoFallo)
    }
}