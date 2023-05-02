CREATE DATABASE taekwondo;

CREATE TABLE competidor(
    gal VARCHAR(10) NOT NULL PRIMARY KEY,
    apellido VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    du VARCHAR(18) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    pais VARCHAR(20) NOT NULL,
    graduacion ENUM('1ro GUP','2do GUP','3ro GUP','4to GUP','5to GUP','6to GUP','7mo GUP','8vo GUP','9no GUP','10mo GUP','1ro DAN','2do DAN','3ro DAN','4to DAN','5to DAN','6to DAN','7mo DAN','8vo DAN','9no DAN'),
    clasificacion_general VARCHAR(3) NOT NULL,
    email VARCHAR(50) NOT NULL,
    genero ENUM('Masculino','Femenino')
);