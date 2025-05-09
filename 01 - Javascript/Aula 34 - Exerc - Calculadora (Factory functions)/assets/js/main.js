
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => { //usando arrow function para nao ter que usar bind.
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (typeof conta !== 'number') {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },
        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this)) /// bind para passar o this como parametro. E nao usar o this de document.
            //pois ao chamar document, o this se torna o window.
            //porque addEventListener chama o this de window.
            //nao precisa do bind,se usasse arrow function, depois de 'click'.

        }, 

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}


const calculadora = criaCalculadora();
calculadora.inicia();