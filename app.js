let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;



function asinarElemento(elemento, texto){
    let elementoTML = document.querySelector(elemento);
    elementoTML.innerHTML = texto; 
    return; 
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asinarElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Si el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asinarElemento('p', 'El numero es menor')
        } else{
            asinarElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {
    let = numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya llegamos al final 
    if(listaNumerosSecretos.length == numeroMaximo){
        asinarElemento('p', 'Ya son todos los numeros posibles')
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSecretos.includes(numeroGenerado)){
            return generaNumeroSecreto();
        } else{
            listaNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    //indicar mensaje de intervalo de numeros
    asinarElemento('h1', 'Juego del numero secreto');
    asinarElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    //Generar numero aleatorio
    numeroSecreto = generaNumeroSecreto();
    //Iniciar el numero de intentos 
    intentos = 1; 
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    
    condicionesIniciales();
    
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}


condicionesIniciales();


