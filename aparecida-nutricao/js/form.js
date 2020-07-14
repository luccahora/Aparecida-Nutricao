/* Adicionando paciente na tabela */
const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(){
    event.preventDefault()
    
    const form = document.querySelector("#form-adiciona");
    
    /* Pegando valor do form */
    const nome = form.nome.value;
    const altura = form.altura.value;
    const peso = form.peso.value;
    const gordura = form.gordura.value;
    
    /* Criando tags html */
    const pacienteTr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

    /* Passando valor do form p tag */
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    /* Add dados na tabela */
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});