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
    tdIMC.textContent = calcularIMC(peso, altura);
  }
}

function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}