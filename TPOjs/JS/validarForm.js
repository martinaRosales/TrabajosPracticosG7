/* function validarLegajo(legajo) {
    let validez = false;
    const legajo1 = legajo.trim();
    // Se verifica si el legajo cumple con el formato requerido
    const regex = /^[A-Z]{3}\d{7}$/;
    if (!regex.test(legajo1)) {
        const legajoError = document.getElementById("legajo-error");
        legajoError.style.display = "block";
        legajo.classList.add("is-invalid");
    } else {
        const legajoError = document.getElementById("legajo-error");
        legajoError.style.display = "none";
        legajo.classList.remove("is-invalid");
        validez = true;
    }
    return validez;
} */


function validarFormulario() {
    let envio = document.getElementById("envio");
    // Obtener valores de los campos de entrada y elementos select
    let legajo = document.getElementById("legajo").value;
    let apellido = document.getElementById("apellido").value;
    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    let paisOrigen = document.getElementById("pais").value;
    let graduacion = document.getElementById("graduacion").value;
    let clasificacion = document.getElementById("clasificacion").value;
    let email = document.getElementById("email").value;
    let genero = document.querySelector('input[name="genero"]:checked');

    // Validar si los campos requeridos tienen un valor
    if (legajo == "" || apellido == "" || nombre == "" || fechaNacimiento == "" || paisOrigen == "" || graduacion == "" || clasificacion == "" || email == "" || genero == null) {
        envio.textContent = "Complete todos los campos por favor";
        envio.style.display = "block";
        envio.classList.add("is-invalid");
        return false;
    }

    // Validar el formato del correo electrónico
    var regexEmail = /^\S+@\S+\.\S+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;
    }

    // Validar el formato del legajo
    const regexLegajo = /^[A-Z]{3}\d{7}$/;
    if (!regexLegajo.test(legajo)) {
        const legajoError = document.getElementById("legajo-error");
        legajoError.style.display = "block";
        legajo.classList.add("is-invalid");
    } else {
        const legajoError = document.getElementById("legajo-error");
        legajoError.style.display = "none";
        legajo.classList.remove("is-invalid");
    }

    // Si se llega a este punto, todos los campos requeridos tienen un valor válido
    envio.textContent = "Bien hecho";
    envio.style.display = "block";
    envio.classList.add("is-valid");
    return true;
}