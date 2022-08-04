var botonAdicionar = document.querySelectorAll("#adicionar-paciente");

botonAdicionar.addEventListener("click", function () {
  //declaro una función anónima para usar únicamente al capturar este botón. Las funciones anónimasno tienen un nombre declarado
  console.log("Usted hizo un click en el bot{on adicionar");
});

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  pesoEsValido = true;
  alturaEsValida = true;

  //verdadero o falso --> verdadero
  if (peso < 0 || peso > 1000) {
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
  }

  //verdadero o falso --> verdadero
  if (altura < 0 || altura > 3.0) {
    console.log("Peso incorrecto");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }

  //verdadero y verdadero --> verdadero
  //verdadero y falso --> falso
  //falso y falso --> falso
  if (pesoEsValido && alturaEsValida) {
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}
