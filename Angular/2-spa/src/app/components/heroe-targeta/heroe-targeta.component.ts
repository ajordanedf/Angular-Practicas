//Se ha importado algo nuevo, Input, Output
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {

  //Avisamos que se use el valor que viene desde fuera, sinó el de defecto que es {}
  @Input() heroe:any={}
  @Input() index:number;
  //El output, decimos que vamos a devolver un entero
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router:Router) { 
    this.heroeSeleccionado= new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // this.router.navigate(['/heroe', this.index]);
    //Heroe seleccionado se convierte en un evento, igual de mansejable que el onclick
    this.heroeSeleccionado.emit(this.index);
  }

}
