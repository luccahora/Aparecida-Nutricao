var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        /* json para array */
        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(paciente => {
            adicionaPacienteNaTabela(paciente)
        });
    })

    xhr.send();

})