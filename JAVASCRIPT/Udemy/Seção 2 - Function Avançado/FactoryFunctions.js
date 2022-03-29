// Dentro de uma função, o valor de this depende de como a função é chamada.

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala (assunto) {
            return `${nome} tem ${this.peso}kg e está ${assunto}`;
        },
        peso: 55
    }
}
// This.peso é a mesma coisa de p1.peso

const p1 = criaPessoa('Lucas', 'Barreto');
console.log(p1.fala('Falando sobre JS'))