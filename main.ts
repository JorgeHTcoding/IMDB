import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";



let professional1 = new Professional("PepitoPalote",65,"Male",71,189,"Castaño","Azul","Caucasico",true,"Irlandés",58,"Actor");
let professional2 = new Professional("Paquita La del Barrio",75,"Female",82,159,"Rubio","Avellana","Caucasico",true,"Mexicana",0,"Cantante");
let professional3 = new Professional("Clint Eastwood",91,"Male",80,190,"Gris","Azul","Caucasico",false,"Estado Unidense",2,"Actor, Director");
let professional4 = new Professional("Donnie Yen",58,"Male",68,173,"Negro","Negro","Asiático",false,"Chino",0,"Actor, Director, Productor");

let movie1 = new Movie("Dune", 2021, "Estado Unidense", "Ciencia Ficción : Space Opera");
let movie2 = new Movie("Star Wars: A new Hope", 1977, "Estado Unidense", "Ciencia Ficción : Space Opera");
let movie3 = new Movie("El Quinto Elemento", 1996, "Francesa - Coproducción Estado Unidense", "Ciencia Ficción");
let movie4 = new Movie("Indiana Johnes", 1967, "Estado Unidense", "Aventura");
let movie5 = new Movie("Ip Man", 2006, "China", "Artes Marciales");
let movie6 = new Movie("Gran Torino", 2008, "Estado Unidense", "Drama Moderno");

let imdb1 = new Imdb([movie1,movie2,movie3])
let imdb2 = new Imdb([movie1,movie2,movie3,movie4,movie5,movie6])

// professional1.consolePrint();
// professional2.consolePrint();
// professional3.consolePrint();
// professional4.consolePrint();


// movie1.consolePrintMovie()

// console.log(imdb1)


//Convertir a JSON el objeto Imdb
const fs = require('fs')
let stringData = JSON.stringify(imdb1)

//Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.
fs.writeFileSync("imdbBBDD.json", stringData);

//Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
fs.readFileSync('./imdbBBDD.json')

//siempre crear una variable nueva de la clase para guardar el objeto que devuelve el json
let imdbJson = new Imdb(JSON.parse(fs.readFileSync('./imdbBBDD.json')))

//llamamos al metodo escribirEnFicheroJSON
// imdb2.escribirEnFicheroJSON("imdbBBDD biblioteca");

console.log(imdb1.obtenerInstanciaIMDB('./imdbBBDD biblioteca'))