console.log("js loaded"); //test

// global variables - spin button, get random number(1-10) 
// playGame function that s random number in each of the "lanes" when spin btn is clicked
// have each random number correspond to a picture and point system
// use a class for pictures and point system
// how to "win"
// pop ups for certain winning combos
// reset button


const spinBtn=document.getElementById("spin");
const scoreBoard=document.querySelector(".scoreboard");


// generate a random number between 0&4
function randomNumber(){ 
    return Math.floor(Math.random()*4)
}
// finds s lanes in html
function findElement(id){
    return document.getElementById(id);

}

const itemsLane1 =["Sun","Tools","Soil","Gnome"];
const pointsLane1 =[3,1,1,2];
const itemsLane2 =["Water","Butterfly","Bugs","Gnome"];
const pointsLane2 =[3,2,-1,2];
const itemsLane3 =["Bees","Seeds","Critters","Gnome"];
const pointsLane3 =[2,1,-2,2];





//  function addPoints(points){
//     return totalPoints += points;
//  }


// function removePoints(points){`
//         return totalPoints -= points;
// }

let pointsArray = []

function keepScore(){
    if (display1.innerHTML === itemsLane1[0]) { //sun
        pointsArray.push(pointsLane1[0]); //3
    } else if (display1.innerHTML === itemsLane1[1]){ //tools
        pointsArray.push(pointsLane1[1]) // 1
    } else if (display1.innerHTML === itemsLane1[2]){ //soil
        pointsArray.push(pointsLane1[2]) //1
    } else {pointsArray.push(pointsLane1[3]); //gnome 2
    
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

    keepScore(); 
    const initialValue = 0;
    let sumWithInitial = pointsArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    
    scoreBoard.innerHTML=sumWithInitial;
    
    
})



console.log(pointsArray);



 
 


























