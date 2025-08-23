import { gerarNumero } from "./numeroAleatorio.js";
import { verificar } from "./verificarTentativa.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const numeroSecreto = gerarNumero();
let tentativas = 3;

console.log("🎮 Jogo de Adivinhação!");
console.log("Tente adivinhar o número entre 1 e 10.");
console.log(`Você tem ${tentativas} tentativas.`);

while (tentativas > 0) {
  const chute = parseInt(prompt("Digite seu palpite: "));
  const resultado = verificar(chute, numeroSecreto);
  console.log(resultado);

  if (chute === numeroSecreto) break;

  tentativas--;
}

if (tentativas === 0) {
  console.log(`Fim de jogo! O número era ${numeroSecreto}.`);
}
