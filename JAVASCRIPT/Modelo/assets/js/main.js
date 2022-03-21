const in1 = document.querySelector('.inp1')
const in2 = document.querySelector('.inp2')
const soma = document.querySelector('.soma')
const subtração = document.querySelector('.sub')
const multiplicação = document.querySelector('.mult')
const divisão = document.querySelector('.div')
const submit = document.querySelector('.submit')


function criaP () {
    const p = document.createElement('p');
    return p;
}

function result(msg) {
    const resultado = document.querySelector('.res')
    resultado.innerHTML = '';
    
    const p = criaP();

    p.innerHTML = msg;
    resultado.appendChild(p);
}

submit.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n1 = Number(in1.value);
    const n2 = Number(in2.value);

    if (!n1) {
        result('Número inválido!');
        return;
    }
    if (!n2) {
        result('Número inválido!');
        return;
    }

    const getCalculo = calculo(n1, n2);
    const mensagem = `O valor do seu cáculo é ${getCalculo}`
    result(mensagem);

    function calculo (n1, n2) {
        const valor = 0;

        if (soma.checked) {
            valor = n1 + n2;
            return valor;
        }
        if (subtração.checked) {
            valor = n1 - n2;
            return valor;
        }
        if (multiplicação.checked) {
            valor = n1 * n2;
            return valor;
        }
        if (divisão.checked) {
            valor = n1 / n2;
            return valor;
        }
    }
});