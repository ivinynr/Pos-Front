let aluno = {
  nome: "Iviny Leticia",
  idade: 21,
  curso: "Sistemas para Internet",
  notas: [7, 8, 9]
};

console.log("Nome do aluno:", aluno.nome);
console.log("Primeira nota:", aluno.notas[0]);


aluno.idade = 30; 
aluno.notas.push(10); 
console.log("Aluno atualizado:", aluno);

let alunoString = JSON.stringify(aluno);
console.log("Aluno em formato JSON string:", alunoString);

let alunoObjeto = JSON.parse(alunoString);
console.log("Aluno convertido de volta para objeto:", alunoObjeto);

console.log("Propriedades do objeto aluno:");
for (let prop in aluno) {
  console.log(prop, ":", aluno[prop]);
}

let soma = aluno.notas.reduce((acum, nota) => acum + nota, 0);
let media = soma / aluno.notas.length;
console.log("Média das notas:", media.toFixed(2));

aluno.endereco = {
  rua: "Rua Santos Coelho Neto, 300",
  cidade: "Joao Pessoa",
  estado: "PB"
};
console.log("Aluno com endereço:", aluno);
console.log("Cidade:", aluno.endereco.cidade);
console.log("Estado:", aluno.endereco.estado);

let alunos = [
  aluno,
  {
    nome: "Kayssa Cavalcante",
    idade: 25,
    curso: "Sistemas da informaçao",
    notas: [5, 6, 7],
    endereco: { rua: "Av. Algemiro figueredo, 200", cidade: "Joao pessoa", estado: "PB" }
  },
  {
    nome: "Gabriel Negreiros",
    idade: 19,
    curso: "Ciência de dados",
    notas: [6, 7, ],
    endereco: { rua: "Rua governador flavio, 190", cidade: "Joao Pessoa", estado: "PB" }
  }
];

let alunosAprovados = alunos.filter(a => {
  let somaNotas = a.notas.reduce((acum, nota) => acum + nota, 0);
  let mediaNotas = somaNotas / a.notas.length;
  return mediaNotas > 8;
});

console.log("Alunos com média maior que 8:", alunosAprovados);
