import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  alerta:string="alert-danger";
  loading:boolean= false;

  propiedades={
    danger:false
  }


  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading= true;
    setTimeout( ()=> this.loading= false,  3000)
  }

}
