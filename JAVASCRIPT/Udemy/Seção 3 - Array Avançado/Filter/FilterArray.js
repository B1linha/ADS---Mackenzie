// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

/* function callbackFilter(valor, indice, array) {
    // Método mais simples do que criar o if
    return valor > 10;
} */

// O filter precisa que você retorne um valor boleano, true para imbutir no novo array e false para não.
// Poderia criar uma função anônima no lugar do callbackFilter e jogar todo o código lá

const numerosFiltrados = numeros.filter(valor =>  valor > 10); // Não executar a function
console.log(numerosFiltrados)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const filter1 = pessoas.filter( obj => obj.nome.length >= 5);
const filter2 = pessoas.filter( obj => obj.idade > 50)
const filter3 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(filter3)

// O método endsWith() indica se uma string termina com determinados caracteres, retornando true ou false.