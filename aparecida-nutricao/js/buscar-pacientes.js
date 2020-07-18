var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
           
            var resposta = xhr.responseText;
           
            /* json para array */
            var pacientes = JSON.parse(resposta);
            
            /* add pacientes na tabela */
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            erroAjax.classList.remove("invisivel")
        }
    })

    xhr.send();

})