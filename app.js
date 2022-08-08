console.log("js loaded"); //test

// global variables - spin button, get random number(1-10) 
// playGame function that s random number in each of the "lanes" when spin btn is clicked
// have each random number correspond to a picture and point system
// use a class for pictures and point system
// how to "win"
// pop ups for certain winning combos
// reset button


const spinBtn=document.getElementById("spin");



// generate a random number between 0&9
function randomNumber(){ 
    return Math.floor(Math.random()*10)
}
// finds s lanes in html
function findElement(id){
    return document.getElementById(id);
}



class Spin{
    constructor(num1,num2,num3){

    this.lane1=num1;
    this.lane2=num2;
    this.lane3=num3;
    
    }
}
let combo = new Spin(randomNumber(),randomNumber(),randomNumber());

spinBtn.addEventListener("click",laneDisplay());

function laneDisplay(){
    const display1 = findElement("display1");
    const display2 = findElement("display2");
    const display3 = findElement("display3");
   
    display1.innerHTML = `${combo.lane1}`;
    display2.innerHTML = `${combo.lane2}`;
    display3.innerHTML = `${combo.lane3}`;
}













