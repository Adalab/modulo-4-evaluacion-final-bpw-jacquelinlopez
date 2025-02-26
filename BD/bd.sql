CREATE DATABASE libreria_db;
use libreria_db;

create table autores(
IdAutor int auto_increment primary key not null,
nombre varchar(45) not null,
nacionalidad varchar(45)
);

SELECT * FROM libreria_db.autores;
 INSERT INTO autores (nombre, nacionalidad) VALUES
 ('MIGUEL ANGEL DURAN', 'ESPAÑOL'),
 ('BRYAN TRACY', 'CANADIENSE'),
 ('MELITA KUNZ', 'FRANCESA'),
 ('JAMES CLEAR', 'ESTADOUNIDENSE'),
 ('J.K ROWLING', 'BRITANICA');

create table libros(
Idlibro int auto_increment primary key not null,
titulo varchar(50) not null,
autor_id int not null,
genero varchar(45),
FOREIGN KEY (autor_id) REFERENCES autores(IdAutor)
);

SELECT * FROM libreria.libros;
INSERT INTO libros (titulo, autor_id, genero) VALUES
('Aprendiendo git y gitHub', 1, 'tecnologia'),
('Si lo crees, lo creas', 2, 'motivacion'),
('Gato mundo', 3, 'informativo'),
('habitos atomicos', 4, 'motivacion'),
('harry potter y la piedra filosofal', 5, 'fantasia');