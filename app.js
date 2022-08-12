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
const scoreBoard=document.querySelector("#total-points")
const newGame=document.getElementById("new-game")



// generate a random number between 0&4
function randomNumber(){ 
    return Math.floor(Math.random()*4)
}
// finds display lanes in html
function findElement(id){
    return document.getElementById(id);

}

const itemsLane1 =["Sun","Tools","Weeds","Gnome"];
const pointsLane1 =[3,1,-2,2];
const itemsLane2 =["Water","Butterfly","Bugs","Gloves"];
const pointsLane2 =[3,2,-1,1];
const itemsLane3 =["Bees","Seeds","Critters","Soil"];
const pointsLane3 =[2,1,-2,1];
const crops=["Tomatoes","Marigolds","Cucumbers","Sunflowers"]
let pointsArray = []

function keepScoreLane1(){
    if (display1.innerHTML === itemsLane1[0]) { //sun
        pointsArray.push(pointsLane1[0]); //3
    } else if (display1.innerHTML === itemsLane1[1]){ //tools
        pointsArray.push(pointsLane1[1]); // 1
    } else if (display1.innerHTML === itemsLane1[2]){ //weeds
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
    } else {pointsArray.push(pointsLane1[3]);} // gloves
}

function keepScoreLane3(){
    if (display3.innerHTML === itemsLane3[0]){ //bees
        pointsArray.push(pointsLane3[0])// 2
    } else if (display3.innerHTML === itemsLane3[1]){ // seeds
        pointsArray.push(pointsLane3[1])// 1
    } else if (display3.innerHTML === itemsLane3[2]){ // critters
        pointsArray.push(pointsLane3[2]) //-2
    } else  pointsArray.push(pointsLane1[3]); //soil 
    
}

function motivate(){
    if (display1.innerHTML === itemsLane1[2] && display2.innerHTML === itemsLane2[2] && display3.innerHTML ===itemsLane3[2]){
        findElement("game-messages").innerHTML="Your garden is dead! Game Over!"
    } else if(display1.innerHTML === itemsLane1[0] && display2.innerHTML === itemsLane2[0] && display3.innerHTML === itemsLane3[1]) {
        findElement("game-messages").innerHTML="Essential items for your garden!";
    } else if(display1.innerHTML === itemsLane1[0] && display2.innerHTML === itemsLane2[1] && display3.innerHTML === itemsLane3[0]){
        findElement("game-messages").innerHTML="Keep going! Your garden is thriving! "
    } else {findElement("game-messages").innerHTML="Get to growing!";}
}

function gameOverCombo(){
    if (display1.innerHTML === itemsLane1[2] && display2.innerHTML === itemsLane2[2] && display3.innerHTML ===itemsLane3[2]){
        display1.innerHTML="-";
        display2.innerHTML="-";
        display3.innerHTML="-";
        window.confirm(`Your garden is infested with ${itemsLane1[2]}, ${itemsLane2[2]}, and ${itemsLane3[2]}\n Oh my!\n Play Again!`);
        pointsArray.splice(0,pointsArray.length);
        findElement("garden-item-1").innerHTML="";
        findElement("garden-item-2").innerHTML="";
        findElement("garden-item-3").innerHTML="";
        findElement("garden-item-4").innerHTML="Your garden is empty!";
        findElement("points-to-crop").innerHTML="Bummer!";
        scoreBoard.innerHTML="";
    }
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
    motivate();
    
    // keeping score by pushing each value associated with them items to an array and using reduce 
    // function to have a running total
    const initialValue = 0;
    let totalPoints = pointsArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    //scoreBoard.innerHTML=totalPoints;
    
    // player status and point up dates
    
    if(totalPoints<=50){
        findElement("garden-item-4").innerHTML="Your garden is empty!"   
    findElement("points-to-crop").innerHTML=`You are ${50-totalPoints} points from your first crop, ${crops[0]}!`
    
    } else if (totalPoints >= 50 && totalPoints < 100){
    findElement("garden-item-4").innerHTML=`Nice! You harvested ${crops[0]}! `
    findElement("points-to-crop").innerHTML=`You are ${100-totalPoints} points from growing ${crops[1]}!`
    
    } else if (totalPoints >=100 && totalPoints < 150){
    findElement("garden-item-3").innerHTML=`You are on a roll! Now you have ${crops[1]}!`
    findElement("points-to-crop").innerHTML=`You are ${150-totalPoints} points from harvesting ${crops[2]}!`
    
    } else if (totalPoints >= 150 && totalPoints < 200){
    findElement("garden-item-2").innerHTML=`You did it! You grew ${crops[2]}`
    findElement("points-to-crop").innerHTML=`You are ${200-totalPoints} points from successfully growing ${crops[3]}!`
    
    } else if (totalPoints > 200 && totalPoints < 209){
    findElement("garden-item-1").innerHTML=`Look at you grow! You did it, you grew ${crops[3]}!`
    findElement("points-to-crop").innerHTML=""
    findElement("crops-grown").innerHTML="You did it! Your garden is complete!";
    pointsArray.splice(0,pointsArray.length);
    findElement("garden-item-1").innerHTML="";
    findElement("garden-item-2").innerHTML="";
    findElement("garden-item-3").innerHTML="";
    findElement("garden-item-4").innerHTML="";
    findElement("game-messages").innerHTML="Nice work!"
    } 

    gameOverCombo();
    
})











