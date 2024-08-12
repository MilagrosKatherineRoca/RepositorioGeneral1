// OPERADORES MATEMÁTICOS
var a = 20;
var b = 5.5;
var c = 10;
"a + b = " + (a + b);
"a - c = " + (a - c);
"b * c = " + (b * c);
"a / b = " + (a / b);
"a % c = " + (a % c);
"c**5 = " + (c**5);

// No confundir las siguientes operaciones
"a + b * c = " + (a + b * c);
"(a + b) * c = " + ((a + b) * c);
// Recordar a las chicas el orden de resolución de ejercicios combinados


// OPERADORES DE COMPARACIÓN
8 == "8";  // Para JS no hay diferencia entre un string con valor 8 y el número 8
8 === "8";  // Para validar que no solo tienen el mismo valor sino también tipo, se utiliza ===
8 != "8";  // Lo mismo ocurre con el operador distinto a simple
8 !== "8";  // Es mejor utilizar el operador distinto a doble

// OPERADORES LÓGICOS
"true && true = " + (true && true);
"true && false = " + (true && false);
"true && true && false = " + (true && true && false);
"false && false = " + (false && false);

"true || true = " + (true || true);
"true || false = " + (true || false);
"true || true || false = " + (true || true || false);
"false || false = " + (false || false);

// Comentar que también se pueden combinar
"true && (true || false) = " + (true && (true || false));
"false || (true && false) = " + (false || (true && false));