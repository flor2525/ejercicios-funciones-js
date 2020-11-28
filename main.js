// EJERCICIO 1 - sumar a y b

// const sumar = (num1, num2) => num1 + num2;

//     const sumar = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
//  };

//  pruebo si mi función funciona 

//  console.log(sumar(2,3));
//  console.log(sumar(1.2,3.4));
//  console.log(sumar(3,-5));


// EJERCICIO 2 - restar a y b

// const restar = (num1, num2) => num1 - num2;

// console.log(restar(3,2));
// console.log(restar(10,5.5));
// console.log(restar(3,5));

// EJERCICIO 3 - multiplicar a x b

// const multiplicar = (num1, num2) => num1 * num2;

// console.log(multiplicar(2,3));
// console.log(multiplicar(4,0.5));


// EJERCICIO 4 - dividir a / b

// const dividir = (num1, num2) => num1 / num2;

// console.log(dividir(2,3));
// console.log(dividir(1.2,3.4));
// console.log(dividir(3,-5));


// EJERCICIO 5 - EsPar - el procentaje es el residuo (el restante de una división)

// const esPar = (num) => {
//     if (num % 2 === 0){
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(esPar(5));

// EJERCICIO 6 - esImpar

// const esImpar = (num) => {
//     if (num % 2 === 0){
//         return false;
//     } else {
//         return true
//     }
// }

// console.log(esImpar(2));
// console.log(esImpar(3));

// EJERCICIO 7 - calcularAreaTriangulo (base,altura)

// const calcularAreaTriangulo = (num1, num2) => num1 * num2 /2;

// console.log(calcularAreaTriangulo(3,4));
// console.log(calcularAreaTriangulo(5,6));


// EJERCICIO 8 - gritar (str) - poner el argumento entre '' para indicar que es string

// const gritar = (texto) => `¡${texto}!`;

// console.log(gritar('hola'));
// console.log(gritar('aaaaaaa'));

// EJERCICIO 9 - obtenerNombreCompleto

// const obtenerNombreCompleto = (name, apellido) => (`${name} ${apellido}`);

// console.log(obtenerNombreCompleto('Ada','Lovelance'));
// console.log(obtenerNombreCompleto('Flor','Dell'));
// console.log(obtenerNombreCompleto('Juan','Perez'));

// EJERCICIO 10 - saludar (nombre)

// const saludar = (obtenerNombreCompleto) => (`Hola ${obtenerNombreCompleto}, un gusto conocerte`);

// console.log(saludar('Ada'));

// EJERCICIO 11 - saludarGritando - callback function - tengo una funcion que adentro tiene otra que a su vez tiene otras y asiii

// const saludarGritando = (obtenerNombreCompleto, saludar, gritar) => 
// gritar(saludar(obtenerNombreCompleto ('Flor', 'Dell')));


// console.log (saludarGritando(obtenerNombreCompleto, saludar, gritar));

// EJERCICIO 12 - obtenerDatosDeCiudad (nombre, población y país)

// const obtenerDatosDeCiudad = (nombre, poblacion, pais) => (`La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`);

// console.log(obtenerDatosDeCiudad('Alta Gracia', 49000, 'Argentina'));

// EJERCICIO 13 - convertirHorasEnSegundos

// const convertirHorasEnSegundos = (num) => num * 3600;

// console.log(convertirHorasEnSegundos(1));
// console.log(convertirHorasEnSegundos(3));
// console.log(convertirHorasEnSegundos(4.5));

// EJERCICIO 14 - calcularPerimetroRectangulo

// const calcularPerimetroRectangulo = (ancho, alto) => (ancho * 2) + (alto * 2);

// console.log(calcularPerimetroRectangulo(3.2,5));
// console.log(calcularPerimetroRectangulo(10,20));

// EJERCICIO 15 - calcularPorcentaje

// const calcularPorcentaje = (numero, porcentaje) => (numero * porcentaje) / 100;

// console.log(calcularPorcentaje(100, 15));
// console.log(calcularPorcentaje(10, 50));
// console.log(calcularPorcentaje(200, 10));

// EJERICIO 16 - sumarPorcentaje . es una callback function

// sumarPorcentaje = (numero, porcentaje) => numero + calcularPorcentaje(numero, porcentaje);


// console.log(sumarPorcentaje(100, 15));
// console.log(sumarPorcentaje(10, 50));
// console.log(sumarPorcentaje(200, 10));

// EJERCICIO 17 - restarPorcentaje

// restarPorcentaje = (numero, porcentaje) => numero - calcularPorcentaje(numero, porcentaje);

// console.log(restarPorcentaje(100, 15));
// console.log(restarPorcentaje(10, 50));
// console.log(restarPorcentaje(200, 10));

// EJERCICIO 18 - calcularFPS 

// const calcularFPS = (cuadros, minutos) => cuadros * 60 * minutos;

// console.log(calcularFPS(1,1));
// console.log(calcularFPS(10,2));
// console.log(calcularFPS(2,3));

// EJERCICIO 19 - obtenerCompetencia (a, b)

// const obtenerCompetencia = (a, b) => `${a} vs ${b}`;

// console.log(obtenerCompetencia('Javascript', 'Python'));
// console.log(obtenerCompetencia('Coca', 'Pepsi'));
// console.log(obtenerCompetencia('Perro', 'Gato'));

// EJERCICIO 20 - generarEmail

// const generarEmail = (usuario, dominio) => `${usuario}@${dominio}.com`;

// console.log(generarEmail('adalovelace', 'gmail'));

// EJERCICIO 21 - esMayorDeEdad

// const esMayorDeEdad = (edad) => {
//     if (edad >= 18) {
//         return true
//     } else {
//         return false
//     }
// };


// console.log(esMayorDeEdad(15));
// console.log(esMayorDeEdad(18));
// console.log(esMayorDeEdad(27));

// EJERCICIO 22 - haceCalor

// const haceCalor = (temperatura) =>{
//     if (temperatura >= 22) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(haceCalor(12));
// console.log(haceCalor(22));
// console.log(haceCalor(32));

// EJERCICIO 23 - haceFrio

// const haceFrio = (temperatura) => {
//     if (temperatura <= 12) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(haceFrio(12));
// console.log(haceFrio(22));
// console.log(haceFrio(3));
// console.log(haceFrio(-2));


// EJERCICIO 24 -  calcularPuntaje


// const uno = prompt('Uno');
// const dos = prompt('Dos');
// const tres = prompt('Tres');

// const calcularPuntaje = (facil, normal, dificil) => {
// const ejercicio1 = facil * 3;
// const ejercicio2 = normal * 5;
// const ejercicio3 = dificil * 10;
//  return ejercicio1 + ejercicio2 + ejercicio3;

//  }

// const resultado = calcularPuntaje (uno, dos, tres);
//  console.log(resultado); 

//  EJERCICIO 25 - aceptaDeposito

aceptaDeposito = (monto) => {
    if (monto % 10 === 0){
        return true
    } else {
        return false
    }
};

console.log(aceptaDeposito(440));
console.log(aceptaDeposito(123));
console.log(aceptaDeposito(500.50));
console.log(aceptaDeposito(1000));

    