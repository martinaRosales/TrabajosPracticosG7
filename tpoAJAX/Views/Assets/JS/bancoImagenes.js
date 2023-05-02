const seccion6 = document.getElementById('seccion6');

fetch(' https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        const imagenes = obtenerImagenesAleatorias(data, 5);
        agregarImagenesAlDom(imagenes, seccion6);
    })
    .catch(error => console.error(error));

function obtenerImagenesAleatorias(imagenes, cantidad) {
    const imagenesAleatorias = [];
    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        imagenesAleatorias.push(imagenes[indiceAleatorio]);
    }
    return imagenesAleatorias;
}

/* function agregarImagenesAlDom(imagenes, contenedor) {
    imagenes.forEach(imagen => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = imagen.title;
        const figcaption = document.createElement('figcaption');
        figcaption.innerText = imagen.title;
        figcaption.addEventListener('click', () => {
            // Aquí puedes crear y mostrar un modal con la información adicional de la imagen
            // Por ejemplo, puedes crear un modal con Bootstrap y agregar el contenido correspondiente
            crearModal(imagen);
        });
        figure.appendChild(img);
        figure.appendChild(figcaption);
        contenedor.appendChild(figure);
    });
} */

function agregarImagenesAlDom(imagenes, contenedor) {
    imagenes.forEach(imagen => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = imagen.title;
        const figcaption = document.createElement('figcaption');
        figcaption.innerText = imagen.title;
        figcaption.setAttribute('data-bs-toggle', 'modal');
        figcaption.setAttribute('data-bs-target', '#myModal');
        figcaption.addEventListener('click', () => {
            crearModal(imagen);
        });
        figure.appendChild(img);
        figure.appendChild(figcaption);
        contenedor.appendChild(figure);
    });
}

function crearModal(imagen) {
    const modalBody = document.querySelector('.modal-body');
    const modalHeader = document.querySelector('#modal-header');
    modalHeader.innerHTML = `
      <h2>ID: ${imagen.id}</h2>
    `;
    modalBody.innerHTML = `
    <img src="${imagen.url}" alt="${imagen.title}" width="200">
    <p>${imagen.title}</p>`;
    // Luego, muestra el modal
    /* const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show(); */
}



///////////////////////////////////////

