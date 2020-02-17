import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
  
    //Para acceder a los parámetros que tiene el padre, podemos usar router.parent
    this.router.parent.params.subscribe(parametros=>{
      console.log("Ruta padre");
      console.log(parametros)
    })

  }

  ngOnInit(): void {
  }

}
