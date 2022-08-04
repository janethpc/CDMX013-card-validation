const validator = {
  // inputValue entra como un array ordenando y depurado

 isValid : function(inputValue){

  let value = Array.from(inputValue).reverse();

    for (var i=0; i<value.length; i++){
      
      if (i%2 != 0){ // si el indice esta en posicion par
        value[i] = value[i] * 2; //multiplica el valor en el indice x 2
      

        if (value[i] > 9){ //si el valor del indice es mayor a 9
          value[i] = parseInt(String(value[i]).charAt(0)) + parseInt(String(value[i]).charAt(1))
              //el valor del indice es igual a la suma de sus digitos (12 = 1 +2 = 3)
              
          
        }

      }
    
    }

    var sum = 0;

    for (var j=1; j<value.length; j++){
      sum += parseInt(value[j]); //va sumando los valores del indice (mientra parsea el array)
      console.log(sum);
    }

    sum = sum * 9 % 10; //el valor se multiplica por 9 y se divide entre 10

    if (value[0] == sum){ //se compara el valor en indice cero con SUM 
      
      return true
    }else{
      
      return false
    }

},

  maskify : function(inputValueString){


      let cardNumString = Array.from(inputValueString); //atrapar el value en una variable por siaca, sigue siendo un array

      let stringLength = cardNumString.length - 4; // le sacamos 4 caracteres para enmascarar
  
      if (stringLength <= 0) console.log("error, no puede haber tarjeta con menos numeros"); //la cadena no puede dar menor o igual a cero
      document.getElementById("noNumber").innerHTML= "error, no puede haber tarjeta con menos numeros";
      setTimeout(() => {
        document.getElementById("noNumber").innerHTML= "";
      }, 2000);

      for (let i = 0; i <stringLength; i++) {
          cardNumString[i] = '#'; //for que recorre cardNumString las veces que stringLenght y cambia el valor a # 
      }
  
      return cardNumString.join(''); //.join me permite unir los elementos de un array en un string
  },


}



  
  export default validator;

