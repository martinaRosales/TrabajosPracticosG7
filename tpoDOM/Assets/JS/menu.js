
/*1.a) Hacer además que con el teclado la combinación de teclas Alt+m despliegue el
menú (usando solamente javaScript) */

function botonMenu (){

    let boton = document.getElementById('botonMenu')
    
    document.addEventListener('keydown', (event) => {
        let alt = event.altKey; //devuelve true cuando se presiona  alt
        let m = event.key;//valor de la tecla presionada 
    //    console.log( event.key)
        if ( alt && m === 'm' ) {
            boton.click();
            console.log('Letra: Alt' )
            console.log('Letra: '+ m)
        }
    });
    

}

botonMenu()
export {botonMenu};




