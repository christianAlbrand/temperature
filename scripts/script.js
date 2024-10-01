console.log("Scripts");

//creating string variables
//keyword nameVariable = value;
let myName = "Jane";
let lastName = "Doe";

console.log(myName);
console.log(lastName);
console.log(myName + " " + lastName);//concatenation

//creating numerical variables
let myAge = 99;
console.log("Age: " + myAge);

let myGrade = 9.5;
console.log(myGrade);

//creating boolean variables (true/false)
let isAdmin = true;
let isStudent = false;
let isProfessor = true;
console.log(isProfessor);

myName = "Christian";
lastName = "Albrand";
//my name is Christian Albrand, and i am 99 years old
console.log("my name is " + myName + " " + lastName + ", and i am " + myAge + " years old.");

let number1 = 10;
let number2 = 5;

//addition
let addition = number1 + number2;
console.log(number1 + " + " + number2 + " = " + addition);
//substraction
let substraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + substraction);
//multiplication
let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + multiplication);
//division
let division = number1 / number2;
console.log(number1 + " / " + number2 + " = " + division);
//CONSTANTS
//keyword constName = value;

const pi = 3.1416;
//pi = 4.5; //we can't modify a constant
console.log(pi);
//calculate the area of circle
const area = pi * (5**2);
console.log(area);
//PROMPT: this is simple way to interact with user
//

let pet = prompt("Insert your pet name: ");
console.log("your pet is: " + pet);