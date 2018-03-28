

var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');

celciusInput.addEventListener('input', function(){
    var cTemp = parseFloat(celciusInput.value);
    var fTemp = (cTemp * (9/5)) + 32;
    var kTemp = cTemp + 273.15;

});



