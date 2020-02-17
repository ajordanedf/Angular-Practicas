import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
  
    this.router.parent.params.subscribe(parametros=>{
      console.log("Ruta padre");
      console.log(parametros)
    })

  }

  ngOnInit(): void {
  }

}
