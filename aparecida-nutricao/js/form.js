/* Adicionando paciente na tabela */
const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(){
    event.preventDefault()
    
    const form = document.querySelector("#form-adiciona");
    
    /* Pegando valor do form */
    var paciente = obtemPacienteDoFormulario(form);
    
    /* Criando tags html */
    var pacienteTr = montaTr(paciente);

    /* Add dados na tabela */
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();


});

function obtemPacienteDoFormulario(form){

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
function montaTr(paciente){
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

    /* Criando a coluna e passando os dados */
function montaTd(dado,classe){
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}