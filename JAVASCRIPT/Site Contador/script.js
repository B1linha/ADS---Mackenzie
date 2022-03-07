// IIFE  Immediately-invoked Function Expression
function meuEscopo() {
    const form = document.querySelector('.form'); // Se fosse ID usaria o #
    const res = document.querySelector('.res');
    const pessoas = []; // Criando array onde os dados vão ficar guardados
    function recebeEventoForm (evento) {
        evento.preventDefault(); //Evita que a página recarregue ao enviar form
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({ // Adicionando valores na array pessoas com o push
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        res.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }
    form.addEventListener('submit', recebeEventoForm); // Escuta o evento submit
}
meuEscopo(); 
