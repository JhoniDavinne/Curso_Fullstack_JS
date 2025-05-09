import GerarCPF from './modules/GerarCPF';

import './assets/css/style.css';

(() => {
    const $cpfGerado = document.querySelector('.cpf-gerado');
    const gerar = new GerarCPF();
    $cpfGerado.innerHTML = gerar.gerarNovoCPF();
})();
