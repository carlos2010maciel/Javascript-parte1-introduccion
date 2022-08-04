var botonAdicionar = document.querySelector("#adicionar-paciente");

//declaro una función anónima para usar únicamente al capturar este botón. Las funciones anónimasno tienen un nombre declarado
botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);

    tabla.appendChild(pacienteTr);
})