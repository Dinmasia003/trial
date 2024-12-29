"use strict";



let loveScore = Math.random() *100;
loveScore=Math.round(loveScore) + "%" ;
// console.log(loveScore + "%")


const calculator = document.querySelector('.calculator');

calculator.addEventListener("click",()=>{
   calculator.textContent = loveScore

}) 
if(loveScore >=70+'%'){
  alert('You are perfect for each other')
}
else{
  alert('Your love score is '+ loveScore)
}

// personOne= documentment.getElementsByClassName(".personOne"); personTwo= document.getElementsByClassName(".personTwo");
//  if (personOne && personTwo ===""){calculator()="Please input both names"};
//   else {calculator() = loveScore}