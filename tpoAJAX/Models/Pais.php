<?php

namespace Model;

class Pais extends ActiveRecord{
    protected static $tabla = 'pais';
    protected static $columnasDB = ['id', 'paisnombre'];

    public $id;
    public $paisnombre;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? '';
        $this->paisnombre = $args['paisnombre'] ?? '';
    }

    //get y set
    public function getIdPais(){return $this->id; }
    public function setIdPais($idPais){$this->id = $idPais;}
    
    public function getPaisNombre(){return $this->paisnombre; }
    public function setPaisNombre($PaisNombre){$this->paisnombre = $PaisNombre; }

    public function actualizar() {

        // Sanitizar los datos
        $atributos = $this->sanitizarAtributos();

        $valores = [];
        foreach($atributos as $key => $value) {
            $valores[] = "{$key}='{$value}'";
        }

        $query = "UPDATE " . static::$tabla ." SET ";
        $query .=  join(', ', $valores );
        $query .= " WHERE id = '" . self::$db->escape_string($this->getIdPais()) . "' ";
        $query .= " LIMIT 1 "; 

        $resultado = self::$db->query($query);

        return $resultado;
    }



}
