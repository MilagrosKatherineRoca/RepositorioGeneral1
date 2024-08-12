var puntaje = localStorage.getItem("puntaje")

if(puntaje > 30){
    document.getElementById("puntaje"). innerHTML = "Tu puntaje es " + puntaje + ", ¡Felicitaciones!"
}
else if(puntaje > 20){
    document.getElementById("puntaje"). innerHTML = "Tu puntaje es " + puntaje + ", ¡Muy bien!"
}
else if(puntaje > 10){
    document.getElementById("puntaje"). innerHTML = "Tu puntaje es " + puntaje + ", ¡Suerte para la proxima!"
}

