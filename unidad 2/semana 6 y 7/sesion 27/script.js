function suma(a, b) {
    result = a+b
    return result;
}

var result= suma(2, 3)
console.log(result)

function multiplica(x, y){
    result = x*y
    return result;
}

var result= multiplica(5, 3)
console.log(result)

function potencia(f){
    result = Math.pow(f, 2)
    return result;
}

var result= potencia(6)
console.log(result)

function promedio(a, b, c){
    result = (a+b+c)/3
    return result;
}

var result=promedio(20, 18, 19)
console.log(result)

function descontar(precio, descuento){
    result=precio - ((precio*descuento)/100)
    return result;
}

var result=descontar(120, 30)
console.log(result)

const precio = 200
const descuento = 20

