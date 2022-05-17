
//hemos instalado prompt-sync en NodeJs con el comando "npm install prompt-sync" para poder hacer funcionalidad de prompt :D
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


const prompt = require('prompt-sync')();
let title:string = prompt("Introduce el título: ");
let releaseYear:number = prompt("Introduce el añor en el que salió: ");
let actors:Professional[] = prompt("Introduce los actores separados por comas entre corchetes: ");
let nationality:string = prompt("Introduce la nacionalidad de la película: ");
let director:string = prompt("Introduce el director: ");
let writer:string = prompt("Introduce el guionista: ");
let language:string = prompt("Introduce el idioma de la versión original de la película: ");
let platform:string = prompt("Introduce la plataforma en la que se retransmite: ");
let isMCU:boolean = prompt("Introduce true or false si pertenece al universo de marvel: ");
let mainCharacterName:string = prompt("Introduce el nombre del personaje principal: ");
let producer:string = prompt("Introduce la productora: ");
let distributor:string = prompt("Introduce el distribuidor: ");
let genre:string = prompt("Introduce el género de la película: ");

let movie:Movie = new Movie(title,releaseYear,nationality,genre);

movie.actors = actors;
movie.director = director;
movie.writer = writer;
movie.language = language;
movie.platform = platform;
movie.isMCU = isMCU;
movie.mainCharacterName = mainCharacterName;
movie.producer = producer;
movie.distributor = distributor;


let inputMovie:Imdb = new Imdb([]);
inputMovie.peliculas.push(movie)

inputMovie.escribirEnFicheroJSON('./imdbBBDD.json');



