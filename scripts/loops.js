document.write("<h2>For Loops</h2>");
// document.write("<h1>Table of 2!</h1>");
//activity 1
//Table of 2
// const multplications = 2
// let Table = 10

// for (let i = 0; i <= Table; i++) {
//     let result = multplications * i;
//     document.write(`<p> 2 x ${i} = ${result}</p>`);
// }

//The for loop :D
for(let i = 0; i <10; i ++){
    console.log("using for loops");
}

//activity 4
for(let i = 2; i <31; i+= 3){
    console.log(i);
}

//Mini challenge
//create a loop that displays the numbers from 1 to 100 and
//display a mesage "I found it" instead of the 50
//acceptance criteria:
//1. the loop needs to be inside of a function

function loopFrom1To100(){
    for (let i = 1; i <= 100; i++) {
        if(i == 50){
            console.log("I found it");
        }
        else{
            console.log(i);
        }
    }
}

// loopFrom1To100();

//interactive multiplication tables
let numberTable = prompt("Enter the number of the table you want to display")
function multiplicationTable(num){
    document.write(`Multi table of ${num}`);
    for (let i = 0; i <= 10; i++) {
        let result = num * i;
        document.write(`<p> ${num} x ${i} = ${result} </p>`);
    }
}
multiplicationTable(numberTable);

//while loop
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++
// }

