const ESTILOS = getComputedStyle(document.documentElement);
const BOTON = document.getElementById('cambioTema');

window.addEventListener('load', function () {
    //Se llama a la funcion que imprime los datos de los competidores en pantalla
    this.localStorage.setItem("Tema", 'claro')
    BOTON.innerHTML = 'Modo oscuro'
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