var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    const alvoEvento = event.target;
    const paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("animacaoremoverpaciente");

    setTimeout(function () {
        paiDoAlvo.remove();
    }, 300)
})
