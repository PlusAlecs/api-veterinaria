# CREATE DATABASE IF NOT EXIST veterinaria;
use veterinaria;

/*CREATE TABLE dueno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni CHAR(9),
    nombre VARCHAR(40),
    apellidos VARCHAR(100),
    fecha_nacimiento DATE,
    telefono CHAR(9),
    email VARCHAR(100),
    direccion VARCHAR(60),
    localidad VARCHAR(60),
    codigo_postal CHAR(5),
    acepta_comunicaciones BOOL,
    fecha_alta DATE
);*/

/*CREATE TABLE mascota (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  id_dueno            INT,
  nombre              VARCHAR(50),
  especie             VARCHAR(20),
  raza                VARCHAR(50),
  sexo                CHAR(1),
  fecha_nacimiento    DATE,
  peso_kg             DECIMAL(5,2),
  microchip           CHAR(15),
  color               VARCHAR(30),
  esterilizado        BOOLEAN,
  fecha_alta          DATE,
  fecha_fallecimiento DATE NULL,
  observaciones       TEXT,
  FOREIGN KEY (id_dueno) REFERENCES dueno(id)
);*/

