// Hemos omitido los acentos en los comentarios por compatibilidad
var eventos;
var id = location.search.match(/id=(\d)*/)[1];
$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
    eventos = resultado.eventos

    for(var i =0; i<eventos.length; i++){
      if(eventos[i].id == id){
        var html= ""
        html += `
              <div class="col-12 mb-4 bg-light border rounded">
                <h2>${eventos[i].nombre}</h2>
                <p class="text-muted">${eventos[i].fecha} - ${eventos[i].lugar}</p>
                <p>${eventos[i].descripcion}</p>
                <p class="text-warning">Costo: ${eventos[i].precio}</p>
                <p class="text-info">Invitados: ${eventos[i].invitados}<p/>
              </div>
        `
      }
      document.getElementById("evento").innerHTML = html
    }
  })

  //Guarda el resultado en una variable

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});
