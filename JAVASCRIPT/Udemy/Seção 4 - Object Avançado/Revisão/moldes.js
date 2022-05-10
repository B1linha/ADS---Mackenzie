// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Lucas', 'Barreto');

function Pessoa(nome, sobrenome) { // Constructor Function
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Lucas', 'Barreto');

console.log(p1.nomeCompleto); // Não precisei chamar com os '()' pois estou usando o get, funcionaria sem o get também!
console.log(p2);