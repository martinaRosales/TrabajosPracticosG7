// let competidor1 = new Competidor({
//     legajo: "ABS1234567",
//     apellido: "Perez",
//     nombre: "Roberto",
//     du: "32556987",
//     fechaNac: "1990-12-02",
//     pais: "Argentina",
//     graduacion: "1er DAN",
//     clasificacionGenNac: 200,
//     email: "perez.roberto@gmail.com",
//     genero: "masculino"
// })
// let competidor2 = new Competidor({
//     legajo: "AFG5566894",
//     apellido: "Ramirez",
//     nombre: "Noelia",
//     du: "16558974",
//     fechaNac: "1968-09-17",
//     pais: "Argentina",
//     graduacion: "4to GUP",
//     clasificacionGenNac: 825,
//     email: "noeliaramirez22@gmail.com",
//     genero: "femenino"
// })
// let competidor3 = new Competidor({
//     legajo: "ADF2356941",
//     apellido: "Gonzales",
//     nombre: "Mariana",
//     du: "46558712",
//     fechaNac: "2005-12-02",
//     pais: "Argentina",
//     graduacion: "1ro GUP",
//     clasificacionGenNac: 315,
//     email: "marii.gon@gmail.com",
//     genero: "femenino"
// })

array= [
  { legajo: "ABS1234567",
  apellido: "Perez",
  nombre: "Roberto",
  du: "32556987",
  fechaNac: "1990-12-02",
  pais: "Argentina",
  graduacion: "1er DAN",
  clasificacionGenNac: 200,
  email: "perez.roberto@gmail.com",
  genero: "masculino"},
  {
    legajo: "AFG5566894",
    apellido: "Ramirez",
    nombre: "Noelia",
    du: "16558974",
    fechaNac: "1968-09-17",
    pais: "Argentina",
    graduacion: "4to GUP",
    clasificacionGenNac: 825,
    email: "noeliaramirez22@gmail.com",
    genero: "femenino"
},
{
  legajo: "ADF2356941",
    apellido: "Gonzales",
    nombre: "Mariana",
    du: "46558712",
    fechaNac: "2005-12-02",
    pais: "Argentina",
    graduacion: "1ro GUP",
    clasificacionGenNac: 315,
    email: "marii.gon@gmail.com",
    genero: "femenino"
}
]

arrayCompetidores.forEach(competidor => {
  new Competidor(competidor)
});

//let arrayCompetidores = [competidor1, competidor2, competidor3];
localStorage.setItem('competidores', arrayCompetidores);

window.addEventListener('load', function() {
    //Se cargan las tarjetas con los competidores
    mostrarCompetidores()
  });

//mostrar competidores
function mostrarCompetidores(){
    tarjetas = document.getElementById("tarjetas");
    tarjetaS = Array();
    arrayCompetidores.forEach(competidor => {
        tarjeta = '<div class="card mx-2 mt-1 mb-2" style="width: 18rem; height: fit-content;" id="competidor">'+
        '<div class="card-body">'+
          '<h5 class="card-title" id="nombreCompetidor">'+competidor.nombre+' '+ competidor.apellido +'</h5>'+
          '<p class="card-text">'+
            '<b>Legajo: </b>'+competidor.legajo+'<br>'+
            '<b>DU: </b> '+competidor.du+'<br>'+
            '<b>Fecha de Nacimiento: </b> '+ competidor.fechaNac+'<br>'+
            '<b>Pais de origen: </b> '+ competidor.pais+'<br>'+
            '<b>Graduacion: </b> '+ competidor.graduacion+'<br>'+
            '<b>Clasificación nacional: </b> '+ competidor.clasificacionGenNac+'<br>'+
            '<b>Mail: </b> '+ competidor.email+'<br>'+
            '<b>Género: </b>'+ competidor.genero+
          '</p>'+
        '</div>'+
      '</div>';
        tarjetaS.push(tarjeta);
    });
    tarjetas.innerHTML = tarjetaS;
}