class Competidor{
    constructor(objeto){
        this.legajo = objeto.legajo;
        this.apellido = objeto.apellido;
        this.nombre = objeto.nombre;
        this.du = objeto.du;
        this.fechaNac = objeto.fechaNac;
        this.pais = objeto.pais;
        this.graduacion = objeto.graduacion;
        this.clasificacionGenNac = objeto.clasificacionGenNac;
        this.email = objeto.email;
        this.genero = objeto.genero;
    }

    //Método que genera una tarjeta HTML en un string y la retorna para imprimirla en pantalla
    darPerfil(){
        let competidorInfo = '<div class="card mx-2 mt-1 mb-2" style="width: 18rem; height: fit-content;" id="competidor">'+
        '<div class="card-body">'+
          '<h5 class="card-title" id="nombreCompetidor">'+this.nombre+' '+ this.apellido +'</h5>'+
          '<p class="card-text">'+
            '<b>Legajo: </b>'+this.legajo+'<br>'+
            '<b>DU: </b> '+this.du+'<br>'+
            '<b>Fecha de Nacimiento: </b> '+ this.fechaNac+'<br>'+
            '<b>Pais de origen: </b> '+ this.pais+'<br>'+
            '<b>Graduacion: </b> '+ this.graduacion+'<br>'+
            '<b>Clasificación nacional: </b> '+ this.clasificacionGenNac+'<br>'+
            '<b>Mail: </b> '+ this.email+'<br>'+
            '<b>Género: </b>'+ this.genero+
          '</p>'+
        '</div>'+
      '</div>';
      return competidorInfo;     
    } 
}


