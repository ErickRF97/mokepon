const hipodoge = document.querySelector('#hipodoge');
const capipepo = document.querySelector('#capipepo');
const ratigueya = document.querySelector('#ratigueya');
let spanMascotaJugador = document.querySelector('#mascota-jugador')
let spanMascotaEnemigo = document.querySelector('#mascota-enemigo')
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

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

    combate();
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    if(ataqueEnemigo == ataqueJugador){
        crearMesajeAtaque('Empate')
     } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMesajeAtaque("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

        
     } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMesajeAtaque("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

     } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMesajeAtaque("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
     } else{
        crearMesajeAtaque('Perdiste')
        
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

     }
     revisarVidas()
}

    function revisarVidas(){
        if(vidasEnemigo == 0){
            crearMesajeFinal('Felicitaciones GANASTE')
        }
        else if(vidasJugador == 0){
            crearMesajeFinal('Perdiste 🤔')
        }
    
    }



function crearMesajeAtaque(resultado){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    seccionMensajes.appendChild(parrafo)
}

function crearMesajeFinal(resultadoFinal){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultadoFinal

    seccionMensajes.appendChild(parrafo)
}


function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
    }

window.addEventListener('load', iniciarJuego)