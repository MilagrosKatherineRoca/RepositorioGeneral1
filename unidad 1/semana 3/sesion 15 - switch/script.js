//variables
var clima = "soleado";
var fruta = "manzana";
var diasemana = "martes";

//Estructura switch case

switch(clima){
    case 'lluvioso':
        console.log("Recuerda llevar un paraguas");
        break;
    case 'soleado':
        console.log("viste ligero");
        break;
    case 'nublado':
        console.log("sal a la calle");
        break;
    default:
        console.log("Tipo de clima desconocido");
        break;
}

//si la fruta es manzana el precio es de S/. 5
//si la fruta es platano el precio es de S/. 2
//si la fruta es mango el precio es de S/. 4
//si es cualquier otra fruta no se tiene esa fruta.

switch(fruta){
    case 'manzana':
        console.log("precio = S/.5");
        break;
    case 'platano':
        console.log("precio = S/.2");
        break;
    case 'mango':
        console.log("precio = S/.4");
        break;
    default:
        console.log("no se tiene esa fruta")
        break;
}

switch(diasemana){
    case 'lunes':
        console.log("hoy es lunes");
        break;
    case 'martes':
        console.log("hoy es martes");
        break;
    case 'miercoles':
        console.log("hoy es miercoles");
        break;
    case 'jueves':
        console.log("hoy es jueves");
        break;
    case 'viernes':
        console.log("hoy es viernes");
        break;
    case 'sabado':
        console.log("hoy es sabado");
        break;
    case 'domingo':
        console.log("hoy es domingo");
        break;
    default:
        console.log("no existe ese dia");
        break;
}