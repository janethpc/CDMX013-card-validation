//import validator from './validator.js';//
import {escribirMensajeConsola} from "./validator.js"; 
//console.log(validator);//

var datosinf="¡Valida tus datos bancarios! ";


document.getElementById("prueba").addEventListener("click", escribirMensajeConsola, false);



window.onload= function(){
    document.getElementById("buttonValidarCampos").innerHTML= datosinf;
}

//funcion para al presionar el button se ejecute la validacion// 
function  CodigoValidacion(cardnumber) {

    var validarTarjeta=cardnumber.value;
    console.log(validarTarjeta);
   
    var numberReverse=validarTarjeta.split("").reverse().toString();
    console.log(numberReverse);
}