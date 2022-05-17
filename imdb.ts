import {Movie} from "./movie";

const fs = require('fs')



export class Imdb {

    public peliculas:Movie[];

    constructor(peliculas:Movie[]){

    this.peliculas = peliculas;
  
    }

    //Crear un método en la clase Imdb denominado escribirEnFicheroJSON(nombreFichero: string) que tome el nombre de un fichero como parámetro de entrada y 
    //genere un fichero json con toda la información de la base de datos.


    public escribirEnFicheroJSON(nombreFichero: string):JSON{      

        
      let biblioCompleta = JSON.stringify(this)

      return fs.writeFileSync(nombreFichero, biblioCompleta)
     
    }

    //Crear un método de la clase Imdb denominado obtenerInstanciaIMDB(nombreFichero:string):Imdb 
    //que devuelva un objeto de la clase Imdb creado a partir del fichero.
 
    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
      
     
      fs.readFileSync(nombreFichero);

     //let pruebaImdb = new Imdb(fs.readFileSync(nombreFichero))

      for(let value in (JSON.parse(fs.readFileSync(nombreFichero)))){
      return (JSON.parse(fs.readFileSync(nombreFichero)))[value]
      }
    }
      
    }


