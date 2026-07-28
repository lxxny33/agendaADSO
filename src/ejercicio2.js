
let nombre_completo= "Keiner Johan Moreno Corpas"
const  ficha= "3412785"

const notas =[2,5, 3,0, 4.0]
const suma= notas.reduce((acumulador, notas) => acumulador + notas, 0);
const promedio =  suma / notas.length;
const estado = promedio >= 3.5 ? "Aprobado" : "No aprobado";

console.log("==================")
console.log("SISTEMA DE NOTAS SENA");
console.log("==================");
console.log("Aprendiz" + nombre_completo);  
console.log("Ficha " + ficha);
console.log("Notas " + notas);
console.log("==================");
console.log("Promedio " + promedio);
console.log("Estado " + estado);








