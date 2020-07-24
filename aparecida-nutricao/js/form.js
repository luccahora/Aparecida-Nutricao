/* Adicionando paciente na tabela */
const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {
    event.preventDefault()

    const form = document.querySelector("#form-adiciona");

    /* Pegando valor do form */
    var paciente = obtemPacienteDoFormulario(form);

    const erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return;
    }

    /* Montando paciente */
    adicionaPacienteNaTabela(paciente);

    form.reset();

    /* Limpando erros ao inserir dados */
    const mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        const li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

/* Criando linha da tabela */
function montaTr(paciente) {
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

/* Criando a coluna e passando os dados */
function montaTd(dado, classe) {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco.")
    }

    if (!validaPeso(paciente.peso))
        erros.push("Peso é inválido!");

    if (!validaAltura(paciente.altura))
        erros.push("Altura é inválida!")

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco.")
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco.")
    }

    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ser em branco.")
    }

    return erros;
}