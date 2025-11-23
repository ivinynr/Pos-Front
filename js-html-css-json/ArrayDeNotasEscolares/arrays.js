let notas = [7, 8, 9, 10];
console.log("Notas iniciais: ",notas);

console.log("Primeira nota: ",notas[0]);
console.log("Ultima nota: ",notas[notas.length - 1]);

notas.push(6);
console.log("Notas após adição: ",notas); 

notas.shift();
console.log("Notas após remoção: ",notas);

console.log("Todas as notas:");
notas.forEach((nota, i) => {
  console.log(`Nota ${i + 1}: ${nota}`);
});

let soma = notas.reduce((acumulador, valor) => acumulador + valor, 0);
let media = soma / notas.length;
console.log("Média das notas:", media.toFixed(2));


let notasAltas = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasAltas);

//Ordenação 
let notasOrdenadas = [...notas].sort((a, b) => a - b);
console.log("Notas ordenadas:", notasOrdenadas);

//Elementos
console.log("O array contém a nota 5.5?", notas.includes(5.5));


console.log("Índice da nota 9:", notas.indexOf(9));


let notasQuadrado = notas.map(nota => nota ** 2);
console.log("Notas elevadas ao quadrado:", notasQuadrado);