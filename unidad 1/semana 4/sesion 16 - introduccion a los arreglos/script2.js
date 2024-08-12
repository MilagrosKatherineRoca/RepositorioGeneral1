//Variables
const preguntas = ["¿Con qué frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuántos vasos de agua (200mL) bebes al día?<br>No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de frutas y verduras consumes diariamente?"];

const opciones = [
    ["3 ó más veces por semana",
        "Entre 1 y 2 veces a la semana",
        "Al menos 4 veces al mes"],
    ["Al menos 8 vasos al día",
        "Entre 5 y 8, depende del día",
        "Cuando me acuerdo"],
    ["5 ó más",
        "2 a 4",
        "Al menos 1 vez al día"],
];

const clave =[
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3],
];

let i= 0;
let puntaje= 0;

//funciones

function mostrarPreguntas(){
    document.getElementById('contenido').innerHTML=`
        <p class="opcion">${preguntas[i]}</p>  

    `
}
mostrarPreguntas();


console.log(preguntas[1])
console.log(opciones[1][0])