// Arguments sustenta todos os argumentos enviados nos parâmetros
function funcao() {
    console.log(arguments[0])
}
funcao('Valor', 1, 2, 3, 4, 5);

function soma () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento; 
    }
    console.log(total); 
}
soma(2, 3, 4, 5, 6, 7, 9)

// Atribuição via desestruturação em parâmetros

