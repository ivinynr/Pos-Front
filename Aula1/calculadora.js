let num1=parseFloat(prompt("Digite o primeiro numero: "));
let num2=parseFloat(prompt("Digite o segundo numero: "));

let soma, substracao, multiplicacao, divisao;

soma=num1+num2;
substracao=num1-num2;
multiplicacao=num1*num2;

if(num2 !==0){
  divisao = num1 / num2;
}else {
  divisao="Erro: não é possivel dividir por zero";
}

console.log("Soma: "+ soma);
console.log("Substracao: "+ substracao);
console.log("Multiplicacao: "+ multiplicacao);
console.log("Divisao: "+ divisao);

let operacao = prompt("Escolha a operação (+, -, *, /):");

switch (operacao) {
  case "+":
    console.log("Resultado da adição: " + soma);
    break;
  case "-":
    console.log("Resultado da subtração: " + subtracao);
    break;
  case "*":
    console.log("Resultado da multiplicação: " + multiplicacao);
    break;
  case "/":
    if (numero2 !== 0) {
      console.log("Resultado da divisão: " + divisao);
    } else {
      console.log("Erro: não é possível dividir por zero!");
    }
    break;
  default:
    console.log("Operação inválida!");
}