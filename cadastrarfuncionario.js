const inputs = document.querySelectorAll("[required]");

inputs.forEach( (elemento)=> {
    elemento.addEventListener("blur", (evento)=> {
        validaCampo(evento.target);
    });
});

function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");
    if(campo.name === "nome") {
        if(campo.value.length<5) {
            msnErro.textContent = "Digite o nome completo!";
        }
        else {
            msnErro.textContent = "";
        }
    }

    if(campo.name === "celular") {
        if(campo.value.length<13) {
            msnErro.textContent = "Digite o celular no seguinte formato: 00 00000-0000.";
        }
        else {
            msnErro.textContent = "";
        }
    }

    if(campo.name === "funcao") {
        if(campo.value.length<5) {
            msnErro.textContent = "A função deve ter, pelo menos, 5 caracteres.";
        }
        else {
            msnErro.textContent = "";
        }
    }

    if(campo.name === "salario") {
        if(campo.value.length<6) {
            msnErro.textContent = "Digite o salário no seguinte formato: R$ 0,00.";
        }
        else {
            msnErro.textContent = "";
        }
    }

    if(campo.name === "cpf") {
        if(campo.value.length<14) {
            msnErro.textContent = "Digite o CPF no seguinte formato: 000.000.000-00.";
        }
        else {
            msnErro.textContent = "";
        }
    }

    if(campo.name === "rg") {
        if(campo.value.length<7) {
            msnErro.textContent = "O RG deve ter, pelo menos, 7 dígitos.";
        }
        else {
            msnErro.textContent = "";
        }
    }
}