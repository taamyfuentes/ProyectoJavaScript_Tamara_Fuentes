// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if (formulario.nombres.value == "") {
    document.getElementById("errornombres").innerText = "Campo obligatorio";
    formulario.nombres.focus();
    return false;
  }
  if (formulario.email.value == 0) {
    document.getElementById("errorEmail").innerText = "Campo obligatorio"
    formulario.email.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo inválido"
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value == "") {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.length < 7) {
    document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 7 caracteres)";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.confirmacion.value == 0) {
    document.getElementById("errorConfirmacion").innerText = "Campo obligatorio";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "Contraseñas no coinciden";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.tipo.value == -1) {
    document.getElementById("errorTipo").innerText = "Campo obligatorio";
    return false;
  }

  if(!formulario.acepto.checked){
    document.getElementById("errorAcepto").innerText = "Campo obligatorio";
    return false;
  }



}
