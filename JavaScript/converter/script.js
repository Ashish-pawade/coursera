
function CtoF(){
    var tempCelsius = document.getElementById("c").value;
    var tempFahrenheit = (tempCelsius * 9/5) + 32;
    document.getElementById("f").value = tempFahrenheit;
}

function KgtoP(){
    var Kg = document.getElementById("KG").value;
    var Pounds = Kg * 2.2;
    document.getElementById("Pound").value = Pounds;
}

function KtoM(){
    var K = document.getElementById("K").value;
    var M = K * 0.62137;
    document.getElementById("M").value = M;
}