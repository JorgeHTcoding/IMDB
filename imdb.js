"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    //Crear un método en la clase Imdb denominado escribirEnFicheroJSON(nombreFichero: string) que tome el nombre de un fichero como parámetro de entrada y 
    //genere un fichero json con toda la información de la base de datos.
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var biblioCompleta = JSON.stringify(this);
        return fs.writeFileSync(nombreFichero, biblioCompleta);
    };
    //Crear un método de la clase Imdb denominado obtenerInstanciaIMDB(nombreFichero:string):Imdb 
    //que devuelva un objeto de la clase Imdb creado a partir del fichero.
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        fs.readFileSync(nombreFichero);
        //let pruebaImdb = new Imdb(fs.readFileSync(nombreFichero))
        for (var value in (JSON.parse(fs.readFileSync(nombreFichero)))) {
            return (JSON.parse(fs.readFileSync(nombreFichero)))[value];
        }
    };
    return Imdb;
}());
exports.Imdb = Imdb;
