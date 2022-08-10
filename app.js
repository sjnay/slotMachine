console.log("js loaded"); //test

// global variables - spin button, get random number(1-10) 
// playGame function that s random number in each of the "lanes" when spin btn is clicked
// have each random number correspond to a picture and point system
// use a class for pictures and point system
// how to "win"
// pop ups for certain winning combos
// reset button

//global variables
const spinBtn=document.getElementById("spin");
const scoreBoard=document.querySelector(".scoreboard");


// generate a random number between 0&4
function randomNumber(){ 
    return Math.floor(Math.random()*4)
}
// finds display lanes in html
function findElement(id){
    return document.getElementById(id);

}

const itemsLane1 =["Sun","Tools","Soil","Gnome"];
const pointsLane1 =[3,1,1,2];
const itemsLane2 =["Water","Butterfly","Bugs","Gnome"];
const pointsLane2 =[3,2,-1,2];
const itemsLane3 =["Bees","Seeds","Critters","Gnome"];
const pointsLane3 =[2,1,-2,2];

let pointsArray = []

function keepScoreLane1(){
    if (display1.innerHTML === itemsLane1[0]) { //sun
        pointsArray.push(pointsLane1[0]); //3
    } else if (display1.innerHTML === itemsLane1[1]){ //tools
        pointsArray.push(pointsLane1[1]); // 1
    } else if (display1.innerHTML === itemsLane1[2]){ //soil
        pointsArray.push(pointsLane1[2]); //1
    } else {pointsArray.push(pointsLane1[3]);} //gnome
}

function keepScoreLane2(){
    if (display2.innerHTML === itemsLane2[0]){ //water
        pointsArray.push(pointsLane2[0]); //3
    } else if (display2.innerHTML === itemsLane2[1]){ //butterfly
        pointsArray.push(pointsLane2[1]); //2
    } else if (display2.innerHTML === itemsLane2[2]){ //bugs
        pointsArray.push(pointsLane2[2]); // -1
    } else {pointsArray.push(pointsLane1[3]);} // gnome
}

function keepScoreLane3(){
    if (display3.innerHTML === itemsLane3[0]){ //bees
        pointsArray.push(pointsLane3[0])// 2
    } else if (display3.innerHTML === itemsLane3[1]){ // seeds
        pointsArray.push(pointsLane3[1])// 1
    } else if (display3.innerHTML === itemsLane3[2]){ // critters
        pointsArray.push(pointsLane3[2]) //-2
    } else  pointsArray.push(pointsLane1[3]); //gnome 
    
}

function gameOver(){
    if (display1.innerHTML === itemsLane1[2] && display2.innerHTML === itemsLane2[2] && display3.innerHTML ===itemsLane3[2]){
        findElement("game-messages").innerText =  "Aw shucks! Your garden is dead! Game over!"
    } else {findElement("game-messages").innerText =""};

}

spinBtn.addEventListener("click",function(event){
    event.preventDefault()

    const display1 = findElement("display1");
    const display2 = findElement("display2");
    const display3 = findElement("display3");

    display1.innerHTML = `${itemsLane1[randomNumber()]}`;
    display2.innerHTML = `${itemsLane2[randomNumber()]}`;
    display3.innerHTML = `${itemsLane3[randomNumber()]}`;

    keepScoreLane1(); 
    keepScoreLane2();
    keepScoreLane3();
    gameOver();
    const initialValue = 0;
    let sumWithInitial = pointsArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    
    scoreBoard.innerHTML=sumWithInitial;
    
    
})



console.log(pointsArray);



 
 


























