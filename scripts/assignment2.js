
function convertToCelsiousToFahrenheit(){
    let temperature = prompt("Enter temperature in celsious to convert it to fahrenheit: ");
    let fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("Faren").innerHTML = `<p> Your ${temperature}°C is equal to ${fahrenheit}°F <p>`;
    return fahrenheit;
}
