
class Coche{
    modelo:string="Peugeot 206 cabrio";
    ruedas:number;
    
    constructor(marca:string, ruedas:number){
        this.ruedas= ruedas;
    }
}

let coche= new Coche("Seat ibiza", 5);

let {modelo, ruedas}= coche;

console.log(`Mi marca es ${modelo} y tiene ${ruedas} ruedas`);
