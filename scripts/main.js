'use strict';
const introduce = document.querySelector('#escribe');
const btn = document.querySelector('.btn');
const number = document.querySelector('.number');
const text = document.querySelector('.text');
const textIn = document.querySelector('.textIn');

//funnction random
function dameElRandom(num){
    return Math.floor(Math.random()*num);       
};
const resultadoRandom = dameElRandom(100);
console.log(resultadoRandom);

//boton prueba
function pulsar(evento){
   introduce.innerHTML =  introduce.value;
btn.addEventListener('click', pulsar);

 }
 console.log(pulsar)
/////////////////////////////////////////

if(introduce === resultadoRandom){
    console.log("haz ganado")
}


 
 



// 3. al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola
// 4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el
// feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
// 5. actualizar el contador de intentos cada vez que el usuario pruebe
// ¡A jugar!