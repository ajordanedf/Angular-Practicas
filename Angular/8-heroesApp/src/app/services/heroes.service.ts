import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url="https://fir-proyect-82d51.firebaseio.com";
  constructor(private http:HttpClient) { }


  crearHeroe(heroe: HeroeModel){
    //Realizamos una consulta a una base de datos creada en firebase, primer acgumento el json, segundo argumento objeto donde se escribe el JSON
    //2) pipe()función en RxJS : puede usar tuberías para unir operadores. Los tubos le permiten combinar múltiples funciones en una sola función
    //map transforma lo que un observador puede regresr
    return this.http.post(`${this.url}/heroes.json`, heroe)
    .pipe(map((resp:any)=>{
      heroe.id= resp.name;
      return heroe;
    }));
  }

  actualizarHeroe(heroe:HeroeModel){
    //IMPORTANTE
    //No podemos igual un objeto a otro en JS lo que se hace es copiar la referencia
    //Por ello usamos:
    const heroeTemp= {
      ...heroe
    };
    delete heroeTemp.id;
    console.log(heroeTemp);
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

}
