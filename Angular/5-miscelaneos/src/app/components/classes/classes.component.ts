import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  alerta:string="alert-danger";

  propiedades={
    danger:false
  }


  constructor() { }

  ngOnInit(): void {
  }

}
