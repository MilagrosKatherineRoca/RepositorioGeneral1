let preguntas= ["¿Quién escribió La Divina Comedia?",
    "Autor de “Cien años de soledad”:",
    "Nombre del protagonista de “Los Miserables”:",
    "Obra de culto de Fiodor Dostoyevski",
    " Poeta chileno “Nobel de Literatura” ",
    "¿Qué libro inicia con este párrafo: “Una mañana, al despertar Gregorio Samsa de un sueño agitado, se encontró sobre su cama convertido en un horrible insecto.”?",
    "¿Cuál es la afirmación correcta respecto a Hamlet?"
]

let opciones=[
    ["Dante Alighieri","William Shakespeare","Giovanni Boccacio"],
    ["Mario Vargas Llosa.","Octavio Paz","Gabriel Garcia Marquez"],
    ["Rodion Raskolnikov","Jean Valjean","José Arcadio Buendía"],
    ["Fahrenheit 451", "Crimen y castigo","Almas muertas"],
    ["Pablo Neruda","Juan Rulfo","Vicente Huidobro"],
    ["Noches Blancas","Orgullo y Prejuicio","La metamorfosis"],
    ["El protagonista es el único que sobrevive.","La historia se desarrolla en Francia.","Hamlet quiere matar a su tío Claudio."],
];

const imagenes=[
"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/18140/production/_119542689_gettyimages-640271911.jpg.webp",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbqiSA02avYwcl0eMS7BGLdwuFzWupXjGHw&s",
"https://cdn.culturagenial.com/es/imagenes/captura-12-cke.jpg",
"https://www.lamañana.uy/wp-content/uploads/2021/11/27-OPINION-fiodor-Dostoievski-embajador-de-Rusia.jpg",
"https://www.biografiasyvidas.com/biografia/n/fotos/neruda_2.jpg",
"https://buzos.com.mx//storage/public/fotogaleria/noticias/Importacion/14468/kaf.jpg",
"https://imagenes.muyinteresante.com/files/article_social_75/uploads/2023/07/25/64bff2e793ab1.jpeg"
];

let claves =[
    [5,0,0],
    [0,0,5],
    [0,5,0],
    [0,5,0],
    [5,0,0],
    [0,0,5],
    [0,0,5],
]

var i=0;
 //indice de pregunta
var puntaje = 0;

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("imagen").setAttribute("src",imagenes[i])
}

siguientePregunta();
//mostrarpregunta();
function actualizarPuntaje(opcion) { //1
    var indice = opcion - 1;
     puntaje =puntaje + claves[i][indice]; //se suma el puntaje de la pregunta actual//

    i=i+1; //cambiamos de pregunta

    if (i < preguntas.length) { //si aun no terminamos todas las preguntas
       
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});

function mostrarResultado() { document.getElementById("titulo").innerHTML="Resultado" 
    //document.getElementById("contenido").innerHTML=`<p class="resultado"> Tu puntaje es de ${puntaje}</p> `
    localStorage.setItem("puntaje", puntaje)
    location.href="resultados.html"
    }

mostrarpuntaje();