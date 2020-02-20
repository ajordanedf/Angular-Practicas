import { Component, OnInit } from '@angular/core';
//Hemos añadido ReactiveFormsModule en el app module
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario={
    nombreCompleto:{
      nombre:"Toni",
      apellido:"Jordan"
    },
    correo: "tonijordan@gmail.com"
  }
  constructor() {
    this.forma= new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl(this.usuario.nombreCompleto.nombre , [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    });

    //Con esto escribimos un objeto entero en lugar de ir asignando uno a uno
    this.forma.setValue(this.usuario);


   }

  ngOnInit(): void {
  }

  guardarCambios(){
    console.log(this.forma);
    console.log(this.forma.value);

    //Para devolver el formulario a su estado inicial de clases como si no se hubiera tocado
    //con los datos del objeto usuario
    this.forma.reset(this.usuario);
  }

}
