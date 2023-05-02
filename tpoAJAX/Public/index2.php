<?php

require_once __DIR__ . '/../includes/app.php';
use MVC\Router;
use Controllers\ControladorPais;
$router = new Router();
$router->get('/', [ControladorPais::class, 'mostrar']);
$router->post('/', [ControladorPais::class, 'mostrar']);

$router->comprobarRutas();