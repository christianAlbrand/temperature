
let hungerLevel = 50;
let foodAmount =10;
const hungerDisplay = document.getElementById("hungerLevel");

function feedPet(){
    console.log("Feeding the pet: ");
    hungerLevel -= foodAmount;
    //hungerLevel = hungerLevel - foodAmount;
    //create a variable foodAmount;
    //discount the foodAmount to the hunger;
    if(hungerLevel>=0){
        hungerDisplay.innerHTML=hungerLevel;
    }else{
        alert("Your pet is overfeed!!");
        hungerLevel=0;
    }
}