<?php

namespace Controllers;

use MVC\Router;
use Model\Competidor;
use Model\Pais;

class ControladorCompetidor
{
    public static function index(Router $router)
    {
        $pais = new Pais();
        $paises = $pais::all();
        $competidor = Competidor::all();
        $errores = Competidor::getErrores();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            /** Crea una nueva instancia */
            $competidor = new Competidor($_POST);

            // Validar
            $errores = $competidor->validar();
            if (empty($errores)) {
                // Guarda en la base de datos
                $resultado = $competidor->guardar();

                if ($resultado) {
                    header('location: /');
                }
            }
        }

        $router->render('index', [
            'paises' => $paises,
            'errores' => $errores,
            'competidor' => $competidor
        ]);
    }

    public static function mostrar(Router $router)
    {
        $competidor = Competidor::all();

        $router->render('competidor/mostrar', [
            'competidor' => $competidor
        ]);
    }

    public static function crear(Router $router)
    {
        $pais = new Pais();
        $paises = $pais::all();
        $competidor = new Competidor;
        $errores = Competidor::getErrores();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            /** Crea una nueva instancia */
            $competidor = new Competidor($_POST);

            // Validar
            $errores = $competidor->validar();
            if (empty($errores)) {
                // Guarda en la base de datos
                $resultado = $competidor->guardar();

                if ($resultado) {
                    header('location: /competidor/mostrar');
                }
            }
        }

        $router->render('competidor/crear', [
            'paises' => $paises,
            'errores' => $errores,
            'competidor' => $competidor
        ]);
    }

    public static function actualizar(Router $router)
    {
        $router->render('actualizar');
    }

    /*  public function agregarCompetidor(){
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $legajo = $_POST['legajo'];
            $apellido = $_POST['apellido'];
            $nombre = $_POST['nombre'];
            $du = $_POST['du'];
            $fechaNacimiento = $_POST['fecha_nacimiento'];
            $pais = $_POST['pais'];
            $graduacion = $_POST['graduacion'];
            $clasificacionGeneral = $_POST['clasificacion'];
            $email = $_POST['email'];
            $genero = $_POST['genero'];

            // $this->modelo->agregarCompetidor($legajo, $apellido, $nombre, $du, $fechaNacimiento, $pais, $graduacion, $clasificacionGeneral, $email, $genero);
        }
    } */

    
}
