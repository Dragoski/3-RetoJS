//Reto 1          
// var nota = [0];
// let apr = 0;
// let des = 0;
// let i = 0;
// while (i <= 9) {
//   nota[i] = prompt(`Ingrese la nota del alumno nro. ${i + 1} :`);
//   switch (true) {
//     case (nota[i] >= 7):
//       apr += 1;
//       break;
//     case (nota[i] < 7):
//       des += 1;
//       break;
//   }
//   i++;
// }

// alert(`La cantidad de alumnos que tienen nota mayor a 7 son ${apr} y los que no son ${des}`)
//Reto 2          

// let n = prompt("Cuantas personas mediran su altura?");
// var i = 0;
// var prom = 0;

// while (i < parseFloat(n)) {
//   let alt = prompt(`Cual es su estatura de la persona n${n}?`);
//   prom += parseFloat(alt);
//   i++;
// }
//  prom/= parseFloat(n);

// alert(`La aultura promedio de ${n} personas es igual a ${prom.toFixed(2)}m`);

//Reto 3          

// let n = prompt("Indique la cantidad de empleados: ");
// n = parseFloat(n);
// i = 0;
// let smn = 0;
// let smy = 0;
// let r = 0;
// while (i < n) {
//   let sueldo = prompt(`Indique el sueldo del empleado nro. ${i + 1} (entre $100 y $500);`);
//   sueldo = parseFloat(sueldo);
//   switch (true) {
//     case (sueldo >= 100) && (sueldo<=300):
//       smn++;
//       i++;
//       r +=sueldo;
//       break;
//     case (sueldo > 300) && (sueldo<=500):
//       smy++;
//       i++;
//       r +=sueldo;
//       break;
//     default:
//       alert("Indique un sueldo entre $100 y $500");
//       break;
//   }
// }
// alert(`La cantidad de sueldos es ${n}
// La cantidad de sueldos que estan entre $100 y $300 son ${smn}
// Los sueldos entre $300 y $500 son ${smy} 
// La cantidad que debe pagar la empresa es $${r}`)

//Reto 4          

// i = 0;
// sum = 0;
// while (i < 25) {
//   sum +=11;
//   i++;
//   console.log(sum);
// }

//Reto 5          
// sum = 0;
// while (sum < 500) {
//   sum += 8;
//   if (sum < 500) {
//     console.log(sum);
//   }

// }

//Reto 6          
let lista1 = [0];
let lista2 = [0];
i = 0;

while (i < 15) {
  lista1[i] = Math.random(0, 100);
  console.log(lista1[i]);
  i++;
}

while (i < 15) {
  lista2[i] = Math.random(0, 100);
  console.log(lista2[i]);
  i++;
}
