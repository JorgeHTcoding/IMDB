"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = null;
        this.nacionality = nacionality;
        this.director = null;
        this.writer = null;
        this.language = null;
        this.platform = null;
        this.isMCU = null;
        this.mainCharacterName = null;
        this.producer = null;
        this.distributor = null;
        this.genre = genre;
    }
    Movie.prototype.setActors = function () {
    };
    Movie.prototype.consolePrintMovie = function () {
        for (var value in this) {
            if (value != null) {
                console.log(this);
            }
            else {
                console.log(this);
            }
        }
    };
    return Movie;
}());
exports.Movie = Movie;
