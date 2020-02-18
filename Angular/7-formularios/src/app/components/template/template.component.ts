import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Usuario={
    nombre: "Antonio",
    apellido: "Jordan",
    correo:"toni@gmail.com"
  };


  constructor() { }

  ngOnInit(): void {}

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("Mi formulario:");
    console.log(forma.value);
  }

}

interface Usuario {
  nombre:string;
  apellido:string;
  correo:string;
}