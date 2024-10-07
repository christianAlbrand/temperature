function convertTemperature(){
    let userTemp = prompt("Enter a temperature to convert it to Fahrenheit or Celsius, indicate it with C or F");
    let convTempDiv = document.getElementById("convTemp");
    let tempHeader = document.getElementById("tempHeader");
    if(userTemp.toLowerCase().includes("c")){
        let fahrenheit = (parseInt(userTemp) * 9/5) + 32;
        convTempDiv.innerHTML = `<p> Your ${userTemp} is equal to ${fahrenheit}°F <p>`;
        if(fahrenheit <= 67 ){ //cold temperature
            convTempDiv.style.backgroundColor = "#ADD8E6";
            convTempDiv.innerHTML += `<img src="images/termo.png":/>`;
            tempHeader.innerText = `Cold Temperature`;
        }
        else if (fahrenheit >= 80){ //hot temperature
            convTempDiv.style.backgroundColor = "#FFA500";
            convTempDiv.innerHTML += `<img src="images/termoHot.png":/>`;
            tempHeader.innerText = `Hot Temperature`;
        }
        else{
            convTempDiv.style.backgroundColor = "lightgray";
            convTempDiv.innerHTML += `<img src="images/kindpng_1780516.png":/>`;
            tempHeader.innerText = `Normal Weather`;
        }
    } else if(userTemp.toLowerCase().includes("f")){
        let celsius = (parseInt(userTemp) - 32) * 5/9;
        document.getElementById("convTemp").innerHTML = `<p> Your ${userTemp} is equal to ${celsius}°C <p>`;
        if(celsius <= 19 ){
            convTempDiv.style.backgroundColor = "#ADD8E6";
            convTempDiv.innerHTML += `<img src="images/termo.png":/>`;
            tempHeader.innerText = `Cold Temperature`;
        }
        else if (celsius >= 26){
            convTempDiv.style.backgroundColor = "#FFA500";
            convTempDiv.innerHTML += `<img src="images/termoHot.png":/>`;
            tempHeader.innerText = `Hot Temperature`;
        }
        else{
            convTempDiv.style.backgroundColor = "lightgray";
            convTempDiv.innerHTML += `<img src="images/kindpng_1780516.png":/>`;
            tempHeader.innerText = `Normal Weather`;
        }
    }
}

function convertTemperature2(){
    document.getElementById("tbRange").innerHTML = "";
    document.getElementById("thRange").innerHTML = "";
    let userTempStart = prompt("Enter a temperature to convert it to Fahrenheit or Celsius");
    const userTempStartValue = parseInt(userTempStart);
    let userTempEnd = prompt("Enter a temperature to convert it to Fahrenheit or Celsius");
    const userTempEndValue = parseInt(userTempEnd);
    let scale = prompt("Write C or F");
    for (let i = userTempStartValue; i <= userTempEndValue; i++) {
        if (scale == "c"){
            let fahrenheit = (parseInt(i) * 9/5) + 32;
            const jsonTemp = getColorFromTemp(fahrenheit, "f")
            document.getElementById("tbRange").innerHTML += `
                <tr>
                    <td> ${i} </td>
                    <td> ${fahrenheit} </td>
                    <td class="${jsonTemp["className"]}"> <img src="${jsonTemp["imageSrc"]}" width = "25px"; /> </td> 
                </tr>`;
            document.getElementById("thRange").innerHTML =
            `
            <tr>
                <th> °C </th>
                <th> °F </th>
                <th> Temp </th>
            </tr>
            `;
        } else if (scale == "f"){
            let celsius = (parseInt(i) - 32) * 5/9;
            const jsonTemp = getColorFromTemp(celsius, "c")
            document.getElementById("tbRange").innerHTML += `
            <tr>
                <td> ${i} </td>
                <td> ${celsius} </td>
                <td class="${jsonTemp["className"]}"> <img src="${jsonTemp["imageSrc"]}" width = "25px"; /> </td> 
            </tr>`;
            document.getElementById("thRange").innerHTML =
            `
            <tr>
                <th> °F </th>
                <th> °C </th>
                <th> Temp </th>
            </tr>
            `;
        }
    }
}

function getColorFromTemp(temperature, scale){
    scale = scale.toLowerCase();
    if(scale == "c"){
        if(temperature <= 19 ){// cold temperature
            return {"className": "cold", "imageSrc": "images/cold.png"}; 
        }
        else if (temperature >= 26){// hot temperature
            return {"className": "hot", "imageSrc": "images/hot.png"}; 
        }
        else{
            return {"className": "warm", "imageSrc": "images/warm.png"}; 
        }
    } else if(scale == "f"){
        if(temperature <= 67 ){ //cold temperature
            return {"className": "cold", "imageSrc": "images/cold.png"}; 
        }
        else if (temperature >= 80){ //hot temperature
            return {"className": "hot", "imageSrc": "images/hot.png"}; 
        }
        else{
            return {"className": "warm", "imageSrc": "images/warm.png"};
        }
    }
    
}
