var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    console.log(this.value);

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            const nome = tdNome.textContent;

            if (nome != this.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})