function relogio() {
    const timerTag = document.querySelector('.timer h1');
    let relogio = '';
    let hora = new Date(0);
    function atualizaHora(timer) {
        hora = new Date(hora.getTime() + 1000);
        timer.innerHTML = hora.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
    }
    function resetHora() {
        stopRelogio()
        hora = new Date(0);
        timerTag.innerHTML = hora.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
    }
    const timerColor = (color) => timerTag.style.color = color;

    function disabledButton(buttonClass, disable = false) {
        document.querySelector(`.${buttonClass}`).disabled = disable;
    }

    const stopRelogio = () => clearInterval(relogio);
    
    document.addEventListener('click', (e) => {
        const el = e.target.classList;
        if (el.contains('play')) {
            timerColor('black');
            relogio = setInterval(() => {
                atualizaHora(timerTag);
            }, 1000);
            disabledButton('play', true);
        }
        if (el.contains('pause')) {
            timerColor('red');
            stopRelogio();
            disabledButton('play');
        }
        if (el.contains('stop')) {
            timerColor('black');
            resetHora();
            disabledButton('play');
        }
    })

}

relogio();
