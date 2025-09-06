export function verificar(numeroJogador, numeroSecreto){
  if(numeroJogador === numeroSecreto){
    return "Acertou!";
}else if (numeroJogador > numeroSecreto) {
    return "o numero secreto é menor";
}else {
    return "o numero secreto é maior";
}
}