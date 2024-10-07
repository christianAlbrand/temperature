//Arays
let car1 = "BMW";
let car2 = "Mercedes";
let car3 = "Nissan";
//Creating arrays
let cars = ["BMW", "Mercedes","Nissan","Toyota"];
let carsTwo = new Array("BMW", "Tesla", "Ford");
//Create empty array and then pass some values
let carsThree = [];
carsThree[0] = "Kia";
carsThree[1] = "Volvo";

// console.log(cars[3]);
// console.log(carsTwo[1]);
// console.log(carsThree[0]);

// console.log(cars);
// cars[2] = "Pontiac"
// console.log(cars);
// console.log(cars.length);
// cars.push("Chevrolet");
// console.log(cars);
// cars.pop()
// console.log(cars);

//Arrays and loops
// cars.push("Pontiac");
// cars.push("Chevrolet");
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

let color = ["Red", "Black", "Blue", "Yellow"]
let image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYJJtcDVHnbjuBDvgaycCm7mBA8gg0jk4MQ&s","https://vehicle-images.dealerinspire.com/stock-images/chrome/9e3a3374c5684f8d19765b3a170a7cfe.png","https://ms-prd-nna.use.mediaserver.heliosnissan.net/iris/iris?resp=png&bkgnd=transparent&pov=E01&w=8667&h=8667&x=797&y=222&height=326&width=578&vehicle=8_N18&paint=B51&fabric=K&brand=nisnna&sa=1_B,2_DT,4_A,5_L,6_F,7_Z,11_E,12_U,13_B,17_C,18_A,SHADOW_ON,PI_ON,PE_ON,2024","https://imgd.aeplcdn.com/1200x900/ec/4b/5E/19413/img/m/Toyota-GT86-special-Front-view-54187_ol.jpg?t=160058840&t=160058840"]

for (let i = 0; i < cars.length; i++) {
    document.getElementById("result").innerHTML+=`
        <div class="cars">
            <h6>Car ID: ${i}</h6>
            <img src="${image[i]}"/>
            <p>Car: ${cars[i]}</p>
            <p>Color: ${color[i]}</p>
        </div>
    `
    
}