// DECLARACIÓN DE VARIABLES

const expresionRegularTipoDocumentoUsuario = /^[a-zA-Z ]{9,}/;
const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/;
const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;



// DECLARACIÓN DE FUNCIONES

function checkNumDocumento(valor, tipo) {

    switch (tipo) {

        case "Cédula de Ciudadania":

            if (valor == expresionRegularNumeroDocumento) {

                return true;

            } else {

                return false;

            }

        case "Tarjeta de Identidad":

            if (valor == expresionRegularNumeroDocumento) {

                return true;

            } else {

                return false;

            }

        case "Cédula de Extranjería":

            if (valor == expresionRegularNumeroDocumento) {

                return true;

            } else {

                return false;

            }

        default:
            break;

    }

}

function checkCorreo(valor) {

    if (valor == expresionRegularCorreoElectronico) {

        return true;

    } else {

        return false;

    }

}

function checkContrasena(valor) {

    if (valor == expresionRegularContrasena) {

        return true;

    } else {

        return false;

    }

}



// EXPORTACIÓN DE MÓDULOS

module.exports = checkNumDocumento;
module.exports = checkCorreo;
module.exports = checkContrasena;