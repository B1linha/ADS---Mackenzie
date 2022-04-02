// Por motivos de prática vamos usar uma factory function
function criaCalculadora () {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizeDisplay() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inválida!')
                    return;
                }

                this.display.value = conta;

            } catch(e) {
                alert('Conta Inválida!')
                return;
            }
        },


        cliqueBotoes() {
            // this -> calculadora  
            document.addEventListener('click', function(event) {
                // this -> document
                const el = event.target;

                if (el.classList.contains('btn-num')) {

                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteDisplay();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizeDisplay();
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