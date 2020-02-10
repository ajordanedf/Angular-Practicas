
import { Coche } from "./clases/Coche.class";

let coche= new Coche("Seat ibiza", 5);

let {modelo, ruedas}= coche;

console.log(`Mi marca es ${modelo} y tiene ${ruedas} ruedas`);
