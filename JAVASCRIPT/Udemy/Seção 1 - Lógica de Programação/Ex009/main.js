const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // focus() Permite continuar digitando em um campo sem clicar nele
}

function botaoApagar(li) {
    li.innerHTML += ' '; // Da um espaço entre o texto e o botão
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
} 

function criaTarefa(texto) {
    const li = criaLi();
    tarefas.appendChild(li);
    li.innerHTML = texto;
    limpaInput();
    botaoApagar(li)
}

inputTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) { // 13 é o code do ENTER
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        
}});


btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function(event) {
    const el = event.target;
    if (el.classList.contains('apagar')) {
        console.log('Apagar clicado')
    }
})