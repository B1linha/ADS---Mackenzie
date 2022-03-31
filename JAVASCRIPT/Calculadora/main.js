// Por motivos de prática vamos usar uma factory function
function criaCalculadora () {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            // this -> calculadora  
            document.addEventListener('click', function(event) {
                // this -> document
                const el = event.target;

                if (el.classList.contains('btn-num')) {

                    this.btnParaDisplay(el.innerText);
                };

                if (el.classlist.contains('btn-clear')) {
                    this.btnParaDisplay('')
                }
            }.bind(this)); // Fazendo a function usar o this da calculadora
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

// Value geralmente é usado com elementos de form, tipo input, option, etc... esses elementos tem o atributo value. <p> não tem este atributo, ok? Isso deverá retornar undefined pra ti.

// InnerText é o texto entre as tags...