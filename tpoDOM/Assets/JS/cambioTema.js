const ESTILOS = getComputedStyle(document.documentElement);
const BOTON = document.getElementById('cambioTema');

window.addEventListener('load', function () {
    //Se llama a la funcion que imprime los datos de los competidores en pantalla
    this.localStorage.setItem("Tema", 'claro')
    BOTON.innerHTML = 'Modo oscuro'
    document.body.classList.remove('modoOscuro');

  });

BOTON.addEventListener('click', ()=>{
    document.body.classList.toggle('modoOscuro');
    if(document.body.classList.contains("modoOscuro")){
        localStorage.setItem("Tema", 'oscuro');
        BOTON.innerHTML = 'Modo claro'
    } else {
        localStorage.setItem("Tema", 'claro');
        BOTON.innerHTML = 'Modo oscuro'
    }
})

if(localStorage.getItem("Tema")==="oscuro"){
    document.body.classList.add('modoOscuro');
} else {
    document.body.classList.remove('modoOscuro');
}


//Boton modo oscuro para el menu chico 
const BOTON2 = document.getElementById('cambioTema2');

window.addEventListener('load', function () {
    //Se llama a la funcion que imprime los datos de los competidores en pantalla
    this.localStorage.setItem("Tema", 'claro')
    BOTON2.innerHTML = 'Modo oscuro'
  });

BOTON2.addEventListener('click', ()=>{
    document.body.classList.toggle('modoOscuro');
    if(document.body.classList.contains("modoOscuro")){
        localStorage.setItem("Tema", 'oscuro');
        BOTON2.innerHTML = 'Modo claro'
    } else {
        localStorage.setItem("Tema", 'claro');
        BOTON2.innerHTML = 'Modo oscuro'
    }
})

if(localStorage.getItem("Tema")==="oscuro"){
    document.body.classList.add('modoOscuro');
} else {
    document.body.classList.remove('modoOscuro');
}
