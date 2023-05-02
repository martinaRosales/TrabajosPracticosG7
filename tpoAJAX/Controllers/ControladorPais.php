<?php

namespace Controllers;

use MVC\Router;
use Model\Pais;

class ControladorPais
{
    public static function index(Router $router)
    {
        $pais = Pais::all();

        $router->render('index', [
            'pais' => $pais
        ]);
    }

    public static function mostrar(Router $router)
    {
        $pais = Pais::all();

        $router->render('pais/mostrar', [
            'pais' => $pais
        ]);
    }

    public static function crear(Router $router)
    {
        $pais = new Pais;
        $errores = Pais::getErrores();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            /** Crea una nueva instancia */
            $pais = new Pais($_POST);

            // Validar
            $errores = $pais->validar();
            if (empty($errores)) {
                // Guarda en la base de datos
                $resultado = $pais->guardar();

                if ($resultado) {
                    header('location: /pais/mostrar');
                }
            }
        }

        $router->render('pais/crear', [
            'errores' => $errores,
            'pais' => $pais
        ]);
    }

    public static function actualizar(Router $router)
    {
        $router->render('actualizar');
    }

    
    public static function arrPaises() {
        $pais = []; 
        $pais = Pais::all(); //devuelve todos los elementos de la tabla en forma de arreglo 
        $i = 0 ;

        while ($i < count($pais) ){
            $paises[] = $pais['paisnombre'];
            $i++;
        }
        // devolver los datos de los nombres de paises en formato JSON
        return 
        json_encode($paises);
        
        
    }

   
}

header('Content-Type: application/json');