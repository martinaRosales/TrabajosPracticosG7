<?php

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\ControladorCompetidor;
use Controllers\ControladorPais; 

$router = new Router();

$router->get('/', [ControladorCompetidor::class, 'index']);
$router->post('/', [ControladorCompetidor::class, 'index']);
$router->get('/competidor/tabla', [ControladorCompetidor::class, 'mostrarCompetidores']);
// $router->get('/competidor/mostrar', [ControladorCompetidor::class, 'mostrar']);
$router->get('/competidor/crear', [ControladorCompetidor::class, 'crear']);
$router->post('/competidor/crear', [ControladorCompetidor::class, 'crear']);
$router->get('/competidor/actualizar', [ControladorCompetidor::class, 'actualizar']);
$router->post('/competidor/actualizar', [ControladorCompetidor::class, 'actualizar']);
$router->post('/competidor/eliminar', [ControladorCompetidor::class, 'eliminar']);

$router->comprobarRutas();