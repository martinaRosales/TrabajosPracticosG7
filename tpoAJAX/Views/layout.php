
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/bootstrap-5.0.2-dist/css/bootstrap.min.css" />
     <link rel="stylesheet" href="/css/estilos.css" />
    <link rel="stylesheet" href="/css/video.css">
    <link rel="stylesheet" href="/css/menu.css"> 
    <title>Document</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script></script>
</head>

<body>
    <header id="navbar">
      <div class="collapse" id="navbarToggleExternalContent">
        <nav class="navbar row bg-dark p-4 navbar-expand-xl">
            <div class="col nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#seccion-uno">Seccion 1</a>
            </div>
            <div class="col nav-item">
                <a class="nav-link text-light" href="#seccion-dos">Seccion 2</a>
            </div>
            <div class="col nav-item">
                <a class="nav-link text-light" href="#seccion-tres">Seccion 3</a>
            </div>
            <div class="col nav-item">
                <a class="nav-link text-light" href="#seccion-cuatro">Seccion 4</a>
            </div>
            <div class="col nav-item"><button id="cambioTema" type="button" class="btn bg-dark text-light"></button></div>
        </nav>
      </div>
      <nav class="navbar navbar-dark bg-dark"  id="menu-grande">
        <div class="container-fluid">
            <h2 class="text-light">Taekwondo WTF</h2>
            <button id="botonMenu" 
              class="navbar-toggler ms-auto" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        </div>
      </nav>

      <!-- Menu en pantalla mas chica  -->
      <div class="collapse" id="navbarToggleExternalContent2">
        <nav class="navbar row bg-dark p-4">
            <ul>
              <div class="il nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#seccion-uno">Seccion 1</a>
            </div>
            <div class="il nav-item">
                <a class="nav-link text-light" href="#seccion-dos">Seccion 2</a>
            </div>
            <div class="il nav-item">
                <a class="nav-link text-light" href="#seccion-tres">Seccion 3</a>
            </div>
            <div class="il nav-item">
                <a class="nav-link text-light" href="#seccion-cuatro">Seccion 4</a>
            </div>
            <div class="il nav-item">
                <button id="cambioTema2" type="button" class="btn bg-dark text-light"></button>
            </div>
            </ul>
        </nav>
      </div>
      <nav class="navbar " id="menu-chico">
        <div class="container">
            <button
              class="mobile-toggler  d-sm-none navbar-light rounded" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent2" 
              aria-controls="navbarToggleExternalContent2"
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        </div>
      </nav>
  </header>

    <?php echo $contenido;
    // debuguear($competidor);
    ?>

<footer class="page-footer font-small position-relative bottom-0 bg-dark">
        <div class="container row mt-2">
            <!-- Copyright -->
            <div class="footer-copyright text-center py-3 text-light col mx-0 mt-2" id="copyright">
                Grupo 7 :)
            </div>
        </div>
    </footer>

    <script type="module" src="/JS/index_DOM.js"></script>
</body>

</html>