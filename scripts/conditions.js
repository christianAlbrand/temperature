console.log("if-statement file");

//---- if statement ----
// if(condition){
//   code to be executed if condition is true
//}

if(1<2){
    console.log(" I am inside the if statement");
}

let studentAge = 45;
let studentAge2 = 45;

if(studentAge == studentAge2){
    console.log("Both are the same");
}

// ------ if-else statement -------
// if(condition){
//     code to be executed if condition is true
// }else{
//     code to be executed if condition is false
// }

if("sam" == "jesus"){
    console.log("sam is equals to jesus");
}else{
    console.log("sam is different than jesus");
}

//challenge
//check is the age is greater than 21
//T: display "you are an adult"
//F: display "you are underage"

let age = 21;
if(age >= 21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

// if-else if-else statements ------
//if(condition1){
//   code to be executed if condition1 is true
//}else if(condition2){
//   code to be executed if condition2 is true
//}else{
//   code to be executed if conditions are false
//}

age = 12;

if(age<13){
    console.log("Child");
}else if(age<20){
    console.log("Teenager");
}else if(age<64){
    console.log("adult");
}else{
    console.log("senior");
}

let viewerAge = prompt("Enter your age");

if(viewerAge < 12){
    console.log("your ticket price is $5");
} else if(viewerAge <= 18){
    console.log("your ticket price is $8");
}else{
    console.log("the ticket costs $10");
}

let temperature = prompt("Enter current temperature: ");

if (temperature < 15){
    console.log("You should wear a jacket");
}else if(temperature < 25){
    console.log("You should wear a sweater");
}else{
    console.log("You should wear a t-shirt");
}

// using logical AND operator &&
age = 10

if(age<13){
    console.log("Child");
}else if(age>=13 && age<=19){
    console.log("Teenager");
}else if(age>=20 && age<=64){
    console.log("adult");
}else{
    console.log("You are older than 64");
}