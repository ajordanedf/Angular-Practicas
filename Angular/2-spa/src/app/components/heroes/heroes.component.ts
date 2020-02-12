import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]= [];

  constructor(private _heroesService:HeroesService, private router:Router) {
    
  }
  //Se ejecuta justo despues del constructor
  ngOnInit(): void {
    this.heroes= this._heroesService.getHeroes();
  }

  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }
}
