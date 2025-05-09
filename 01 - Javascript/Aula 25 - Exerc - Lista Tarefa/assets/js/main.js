
const inputTarefa = document.querySelector('.input-tarefa')
const tarefas = document.querySelector('.tarefas')
function criaLi() {
    return  document.createElement('li');
}
function criaTarefa(textoInput) {
    const li = criaLi();
    li.textContent = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li) {
    li.innerText += '  ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

document.addEventListener('click', (e) => {
    const el = e.target.classList;

    if (el.contains('btn-tarefa') && inputTarefa.value !== '') {
        criaTarefa(inputTarefa.value)
    }
})

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); //apaga a tag pai da classe 'apagar', a li.
        salvarTarefas()
    }

})

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    if(listaDeTarefas){
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }
}

adicionaTarefasSalvas();
