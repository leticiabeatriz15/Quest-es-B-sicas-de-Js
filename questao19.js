const pessoas = [
    { nome: 'Ana Silva', idade: 10 },
    { nome: 'Carlos Souza', idade: 6 },
    { nome: 'Fernanda Lima', idade: 40 },
    { nome: 'Jorge Oliveira', idade: 18 },
    { nome: 'Mariana Costa', idade: 10 }];

const pessoaencontrada = pessoas.find((pessoa) => pessoa.idade > 18)
console.log(pessoaencontrada)