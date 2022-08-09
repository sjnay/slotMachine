console.log("js loaded"); //test

// global variables - spin button, get random number(1-10) 
// playGame function that s random number in each of the "lanes" when spin btn is clicked
// have each random number correspond to a picture and point system
// use a class for pictures and point system
// how to "win"
// pop ups for certain winning combos
// reset button


const spinBtn=document.getElementById("spin");



// generate a random number between 0&4
function randomNumber(){ 
    return Math.floor(Math.random()*4)
}
// finds s lanes in html
function findElement(id){
    return document.getElementById(id);

}

const itemsLane1 =["Sun","Tools","Soil","Gnome"]
const pointsLane1 =[3,1,1,2]
const itemsLane2 =["Water","Butterfly","Bugs","Gnome"]
const pointsLane2 =[3,2,-1,2]
const itemsLane3 =["Bees","Seeds","Critters","Gnome"]
const pointsLane3 =[2,1,-2,2]





function playGame(){
    
    const display1 = findElement("display1");
    const display2 = findElement("display2");
    const display3 = findElement("display3");

    display1.innerHTML = `${itemsLane1[randomNumber()]}`;
    display2.innerHTML = `${itemsLane2[randomNumber()]}`;
    display3.innerHTML = `${itemsLane3[randomNumber()]}`;
}




let totalPoints=0;

function addPoints(points){
   totalPoints += points;    
}

function removePoints(points){
    totalPoints -= points;
}

spinBtn.addEventListener("click",playGame());

document.querySelector(".game-overview").innerHTML = keepScore();












