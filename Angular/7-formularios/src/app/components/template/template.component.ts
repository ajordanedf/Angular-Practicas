import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Usuario={
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "",
    acepta: false
  }

  sexos=["Hombre", "Mujer"]

  paises=[{
    codigo: "ESP",
    nombre: "España"
  },
  {
    codigo: "ENG",
    nombre: "Gran Bretaña"
  }]


  constructor() { }

  ngOnInit(): void {}

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("Mi formulario:");
    console.log(forma);
    console.log(forma.value);
  }

}

interface Usuario {
  nombre:string;
  apellido:string;
  correo:string;
  pais:string,
  sexo:string,
  acepta:boolean
}