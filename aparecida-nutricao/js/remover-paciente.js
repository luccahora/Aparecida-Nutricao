var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    const alvoEvento = event.target;
    const paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.remove();
})