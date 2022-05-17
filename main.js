"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var professional1 = new professional_1.Professional("PepitoPalote", 65, "Male", 71, 189, "Castaño", "Azul", "Caucasico", true, "Irlandés", 58, "Actor");
var professional2 = new professional_1.Professional("Paquita La del Barrio", 75, "Female", 82, 159, "Rubio", "Avellana", "Caucasico", true, "Mexicana", 0, "Cantante");
var professional3 = new professional_1.Professional("Clint Eastwood", 91, "Male", 80, 190, "Gris", "Azul", "Caucasico", false, "Estado Unidense", 2, "Actor, Director");
var professional4 = new professional_1.Professional("Donnie Yen", 58, "Male", 68, 173, "Negro", "Negro", "Asiático", false, "Chino", 0, "Actor, Director, Productor");
var movie1 = new movie_1.Movie("Dune", 2021, "Estado Unidense", "Ciencia Ficción : Space Opera");
var movie2 = new movie_1.Movie("Star Wars: A new Hope", 1977, "Estado Unidense", "Ciencia Ficción : Space Opera");
var movie3 = new movie_1.Movie("El Quinto Elemento", 1996, "Francesa - Coproducción Estado Unidense", "Ciencia Ficción");
var movie4 = new movie_1.Movie("Indiana Johnes", 1967, "Estado Unidense", "Aventura");
var movie5 = new movie_1.Movie("Ip Man", 2006, "China", "Artes Marciales");
var movie6 = new movie_1.Movie("Gran Torino", 2008, "Estado Unidense", "Drama Moderno");
var imdb1 = new imdb_1.Imdb([movie1, movie2, movie3]);
var imdb2 = new imdb_1.Imdb([movie1, movie2, movie3, movie4, movie5, movie6]);
// professional1.consolePrint();
// professional2.consolePrint();
// professional3.consolePrint();
// professional4.consolePrint();
// movie1.consolePrintMovie()
// console.log(imdb1)
//Convertir a JSON el objeto Imdb
var fs = require('fs');
var stringData = JSON.stringify(imdb1);
//Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.
fs.writeFileSync("imdbBBDD.json", stringData);
//Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
fs.readFileSync('./imdbBBDD.json');
//siempre crear una variable nueva de la clase para guardar el objeto que devuelve el json
var imdbJson = new imdb_1.Imdb(JSON.parse(fs.readFileSync('./imdbBBDD.json')));
//llamamos al metodo escribirEnFicheroJSON
// imdb2.escribirEnFicheroJSON("imdbBBDD biblioteca");
console.log(imdb1.obtenerInstanciaIMDB('./imdbBBDD biblioteca'));
