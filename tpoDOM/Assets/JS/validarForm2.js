export {
  validarApellido,
  validarCampo,
  validarClasificacion,
  validarDu,
  validarEdad,
  validarEmail,
  validarFormulario,
  validarGal,
  validarGenero,
  validarNombre,
  validarPais
}
const form = document.getElementById("formulario");
const envio = document.getElementById("envio");

//Mensajes que se imprimen en pantalla en caso de error
const messages = {
  gal: "Ingrese un gal válido (3 letras (MAYUS) seguidas de 7 números)",
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

//función que comprueba que el Gal tenga 3 letras y 7 números, respectivamente
function validarGal(gal) {
  const regexGal = /^[A-Z]{3}\d{7}$/;
  const galInput = document.querySelector("#gal");
  if (!regexGal.test(gal)) {
    envio.textContent = messages.gal;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    galInput.style.borderColor = "red";
    galInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return false;
  } else {
    galInput.style.borderColor = "green";
    galInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return true;
  }

}

//función que comprueba que el mail tenga un @ entre strings
function validarEmail(email) {
  const regexEmail = /^\S+@\S+\.\S+$/;
  const emailInput = document.querySelector("input[type='email']");
  if (!regexEmail.test(email)) {
    envio.textContent = messages.email;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    emailInput.style.borderColor = "red";
    emailInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return false;
  } else {
    emailInput.style.borderColor = "green";
    emailInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return true;
  }
}

//funcion que compara el país ingresado con un json de países permitidos
function validarPais(pais) {
  let paisValidated = false;
  const paisInput = document.querySelector("#pais");
  paisesPermitidos.forEach(jsonPais => {
    if (jsonPais.paisPermitido === pais.toLowerCase()) {
      paisInput.style.borderColor = "green";
      paisInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
      paisValidated = true;
    }
  });
  if (!paisValidated) {
    envio.textContent = messages.paisOrigen;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    paisInput.style.borderColor = "red";
    paisInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
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
  const edadInput = document.querySelector("#fecha-nacimiento")
  if (edad < 6) {
    envio.textContent = messages.fechaNacimiento;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    edadInput.style.borderColor = "red";
    edadInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return false;
  } else {
    edadInput.style.borderColor = "green";
    edadInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return true;
  }
}

// Validar que el ranking sea un número entre 0 y 900 pudiendo ser decimal de una posición
function validarClasificacion(clasificacion) {
  const clasificacionInput = document.querySelector("#clasificacion");
  if (isNaN(clasificacion) || clasificacion < 1 || clasificacion > 900) {
    envio.textContent = messages.clasificacion;
    envio.style.display = "block";
    envio.classList.add("is-invalid");
    clasificacionInput.style.borderColor = "red";
    clasificacionInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return false;
  }
  else {
    clasificacionInput.style.borderColor = "green";
    clasificacionInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    return true;
  }

}

//Validar que el apellido tenga menos de 100 caracteres
function validarApellido(string) {
  let apellidoValidated = true;
  const apellidoInput = document.querySelector("#apellido");
  if (string.length > 100) {
    envio.textContent = messages.apellido;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    apellidoValidated = false
    apellidoInput.style.borderColor = "red";
    apellidoInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
  }
  else {
    apellidoInput.style.borderColor = "green";
    apellidoInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
  }
  return apellidoValidated
}

//Validar que el nombre tenga menos de 100 caracteres
function validarNombre(string) {
  let nombreValidated = true;
  const nombreInput = document.querySelector("#nombre");
  if (string.length > 100) {
    envio.textContent = messages.nombre;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    nombreInput.style.borderColor = "red";
    nombreInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    nombreValidated = false
  }
  else {
    nombreInput.style.borderColor = "green";
    nombreInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
  }
  return nombreValidated
}

//Validar que el du sea un número y tenga 8 dígitos
function validarDu(du) {
  let duValidated = true;
  const duInput = document.querySelector("#du");
  if (isNaN(du) || du.length != 8) {
    envio.textContent = messages.du;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    duInput.style.borderColor = "red";
    duInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
    duValidated = false
  }
  else {
    duInput.style.borderColor = "green";
    duInput.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
  }

  return duValidated
}

//Validar que el genero no este vacio 
function validarGenero(genero) {
  let generoValidated = true;
  if (!genero) {
    envio.textContent = messages.genero;
    envio.style.display = 'block';
    envio.classList.add("is-invalid");
    generoValidated = false
  }
  return generoValidated
}

//Funcion que comprueba que todos los campos estén completos y con los datos correctos
function validarFormulario() {
  //Se recuperan los datos del formulario
  const gal = document.getElementById("gal").value;
  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const du = document.getElementById("du").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  const paisOrigen = document.getElementById("pais").value;
  const graduacion = document.getElementById("graduacion").value;
  const clasificacion = document.getElementById("clasificacion").value;
  const email = document.getElementById("email").value;
  const generoInput = document.querySelector('input[name="genero"]:checked');
  const genero = generoInput ? generoInput.value : null;

  if (
    //Se comprueba que los campos no estén vacíos y sean correctos 
    (!validarCampo(gal, "GAL") || !validarGal(gal)) ||
    (!validarCampo(apellido, "apellido") || !validarApellido(apellido)) ||
    (!validarCampo(nombre, "nombre") || !validarNombre(nombre)) ||
    (!validarCampo(du, "du") || !validarDu(du)) ||
    (!validarCampo(fechaNacimiento, "fecha de nacimiento") || !validarEdad(fechaNacimiento)) ||
    (!validarCampo(paisOrigen, "país de origen") || !validarPais(paisOrigen)) ||
    (!validarCampo(graduacion, "grado de educación")) ||
    (!validarCampo(clasificacion, "clasificación") || !validarClasificacion(clasificacion)) ||
    (!validarCampo(email, "correo electrónico") || !validarEmail(email)) ||
    (!validarGenero(genero))
  ) {
    return false;
  }


  envio.textContent = "";
  envio.style.display = "none";
  envio.classList.remove("is-invalid");

  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validarFormulario()) {
    alert("Formulario enviado exitosamente");
    form.reset();

    //seleccionar todos los input y limpiar los bordes 
    const inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.border = '';
      inputs[i].style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)';
    }
  }
});