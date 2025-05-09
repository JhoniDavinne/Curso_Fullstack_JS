
function Calculadora() {
    
    const display = document.querySelector('.display');

    const clearDisplay = () => display.value = '';

    const btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus();
    }

    const apagaUm = () => display.value = display.value.slice(0, -1);

    this.inicia = () => {
       cliqueBotoes();
       pressionaEnter();
    };

    const pressionaEnter = () => {
        display.addEventListener('keypress', e => { //usando arrow function para nao ter que usar bind.
            if (e.keyCode === 13) {
               realizaConta();
            }
        });
    };

    const realizaConta = () => {

        try {
            const conta = eval(display.value);
            if (typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }

            display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    const cliqueBotoes = () => {
        document.addEventListener('click', function (e) {
            const el = e.target;
            if (el.classList.contains('btn-num')) btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) clearDisplay();
            if (el.classList.contains('btn-del')) apagaUm();
            if (el.classList.contains('btn-eq')) realizaConta();
        })
    }; 
    
}

const calculadora = new Calculadora();
calculadora.inicia();