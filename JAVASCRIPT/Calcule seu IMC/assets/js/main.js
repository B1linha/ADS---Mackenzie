// Capturar evento de submit do formulário
const form = document.querySelector('#form'); // capturei o formulário 

form.addEventListener('submit', function (event) { // Adicionando escutador do evento submit
    event.preventDefault(); // previnindo atualização da page
    const Ipeso  = event.target.querySelector('#peso');
    const Ialtura  = event.target.querySelector('#altura');

    const peso = Number(Ipeso.value);   // convertendo os inputs para number
    const altura = Number(Ialtura.value);

    if (!peso) { // diferente de number
        result('Peso inválido!', false);
        return;
    }
    if(!altura) {
        result('Altura inválido', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    result(msg, true);

    function getImc(peso, altura){
        const imc = peso / altura ** 2
        return imc.toFixed(2); // Retorna o IMC com 2 casas decímais 
    }
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5]; // return faz a condição parar e não precisa de else if
    if (imc >= 34.9) return nivel[4]; // Não estou usando {} pois o if é muito pequeno e não precisa
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc>= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function criaP () { // Function de criar parágrarfo
    const p = document.createElement('p');// Criando um parágrafo 
    return p;
}
// Function de exibir os resultados
function result (msg, isValid) { // Tudo que eu colocar no parâmetro msg vai aparecer na div res
    const resultado = document.querySelector('#res');
    resultado.innerHTML = ''; 

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p) // appendChild insere um elemento filho (p) no elemento pai (resultado)
}   