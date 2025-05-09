class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }  
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }   
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit()
        }
    }

    senhasValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }

        if (valid === true && senha.value.length < 6 || senha.value.length > 12) { 
            valid = false;
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
        }

        return valid;
    }
    camposValidos() {
        let valid = true;
        // limpa todos os erros (class .error-text), se houver, para checar novamente.
        this.formulario.querySelectorAll('.error-text').forEach(error => {
            error.remove();
        })
        // checa todos os campos
        this.formulario.querySelectorAll('.validar').forEach(campo => {
            const label = campo.previousElementSibling.innerText;

            // checa se o campo esta vazio
            if (!campo.value) {
                this.criaErro(campo, `O campo "${label}" não pode estar em branco`);
                valid = false;
            }
            console.log(valid, label)
            //valida cpf
            if (campo.classList.contains('cpf')) { 
                if(!this.validaCPF(campo)) valid = false
            }
            console.log(valid, label)
            //valida usuario
            if (campo.classList.contains('usuario')) { 
                if(!this.validaUsuario(campo)) valid = false
            }
            console.log(valid, label)
        })

        return valid;
    }

    validaUsuario(campo) { 
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário precisa conter apenas letras e/ou números');
            valid = false;
        }

        return valid;

    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valido) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true;
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const form = new ValidaFormulario();
