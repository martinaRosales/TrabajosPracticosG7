<?php

namespace Model;

class Competidor extends ActiveRecord{
    protected static $tabla = 'competidor';
    protected static $columnasDB = ['gal', 'apellido', 'nombre', 'du', 'fecha_nacimiento', 'pais', 'graduacion', 'clasificacion_general', 'email', 'genero'];

    public $gal;
    public $apellido;
    public $nombre;
    public $du;
    public $fecha_nacimiento;
    public $pais;
    public $graduacion;
    public $clasificacion_general;
    public $email;
    public $genero;

    public function __construct($args = [])
    {
        $this->nombre = $args['nombre'] ?? '';
        $this->apellido = $args['apellido'] ?? '';
        $this->du = $args['du'] ?? '';
        $this->fecha_nacimiento = $args['fecha-nacimiento'] ?? '';
        $this->pais = $args['pais'] ?? '';
        $this->email = $args['email'] ?? '';
        $this->genero = $args['genero'] ?? '';
        $this->gal = $args['gal'] ?? null;
        $this->graduacion = $args['graduacion'] ?? '';
        $this->clasificacion_general = $args['clasificacion'] ?? '';
    }

    public function existeCompetidor() {
        // Revisar si el usuario existe.
        $query = "SELECT * FROM " . self::$tabla . " WHERE gal = '" . $this->gal . "' LIMIT 1";
        $resultado = self::$db->query($query);

        if(!$resultado->num_rows) {
            self::$errores[] = 'El Competidor No Existe';
            return;
        }

        return $resultado;
    }

    public function validar() {

        if(!$this->gal) {
            self::$errores[] = "Ingrese su gal";
        }

        if(!$this->apellido) {
            self::$errores[] = 'Apellido requerido';
        }

        if(!$this->nombre) {
            self::$errores[] = 'Nombre requerido';
        }

        if(!$this->du) {
            self::$errores[] = 'DU requerido';
        }

        if(!$this->fecha_nacimiento) {
            self::$errores[] = 'Fecha de nacimiento requirida';
        }

        if(!$this->pais) {
            self::$errores[] = 'El pais es requerido';
        }

        if(!$this->graduacion) {
            self::$errores[] = 'Su graduacion es requerida';
        }

        if(!$this->clasificacion_general) {
            self::$errores[] = 'Su clasificacion es requerida';
        }
        
        if(!$this->email) {
            self::$errores[] = 'El email es requerido';
        }

        if(!$this->genero) {
            self::$errores[] = 'Seleccionar un genero';
        }

        return self::$errores;
    }
}
