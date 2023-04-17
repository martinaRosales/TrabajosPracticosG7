let arrayCompetidores = new Array()
arrayCompetidores[0] =
{
  legajo: "ABS1234567",
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
};
arrayCompetidores[2] =
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
};



localStorage.setItem('competidores', JSON.stringify(arrayCompetidores));

window.addEventListener('load', function () {

  let array = localStorage.getItem('competidores');
  competidores = JSON.parse(array);
  //console.log(competidores)
  darCompetidores(competidores)
});

// window.addEventListener('change', function () {
//   let array = localStorage.getItem('competidores');
//   competidores = JSON.parse(array);
//   console.log(competidores, 'change')
//   darCompetidores(competidores)
// });


function darCompetidores(competidores) {
  tarjetas = document.getElementById("tarjetas");
  let arrayTarjetas = new Array();
  competidores.forEach(competidor => {
    //console.log(competidor)
    let classCompetidor = new Competidor(competidor);
    let tarjeta = classCompetidor.darPerfil();
    arrayTarjetas.push(tarjeta);
  });
  tarjetas.innerHTML = arrayTarjetas;

}




