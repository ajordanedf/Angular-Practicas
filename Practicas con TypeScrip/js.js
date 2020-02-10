"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coche_class_1 = require("./clases/Coche.class");
var coche = new Coche_class_1.Coche("Seat ibiza", 5);
var modelo = coche.modelo, ruedas = coche.ruedas;
console.log("Mi marca es " + modelo + " y tiene " + ruedas + " ruedas");
