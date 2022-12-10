function comprobar(valor) {

    if (valor == true) {
        document.getElementById('respuesta').innerText = 'Felicitaciones, has seleccionado la opción correcta'
        document.getElementById('texto-inicial').id = 'ganador'

    } else {
        document.getElementById('texto-inicial').id = 'perdedor'
        document.getElementById('respuesta').innerText = 'Pokémon incorrecto, la respuesta es: excadrill'
    }
    return cambiar()
}

function cambiar() {
    var source = document.getElementById('imagen').src

    if (source.includes('negro.jpg')) {
        return '../img/pcolor.jpg'
    }
    if (source.includes('color.jpg')) {
        return '../img/pnegro.jpg'
    }
}

function reiniciar() {
    return cambiar()
}