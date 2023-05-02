const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circles = document.querySelectorAll('.circle');
const formularios = document.querySelectorAll('.formulario')

let formularioCurrentActive = 1;
let currentActive = 1;

siguiente.addEventListener('click', () => {
    formularioCurrentActive++;
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    /* if(formularioCurrentActive > formularios.length){
        formularioCurrentActive = formularios.length;
    } */

    update();
    updateForm();
})

anterior.addEventListener('click', () => {
    formularioCurrentActive--;
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    /* if(formularioCurrentActive < formularios.length){
        formularioCurrentActive = formularios.length;
    } */

    update();
    updateForm();
});

function update() {
    circles.forEach((circulo, index) => {
        if (index < currentActive) {
            circulo.classList.add('active');
        } else {
            circulo.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.circle.active');

    progreso.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        anterior.disabled = true;
    } else if (currentActive === circles.length) {
        siguiente.disabled = true;
    } else {
        anterior.disabled = false;
        siguiente.disabled = false;
    }

}

/* function updateForm() {
    formularios.forEach((formulario, index) => {
        let i = 0;
        if (index < formularioCurrentActive) {
            formularios[i].classList.remove('active');
            console.log(i);
            formulario.classList.add('active');
        } else {
            formulario.classList.remove('active');
        }
    });
}
 */

function updateForm() {
    formularios.forEach((formulario, index) => {
        if (index < formularioCurrentActive) {
            formularios[index].classList.remove('active');
        }
        formulario.classList.remove('active');
    });
    formularios[formularioCurrentActive - 1].classList.add('active');
}

