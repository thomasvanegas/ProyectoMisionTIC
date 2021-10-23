// EXPRESIONES REGULARES 

//const expresionRegularPermisoPermanencia = /^[0-9]{15}$/; 
//const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/; //CÉDULA Y TARJETA DE IDENTIDAD
//const expresionRegularPasaporte = /^[A-Z]{2}[0-9]{6}$/;
//const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


// DECLARACIÓN DE VARIABLES

let boton, elementosInput, contenidoSelect, tipoDocumento, numeroDocumento, correoElectronico, contrasena;


// FUNCIONES

function checkNumDocumento(valor, tipo) {

    // EXPRESIÓN REGULAR NÚMERO DOCUMENTO
    const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/; //CÉDULA CIUDADANIA, CÉDULA EXTRANJERÍA Y TARJETA DE IDENTIDAD

    // EXPRESIÓN REGULAR PASAPORTE
    const expresionRegularPasaporte = /^[A-Z]{2}[0-9]{6}$/;

    switch (tipo) {

        case "CC":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "TI":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "CE":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "P":

            if ((expresionRegularPasaporte.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        default:

            alert("El tipo de documento seleccionado no es válido");

            break;

    }

}

function checkCorreo(valor) {

    // EXPRESIÓN REGULAR
    const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((expresionRegularCorreoElectronico.test(valor)) === true) {

        return true;

    } else {

        return false;

    }

}

function checkContrasena(valor) {

    // EXPRESIÓN REGULAR
    const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if ((expresionRegularContrasena.test(valor)) === true) {

        return true;

    } else {

        return false;

    }

}


// EJECUCIÓN DEL CÓDIGO -> CAPTURA DE DATOS DEL USUARIO

window.onload = inicio;

function inicio() {

    elementosInput = document.querySelectorAll("#form-registro input");

    contenidoSelect = document.getElementsByTagName("select");

    boton = document.getElementById("btn-registrar");

    boton.addEventListener("click", capturaDatosUsuario);

}



function capturaDatosUsuario() {

    tipoDocumento = contenidoSelect[0].value;
    numeroDocumento = parseInt(elementosInput[0].value);
    correoElectronico = elementosInput[1].value;
    contrasena = elementosInput[2].value;

    console.log(checkNumDocumento(numeroDocumento, tipoDocumento));
    console.log(checkCorreo(correoElectronico));
    console.log(checkContrasena(contrasena));


    /*
    checkNumDocumento(numeroDocumento, tipoDocumento);
    checkCorreo(correoElectronico);
    checkContrasena(contrasena);
    */

    // VALIDACIÓN DE DATOS

    /* 
    typeTipoDocumento = typeof(tipoDocumento);
    typeNumeroDocumento = typeof(numeroDocumento);
    typeCorreoElectronico = typeof(correoElectronico);
    typeContrasena = typeof(contrasena);
    console.log(typeTipoDocumento);
    console.log(typeNumeroDocumento);
    console.log(typeCorreoElectronico);
    console.log(typeContrasena);
    */

}



// EXPORTACIÓN DE MÓDULOS

module.exports.checkNumDocumento = checkNumDocumento;
module.exports.checkCorreo = checkCorreo;
module.exports.checkContrasena = checkContrasena;