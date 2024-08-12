const preguntas= ["Juan Lucas, Vilma, Santiago y Bobby son personajes de la obra",
    "Autor de “El zorro de arriba y el zorro de abajo”:",
    "El protagonista de “El mundo es ancho y ajeno” es:",
    "¿Qué poeta escribió: “Hay golpes en la vida, tan fuertes… ¡Yo no sé!. Golpes como del odio de Dios; como si ante ellos, la resaca de todo lo sufrido se empozara en el alma… ¡Yo no sé!” ?",
    "“5 metros de poemas” pertenece al escritor vanguardista…",
    "Revista literaria fundada en Lima por el escritor peruano Abraham Valdelomar en 1916:",
    "Cual de estas obras no es de Blanca Varela:"

]

const opciones=[
    ["Un mundo para Julius.","La tía Julia y el escribidor.","Los ríos profundos."],
    ["Mario Vargas Llosa.","Blanca Varela.","José María Arguedas"],
    ["Rosendo Maqui.","Ciro Alegria.","Jacinto Prieto."],
    ["César Vallejo.", "Julio Ramón Ribeyro","José María Eguren."],
    ["César Vallejo.","José Santos Chocano","Carlos Oquendo de Amat."],
    ["El Comercio.","Colónida","Amauta."],
    ["Canto Villano.","Concierto Animal.","Tala."]
];

const claves =[
    [5,0,0],
    [0,0,5],
    [5,0,0],
    [5,0,0],
    [0,0,5],
    [0,5,0],
    [0,0,5],
]

const imagenes=[
    "https://www.bnp.gob.pe/wp-content/uploads/2022/04/UMPJ3.jpg",
    "https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/12/Dibujo-Alejandro-Galindo.png",
    "https://www.dialogoshumanos.pe//wp-content/uploads/2021/11/PLANTILLAS-DIA%CC%81LOGOS-47.png",
    "https://www.telesurtv.net/__export/1521137895000/sites/telesur/img/multimedia/2018/03/15/vallejo.jpg_1689854195.jpg",
    "https://i0.wp.com/www.vallejoandcompany.com/wp-content/uploads/2015/04/lado.jpg",
    "https://diariocorreo.pe/resizer/4BVtQ4NDS7E9VTT5k4PI23Yf0F4=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KWCW45X2JVE6PKBU47JHND66DU.jpg",
    "https://elcomercio.pe/resizer/cXShTvjztwDx_U7fE5gWvTItrMA=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/A6JEF3JRCZAKFG5X6UACZAOXNQ.png"
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

mostrarPregunta();






