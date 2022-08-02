import validator from './validator.js' ;

var datosinf="¡Valida tus datos bancarios! ";

window.onload= function(){
    document.getElementById("buttonValidarCampos").innerHTML= datosinf;
}

//Se añade evento de click para confirmr 
document.getElementById("confirmar").addEventListener("click", getValueInput);

//Función para atrapar el numero de tarjeta que incluye el algoritmo de luhn
function getValueInput() {
  let inputValue = Array.from(document.getElementById("cardnumber").value.replace(/\D/g, '')); 

  let luhn = validator.isValid(inputValue);
  console.log(luhn);

  if(luhn){
    document.getElementById("confirmar").style.background="GreenYellow";
  }else{
    document.getElementById("confirmar").style.background="Lightpink";
  }


};

//evento de teclado para enmascarar

document.getElementById("confirmar").addEventListener("click", maskValueInput);

// funcion para enmascarar el numero
function maskValueInput(){
  
  let inputValueString = Array.from(document.getElementById("cardnumber").value.replace(/\D/g, ''));
  console.log(inputValueString);
  
  let arrayMask =  validator.maskify(inputValueString);
  console.log(arrayMask);
 

  
  document.getElementById("cardnumber").value = arrayMask; 

} 