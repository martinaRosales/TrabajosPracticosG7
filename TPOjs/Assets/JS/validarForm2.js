const form = document.getElementById("formulario");
const envio = document.getElementById("envio");

//Mensajes que se imprimen en pantalla en caso de error
const messages = {
  legajo: "Ingrese un legajo válido (3 letras (MAYUS) seguidas de 7 números)",
  apellido: "El apellido ingresado es demasiado largo",
  nombre: "El nombre ingresado es demasiado largo",
  fechaNacimiento: "Ingrese una fecha valida, debe tener minimo 6 años de edad",
  paisOrigen: "El país ingresado no está en los países registrados",
  graduacion: "Seleccione su grado de educación",
  clasificacion: "Ingrese un dato valido (Enteros o Decimales unicamente ente 1 y 900), sin espacio en blanco y con un punto en caso de ser decimal",
  email: "Ingrese un correo electrónico válido",
  genero: "Seleccione su género",
  du: "Ingrese los 8 dígitos de su DNI"
};



//json de paises permitidos
const paisesPermitidos = [
  { "paisPermitido": "rusia" },
  { "paisPermitido": "ucrania" },
  { "paisPermitido": "estados unidos" },
  { "paisPermitido": "canadá" },
  { "paisPermitido": "perú" },
  { "paisPermitido": "chile" },
  { "paisPermitido": "argentina" },
  { "paisPermitido": "méxico" },
  { "paisPermitido": "brasil" },
  { "paisPermitido": "bolivia" },
  { "paisPermitido": "ecuador" },
  { "paisPermitido": "venezuela" },
  { "paisPermitido": "colombia" },
  { "paisPermitido": "paraguay" },
  { "paisPermitido": "uruguay" }
]

//funcion que comprueb que el campo no esté vacío
function validarCampo(valor, campo) {
  if (valor.trim() === "") {
    envio.textContent = `El campo ${campo} es requerido`;
    envio.style.display = "block";
    return false;
  }
  return true;
}

//función que comprueba que el legajo tenga 3 letras y 7 números, respectivamente
function validarLegajo(legajo) {
  const regexLegajo = /^[A-Z]{3}\d{7}$/;
  if (!regexLegajo.test(legajo)) {
    envio.textContent = messages.legajo;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    return false;
  }
  return true;
}

//función que comprueba que el mail tenga un @ entre strings
function validarEmail(email) {
  const regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email)) {
    envio.textContent = messages.email;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    return false;
  }
  return true;
}

//funcion que compara el país ingresado con un json de países permitidos
function validarPais(pais) {
  paisValidated = false;
  paisesPermitidos.forEach(jsonPais => {
    if (jsonPais.paisPermitido === pais.toLowerCase()) {
      paisValidated = true;
    }
  });
  if (!paisValidated) {
    envio.textContent = messages.paisOrigen;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
  }
  return paisValidated;
}

// La edad del competidor debe ser de 6 años o más.
function validarEdad(fecha) {
  const fechaNac = new Date(fecha); //se crea la clase de fecha con el valor pasado por parametro 
  const anioNac = fechaNac.getFullYear(); //se obtiene el año de la fecha pasada por parametro
  const fechaActual = new Date(); //se obtiene la clase date para saber el año actual
  const anioActual = fechaActual.getFullYear(); // devuelve el año actual  
  const edad = anioActual - anioNac;
  if (edad < 6) {
    envio.textContent = messages.fechaNacimiento;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    return false;
  }
  return true;
}


// Validar que el ranking sea un número entre 0 y 900 pudiendo ser decimal de una posición
function validarClasificacion(clasificacion) {
  const regexClas = /^\S+$/ //expresion que no acepta espacion en blanco 
  if (isNaN(clasificacion) || clasificacion < 1 || clasificacion > 900 || !regexClas.test(clasificacion)) {
    envio.textContent = messages.clasificacion;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    return false;
  }
  return true;
}

//Validar que el apellido tenga menos de 100 caracteres
function validarApellido(string) {
  let apellidoValidated = true;
  if (string.length > 100) {
    envio.textContent = messages.apellido;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    apellidoValidated = false
  }
  return apellidoValidated
}

//Validar que el nombre tenga menos de 100 caracteres
function validarNombre(string) {
  let nombreValidated = true;
  if (string.length > 100) {
    envio.textContent = messages.nombre;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    nombreValidated = false
  }
  return nombreValidated
}

//Validar que el du sea un número y tenga 8 dígitos
function validarDu(du) {
  duValidated = true;
  if (isNaN(du) || du.length != 8) {
    envio.textContent = messages.du;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    duValidated = false
  }
  return duValidated
}

//Funcion que comprueba que todos los campos estén completos y con los datos correctos
function validarFormulario() {
  //Se recuperan los datos del formulario
  const legajo = document.getElementById("legajo").value;
  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const du = document.getElementById("du").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  const paisOrigen = document.getElementById("pais").value;
  const graduacion = document.getElementById("graduacion").value;
  const clasificacion = document.getElementById("clasificacion").value;
  const email = document.getElementById("email").value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  if (
    //Se comprueba que los campos no estén vacíos
    !validarCampo(legajo, "legajo") ||
    !validarCampo(apellido, "apellido") ||
    !validarCampo(nombre, "nombre") ||
    !validarCampo(du, "du") ||
    !validarCampo(fechaNacimiento, "fecha de nacimiento") ||
    !validarCampo(paisOrigen, "país de origen") ||
    !validarCampo(graduacion, "grado de educación") ||
    !validarCampo(clasificacion, "clasificación") ||
    !validarCampo(email, "correo electrónico") ||
    !genero
  ) {
    return false;
  }

  if (
    //Se comprueba que los datos sean correctos
    !validarLegajo(legajo) ||
    !validarEmail(email) ||
    !validarEdad(fechaNacimiento) ||
    !validarClasificacion(clasificacion) ||
    !validarApellido(apellido) ||
    !validarNombre(nombre) ||
    !validarPais(paisOrigen) ||
    !validarDu(du)
  ) {
    return false;
  }


  envio.textContent = "";
  envio.style.display = "none";
  envio.classList.remove("is-invalid");

  //se crea un objeto conpetidor con los datos del formulario
  newCompetidor = { legajo: legajo, apellido: apellido, nombre: nombre, du: du, fechaNac: fechaNacimiento, pais: paisOrigen, graduacion: graduacion, clasificacionGenNac: clasificacion, email: email, genero: genero };
  
  //Se obtiene el array de objetos competidores y se pushea el objeto nuevo
  let array = localStorage.getItem('competidores');
  competidores = JSON.parse(array);
  competidores.push(newCompetidor);
  localStorage.setItem('competidores', JSON.stringify(competidores));

  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validarFormulario()) {
    alert("Formulario enviado exitosamente");

   //se llama a la funcion que imprime competidores para actualizar la lista
    darCompetidores(competidores)


    form.reset();
  }
});
