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

function pic1(num){
    if(num === 0){
    return "SUN";
} else if (num === 1){
  return "TOOLS";
} else if (num === 2){
  return "SOIL";
} else {return "GNOME";
    }
}

function pic2(num){
    if(num === 0){
    return "WATER";
} else if (num === 1){
  return "BUTTERFLY";
} else if (num === 2){
  return "BUGS";
} else {return "GNOME";
    }

}

function pic3(num){
    if(num === 0){
    return "BEE";
} else if (num === 1){
  return "SEEDS";
} else if (num === 2){
  return "CRITTERS";
} else {return "GNOME";
    }

}

function playGame(){
    const display1 = findElement("display1");
    const display2 = findElement("display2");
    const display3 = findElement("display3");

    display1.innerHTML = `${pic1(randomNumber())}`;
    display2.innerHTML = `${pic2(randomNumber())}`;
    display3.innerHTML = `${pic3(randomNumber())}`;
}

spinBtn.addEventListener("click",playGame());





