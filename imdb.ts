import {Movie} from "./movie";


export class Imdb {

    public peliculas:Movie[];

    constructor(peliculas:Movie[]){

  this.peliculas = peliculas;
  
    }
}