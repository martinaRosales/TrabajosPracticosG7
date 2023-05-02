<?php

namespace MVC;

class Router{

    public $rutasGET = [];
    public $rutasPOST = [];

    public function get($url, $funcion){
        $this->rutasGET[$url] = $funcion;
    }

    public function post($url, $funcion){
        $this->rutasPOST[$url] = $funcion;
    }
    
    public function comprobarRutas(){
       $urlActual = $_SERVER['PATH_INFO'] ?? '/';
       $metodo = $_SERVER['REQUEST_METHOD'];

       if($metodo === 'GET'){
        $funcion = $this->rutasGET[$urlActual] ?? null;
       }else{
        $funcion = $this->rutasPOST[$urlActual] ?? null;
       }

       if($funcion){
        call_user_func($funcion, $this);
       }else{
        echo 'Pagina no encontrada';
       }
    }

    
    public function render($view, $datos = []){
        foreach($datos as $key => $value){
            $$key = $value;
        }
            
        ob_start(); // Almacenamiento en memoria durante un momento...
        include __DIR__ . "/Views/$view.php";

        $contenido = ob_get_clean(); // Limpia el buffer

        include __DIR__ . "/Views/layout.php";
    }

}