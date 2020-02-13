import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Fernando";
  PI= Math.PI;
  json={
    "Apellidos":"Jordan",
    "Edad": 20,
    "Conocimientos":{
      "Angular":3,
      "Java":8
    }
  }
  video="bNBzOiavw_4";
  nombre2= "fgobmdoOIRNONROofvmodvmOFKc bopscomODO";

  valorDePromesa= new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Llego la data!"), 3500);
  });


}
