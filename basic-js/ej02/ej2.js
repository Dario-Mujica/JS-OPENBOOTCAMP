/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let name = "Dario";
let age = 28;
let prog = true;
let date = "19/05/1994";
const libro = {
  titulo: "Farenheit 451",
  autor: "Ray Bradbury",
  fecha: new Date(1953,9,19),
  url: "https://es.wikipedia.org/wiki/Fahrenheit_451",
};

console.log("El libro favorito de " + name + " es: \n");
console.log("Titulo...: " + libro.titulo);
console.log("Autor....: " + libro.autor);
console.log("Fecha....: " + libro.fecha);

