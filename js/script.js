const hipodoge = document.querySelector('#hipodoge');
const capipepo = document.querySelector('#capipepo');
const ratigueya = document.querySelector('#ratigueya');
let spanMascotaJugador = document.querySelector('#mascota-jugador')
let spanMascotaEnemigo = document.querySelector('#mascota-enemigo')
let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.querySelector('#boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonAgua = document.querySelector('#boton-agua')
        botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.querySelector('#boton-tierra')
        botonTierra.addEventListener('click', ataqueTierra)
    
        let botonFuego = document.querySelector('#boton-fuego')
        botonFuego.addEventListener('click', ataqueFuego)

}

function seleccionarMascotaJugador(){
    
    if(hipodoge.checked == true){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if(capipepo.checked == true){
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(ratigueya.checked == true){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else{alert('Por favor selecciona una mascota')
}
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
        

    if (mascotaAleatorio == 1) {
        //Hipodogue
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (mascotaAleatorio == 2) {
        //capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else{
        //Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio ==1){
        ataqueEnemigo = "FUEGO"
    }
    else if (ataqueAleatorio==2){
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio==3){
        ataqueEnemigo= "TIERRA"
    }

    crearMesajeAtaque()
}

function crearMesajeAtaque(){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', las mascota del enemigo atacó con ' + ataqueEnemigo + '- PENDIENTE'

    seccionMensajes.appendChild(parrafo)
}


window.addEventListener('load', iniciarJuego)