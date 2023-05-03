<?php 

function conectarDB() : mysqli {
    $db = new mysqli('localhost', 'root', 'root', 'taekwondo');

    if(!$db) {
        echo "Error no se pudo conectar";
        exit;
    } 

    return $db;
    
}