"use strict";
var Coche = /** @class */ (function () {
    function Coche(marca, ruedas) {
        this.modelo = "Peugeot 206 cabrio";
        this.ruedas = ruedas;
    }
    return Coche;
}());
var coche = new Coche("Seat ibiza", 5);
var modelo = coche.modelo, ruedas = coche.ruedas;
console.log("Mi marca es " + modelo + " y tiene " + ruedas + " ruedas");
