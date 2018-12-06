'use strict';
const introduce = document.querySelector('#introduce');
const btn = document.querySelector('.btn');
const number = document.querySelector('.number');
const text = document.querySelector('.text');
const textIn = document.querySelector('.textIn');

//funnction random
function getRandom(num){
    return Math.floor(Math.random()*num);       
};
const resultRandom = getRandom(100);
console.log(resultRandom);


function test(e){
    console.log(introduce.value)

}
//boton prueba
btn.addEventListener('click', test)



/////////////////////////////////////////

if(introduce === resultRandom){
    console.log("haz ganado")
}



// 3. al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola
// 4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el
// feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
// 5. actualizar el contador de intentos cada vez que el usuario pruebe
// ¡A jugar!