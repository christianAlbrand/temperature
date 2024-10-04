function convertTemperature(){
    let userTemp = prompt("Enter a temperature to convert it to Fahrenheit or Celsius, indicate it with C or F");
    if(userTemp.includes("C") || userTemp.includes("c")){
        fahrenheit = (parseInt(userTemp) * 9/5) + 32;
        document.getElementById("convTemp").innerHTML = `<p> Your ${userTemp} is equal to ${fahrenheit}°F <p>`;
    } else if(userTemp.includes("F") || userTemp.includes("f")){
        celsius = (parseInt(userTemp) - 32) * 5/9;
        document.getElementById("convTemp").innerHTML = `<p> Your ${userTemp} is equal to ${celsius}°C <p>`;
    }
}