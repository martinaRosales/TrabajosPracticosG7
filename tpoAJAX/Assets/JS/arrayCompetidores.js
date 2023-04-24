//se crea el array competidores
let arrayCompetidores = new Array()
arrayCompetidores[0] =
{
  gal: "ABS1234567",
  apellido: "Perez",
  nombre: "Roberto",
  du: "32556987",
  fechaNac: "1990-12-02",
  pais: "Argentina",
  graduacion: "1er DAN",
  clasificacionGenNac: 200,
  email: "perez.roberto@gmail.com",
  genero: "masculino"
};
arrayCompetidores[1] =
{
  gal: "AFG5566894",
  apellido: "Ramirez",
  nombre: "Noelia",
  du: "16558974",
  fechaNac: "1968-09-17",
  pais: "Argentina",
  graduacion: "4to GUP",
  clasificacionGenNac: 825,
  email: "noeliaramirez22@gmail.com",
  genero: "femenino"
};
arrayCompetidores[2] =
{
  gal: "ADF2356941",
  apellido: "Gonzales",
  nombre: "Mariana",
  du: "46558712",
  fechaNac: "2005-12-02",
  pais: "Argentina",
  graduacion: "1ro GUP",
  clasificacionGenNac: 315,
  email: "marii.gon@gmail.com",
  genero: "femenino"
};

//Método que genera una tarjeta HTML en un string y la retorna para imprimirla en pantalla
function darPerfil(competidor){
  let competidorInfo = '<div class="card mx-2 mt-1 mb-2" style="width: 18rem; height: fit-content;" id="competidor">'+
  '<div class="card-body">'+
    '<h5 class="card-title" id="nombreCompetidor">'+competidor.getNombre()+' '+ competidor.getApellido() +'</h5>'+
    '<p class="card-text">'+
      '<b>GAL: </b>'+competidor.getGal()+'<br>'+
      '<b>DU: </b> '+competidor.getDu()+'<br>'+
      '<b>Fecha de Nacimiento: </b> '+ competidor.getFechaNac()+'<br>'+
      '<b>Pais de origen: </b> '+ competidor.getPais()+'<br>'+
      '<b>Graduacion: </b> '+ competidor.getGraduacion()+'<br>'+
      '<b>Clasificación nacional: </b> '+ competidor.getClasificacion() +'<br>'+
      '<b>Mail: </b> '+ competidor.getEmail() +'<br>'+
      '<b>Género: </b>'+ competidor.getGenero() +
    '</p>'+
  '</div>'+
'</div>';
return competidorInfo;     
}  


//Se guarda el array en un localStorage
localStorage.setItem('competidores', JSON.stringify(arrayCompetidores));

window.addEventListener('load', function () {
  //Se llama a la funcion que imprime los datos de los competidores en pantalla
  darCompetidores(arrayCompetidores)
});

//Se crea una función que crea intancias de la clase competidor llama al método que retorna una tarjeta html en string
function darCompetidores(competidores) {
  tarjetas = document.getElementById("tarjetas");
  let arrayTarjetas = new Array();
  competidores.forEach(competidor => {
    //se crea una instancia de la clase competidor
    let classCompetidor = new Competidor(competidor);
    let tarjeta = darPerfil(classCompetidor);
    arrayTarjetas.push(tarjeta);
  });
  //se imprime en pantalla el array creado con los datos
  tarjetas.innerHTML = arrayTarjetas;

}




