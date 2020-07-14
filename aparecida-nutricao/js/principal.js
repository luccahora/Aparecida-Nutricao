var titulo = document.querySelector("h1")

var pacientes = document.querySelectorAll(".paciente")

for (let paciente of pacientes) {
    
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        var pesoEhValido = false;
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura > 3.00) {
        console.log("Altura inválido");
        var alturaEhValida = false;
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}

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