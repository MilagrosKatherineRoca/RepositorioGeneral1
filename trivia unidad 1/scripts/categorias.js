var nombre = localStorage.getItem("name");

console.log(nombre)

document.getElementById("nombre").innerHTML=`Hola ${nombre}`