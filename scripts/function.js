console.log("funtion");

//define a function with the name sayhello
function sayhello(){
    console.log("Hello");
}

sayhello();//Trigger the function

// function with parameters
function greet(name){
    console.log("Welcome to the system " + name);
}

greet("Christian");
greet("Marc");

//function that return values
function addNumbers(a,b){
    return a+b;
}

let result = addNumbers(3,5);
result = addNumbers(6,8);
console.log(result);

//function with default parameters
function greetings(name="Samantha"){
    console.log("Hello to " + name);
}

greetings("Ava");

//challenge 1
function doubleNumber(number){
    let result = number * 2;
    console.log(result);
    return result;
}
doubleNumber(4);

//challenge 2
function combineNames(firstName = "Unkown", lastName = "Unkown"){
    let userName = firstName + " " + lastName;
    console.log(userName);
    return userName;
}
combineNames();

//challenge 3
function convertToSeconds(minuts){
    let seconds = minuts * 60;
    console.log(minuts + " minutes" + " = " + seconds + " seconds");
    return seconds;
}
convertToSeconds(10);

function sayHello2(){
    let name = prompt ("Enter your name: ");
    document.getElementById("result").innerHTML = `<p> Welcome to the system ${name} </p>`;
}

sayHello2();