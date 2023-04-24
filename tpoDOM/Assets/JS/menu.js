
/*Hacer además que con el teclado la combinación de teclas Alt+m despliegue el
menú (usando solamente javaScript) */
export const botonMenu = () => {

let boton = document.getElementById('botonMenu')

document.addEventListener('keydown', (event) => {
    let alt = event.altKey; //devuelve true cuando se presiona  alt
    let m = event.key;//valor de la tecla presionada 
    if ( alt && m === 'm' || m == 'm') {
        boton.addEventListener.click();
    }
});
botonMenu()
}



