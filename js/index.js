//Define las variables que necesites
var pasados = [];
var proximos = [];
var hoy;
var eventos = [];

function cargarProximos(){
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
    
     hoy = resultado.fechaActual;
     eventos = resultado.eventos;
 
     for(var i=0; i<eventos.length; i++){
       if(eventos[i].fecha > hoy){
         proximos.push(eventos[i]);
       }
     }

     proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    })

    var htmlProximos =""
     for (var j=0; j<2;j++){
      htmlProximos += `
            <div class="col mr-4 bg-light border rounded">
            <a href="detalle.html?id=${proximos[j].id}"><h2>${proximos[j].nombre}</h2></a>
              <p class="text-muted">${proximos[j].fecha}</p>
              <p>${proximos[j].descripcion}</p>
            
            </div>
            
          `}
    document.getElementById("proximos").innerHTML = htmlProximos

  });

}
function cargarPasados(){
  
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
    
     hoy = resultado.fechaActual;
     eventos = resultado.eventos;
 
     for(var i=0; i<eventos.length; i++){
       if(eventos[i].fecha < hoy){
         pasados.push(eventos[i]);
       }
     }

     pasados = pasados.sort(function(x,y){
      if (x.fecha > y.fecha){
        return -1;
      }
      return 1;
    })

    var htmlPasados =""
     for (var j=0; j<2;j++){
      htmlPasados += `
            <div class="col mr-4 bg-light border rounded">
              <a href="detalle.html?id=${pasados[j].id}"><h2>${pasados[j].nombre}</h2></a>
              <p class="text-muted">${pasados[j].fecha}</p>
              <p>${pasados[j].descripcion}</p>
            
            </div>
            
          `}
    document.getElementById("pasados").innerHTML = htmlPasados

  });

}

$(document).ready(function () {
  cargarPasados()
  cargarProximos()  
})

