<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/estilos.css"/>
    <link rel="stylesheet" href="../bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <title>Document</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script></script>
</head>

<body>
    <header id="navbar" background="Assets/Img/fondo.png">
        <ul class="nav nav-tabs" id="tabs">
            <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="#">Sets completos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="#">Dados individuales</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="#">Sets especiales</a>
            </li>
        </ul>
    </header>

    <?php echo $contenido;
    // debuguear($competidor);
    ?>

    <footer class="page-footer font-small position-relative bottom-0">
        <div class="container row mt-2">
            <!-- Copyright -->
            <div class="footer-copyright text-center py-3 text-light col mx-0 mt-2" id="copyright">
                Grupo 7 :)
            </div>
        </div>
    </footer>

    <script src="/JS/barraProgreso.js"></script>
    <script type="module" src="/JS/index_DOM.js"></script>
    <script src="/JS/arrayCompetidores.js"></script>
    <script src="/JS/competidor.js"></script>

</body>

</html>