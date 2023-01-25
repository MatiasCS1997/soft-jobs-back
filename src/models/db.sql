-- Creando la Base de Datos
CREATE DATABASE softjobs;

-- Accediendo a la Base de Datos
\c softjobs;

CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password
VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );