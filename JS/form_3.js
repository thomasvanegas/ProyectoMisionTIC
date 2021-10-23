// VARIABLES
let boton, elementosInput, contenidoSelect;

// EXPRESIONES REGULARES
const expresionRegularPermisoPermanencia = /^[0-9]{15,}$/; 
const expresionRegularNumeroDocumento = /^[0-9]{8,10}$/;
const expresionRegularCorreoElectronico = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const expresionRegularContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

