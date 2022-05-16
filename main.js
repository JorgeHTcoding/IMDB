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
var imdb1 = new imdb_1.Imdb([movie1, movie2, movie3]);
// professional1.consolePrint();
// professional2.consolePrint();
// professional3.consolePrint();
// professional4.consolePrint();
// movie1.consolePrintMovie()
// console.log(imdb1)
var fs = require('fs');
var string = JSON.stringify(imdb1);
fs.writeFileSync("imdbBBDD.json", string);
