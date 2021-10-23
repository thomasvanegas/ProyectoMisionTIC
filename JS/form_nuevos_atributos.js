// VARIABLES
let tipoDocumento, numeroDocumento, correo, contrasena, boton;


// EXPRESIONES REGULARES
const expresionRegularPermisoPermanencia = /^[0-9]{15}$/; 
const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/;
const expresionRegularPasaporte = /^[A-Z]{2}[0-9]{6}$/;
const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


// FUNCIONES

function checkNumDocumento(valor, tipo) {

    switch (tipo) {

        case "cedulaciudadania":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "tarjetaidentidad":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "cedulaextranjeria":

            if ((expresionRegularNumeroDocumento.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "permisopermanencia":

            if ((expresionRegularPermisoPermanencia.test(valor)) === true) {

                return true;

            } else {

                return false;

            }

        case "pasaporte":

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

    if ((expresionRegularCorreoElectronico.test(valor)) === true) {

        return true;

    } else {

        return false;

    }

}

function checkContrasena(valor) {

    if ((expresionRegularContrasena.test(valor)) === true) {

        return true;

    } else {

        return false;

    }

}


// EJECUCIÓN DEL CÓDIGO

tipoDocumento = document.getElementById("tipo-documento");

numeroDocumento = document.getElementById("numero-documento");

correo = document.getElementById("correo");

contrasena = document.getElementById("contrasena");

boton = document.getElementById("btn-registrar");

boton.addEventListener("click", function () {

    let tipo_documento = tipoDocumento.value;
    let numero_documento = numeroDocumento.value;
    let correo_ = correo.value;
    let contrasena_ = contrasena.value;


    console.log(checkNumDocumento(tipo_documento, numero_documento)); 
    console.log(checkCorreo(correo_));
    console.log(checkContrasena(contrasena_));

}

);

// EXPORTACIÓN DE MÓDULOS

module.exports = checkNumDocumento;
module.exports = checkCorreo;
module.exports = checkContrasena;