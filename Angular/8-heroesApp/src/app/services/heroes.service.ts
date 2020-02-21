import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url="https://fir-proyect-82d51.firebaseio.com";
  constructor(private http:HttpClient) { }


  crearHeroe(heroe: HeroeModel){
    //Realizamos una consulta a una base de datos creada en firebase, primer acgumento el json, segundo argumento objeto donde se escribe el JSON
    return this.http.post(`${this.url}/heroes.json`, heroe);
  }

}
