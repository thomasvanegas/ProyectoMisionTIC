// DECLARACIÓN DE VARIABLES

let boton, elementosInput, contenidoSelect, tipoDocumento, numeroDocumento, correoElectronico, contrasena;

boton = document.getElementById("btn-registrar");

boton.addEventListener("click", capturaDatosUsuario);

function capturaDatosUsuario() {

    elementosInput = document.querySelectorAll("#form-registro input");
    contenidoSelect = document.getElementsByTagName("select");

    tipoDocumento = contenidoSelect[0];
    numeroDocumento = elementosInput[0];
    correoElectronico = elementosInput[1];
    contrasena = elementosInput[2];

    console.log(tipoDocumento.value);
    console.log(numeroDocumento.value);
    console.log(correoElectronico.value);
    console.log(contrasena.value);

}




