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
// let lista1 = [0];
// let lista2 = [0];
// i = 0;
// sum1=0;
// sum2=0;
// while (i < 15) {
//   lista1[i] = Math.round(Math.random()*100);
//   console.log(lista1[i]);
//   sum1 += lista1[i];
//   i++;
// }
// i=0;
// while (i < 15) {
//   lista2[i] = Math.round(Math.random()*100) ;
//   console.log(lista2[i]);
//   sum2 += lista2[i];
//   i++;
// }

// console.log(sum1);
// console.log(sum2);
// switch (true) {
//   case (sum1 > sum2):
//     console.log("Lista 1 mayor");
//     break;
//   case (sum2 > sum1 ):{
//     console.log("Lista 2 mayor");
//     break;
//   }
//   default:
//     console.log("Listas iguales");
//     break;
// }

//Reto 7          

// i = 0;
// list = [0];
// let n = prompt("Cantidad de numeros a ingresar: ");

// let par = 0;
// let impar = 0;

// while (i < parseFloat(n)) {
//   let numb = prompt(`Ingrese el nro. ${i+1}:`);
//   if (list[i] % 2 === 0) {
//     par++;
//   }else{
//     impar++;
//   }
//   i++;
// }

// alert(`hay ${par} numeros pares y ${impar} impares`);

//Reto 8         

// let n = prompt("Indique la cantidad de triangulos:");
// n = parseFloat(n);
// sup = 0;
// rsup = [0];
// listab = [0];
// listah = [0];
// for (let i = 0; i < n; i++) {
//   listab[i] = prompt(`Indique la base del triangulo nro.${i+1}: `);
//   listab[i] = parseFloat(listab[i]);
//   listah[i] = prompt(`Indique la altura del triangulo nro.${i+1}: `);
//   listah[i] = parseFloat(listah[i]);
//   rsup[i] = ((listab[i]*listah[i])/2);
//   if (rsup[i] > 12) {
//     sup++;
//   }
// }
// for (let i = 0; i < n; i++) {
//   alert(`El triangulo nro. ${i+1} tiene de base ${listab[i]} y de altura ${listah[i]} y su superficie es ${rsup[i]}`)
// }
// alert(`Hay ${sup} triangus que sus superficies son mayores a 12`)

//Reto 9        

// let n = 10;
// let list = [0];
// sum = 0;
// for (let i = 0; i < n; i++) {
//   list[i] = Math.round(Math.random() * 100);
//   console.log(list[i]);
// }
// for (let i = n - 5; i < n; i++) {

//   sum += list[i];
//   console.log(list[i]);
// }
// alert(`La suma de los ultimos 5 numeros es ${sum}`)

//Reto 10        

// let tbl5 = [0];
// let mult = 0
// for (let i = 1; i <= 10; i++) {
//   tbl5[i] = i * 5;
//   console.log(`5 x ${i} = ${tbl5[i]}`);
// }

//Reto 11        
let n = prompt("Ingrese el numero a multiplicar: ");
n = parseFloat(n)
let tbm = [0];
if ((n <= 10) && (n >= 1)) {
  for (let i = 1; i <= 13; i++) {
    tbm[i] = i * n;
    console.log(`${n} x ${i} = ${tbm[i]}`);
  }
} else {
  alert("ingrese un valor entre el 1 y el 10")
}
