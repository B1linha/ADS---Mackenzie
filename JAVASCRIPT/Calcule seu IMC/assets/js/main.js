// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (event) { // Evento para evitar a atualização da page
    event.preventDefault(); 
    console.log('Evento previnido');
    result('Olá mundo!')
});

function criaP () {
    const p = document.createElement('p');// Criando um parágrafo 
    p.classList.add('p-res') // Adiciona uma class
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);  // Insere um elemento (filho) na div res
}

function result (msg) { // Tudo que eu colocar no parâmetro msg vai aparecer na div res
    const resultado = document.querySelector('#res');
    resultado.innerHTML = ''; 
}   