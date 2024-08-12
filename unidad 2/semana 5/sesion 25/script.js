//ejercicio 1
//imprimir los numeros del uno al 5


/*var numero= 1;

while(numero <=12){
    document.getElementById("resultados").innerHTML +=numero + "<br>";
    numero = numero +2 ;
}*/

/*const paises= ['peru', 'uruguay', 'chile', 'brasil', 'argentina'];
let i=0
while (paises.length > i) {
    console.log(paises[i]);
    i=i+1;
}*/

//Motrar prompt para capturar nombre//
/*while (nombre <=5){
    document.getElementById("resultado").innerHTML +=nombre + "<br>";
    nombre = nombre +1;
}


function nombre(){
    var nombre = prompt("¿Cual es tu nombre?");
    document.getElementById("resultado").innerHTML=nombre;
}*/
  

let text = "Please locate where 'locate' occurs!";
let index = text.search("locate");
document.getElementById("demo").innerHTML=index;