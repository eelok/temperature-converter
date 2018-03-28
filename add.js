

var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');

function celciusToFahrenheitAndKelvin(){
    var cTemp = parseFloat(celciusInput.value);
    var fTemp = (cTemp * (9/5)) + 32;
    var kTemp = cTemp + 273.15;
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
}

function fahrenheitTocelciusAndKelvin(){
    var fTemp = parseFloat(fahrenheitInput.value);
    var cTemp = (fTemp - 32) * (5/9);
    var kTemp = (fTemp + 459.67) * (5/9);
    kelvinInput.value = kTemp;
    celciusInput.value = cTemp;
}

celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitTocelciusAndKelvin);
