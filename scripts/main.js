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
console.log(`El número aleatorio es: ${resultRandom}`);

//contador a 0
let counter = 0;
number.innerHTML = counter;



function test(){
  console.log('click');
  const user = parseInt(introduce.value);
  console.log(resultRandom, user)

  if(user === resultRandom){
      textIn.innerHTML =' ¡¡¡Has ganado!!!';
  }else if(user > resultRandom){
      textIn.innerHTML = 'Te has pasado';
      counter+=1
      number.innerHTML = counter;
  }else{
      textIn.innerHTML = 'Te has quedado corto';
      counter+=1
      number.innerHTML = counter;

  }


}
btn.addEventListener('click', test);







