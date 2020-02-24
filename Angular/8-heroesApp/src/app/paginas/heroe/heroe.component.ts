import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel= new HeroeModel();

  //Nos devuelve un json con el Héroe
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  guardar(form:NgForm){
    if(form.invalid){
      console.log("El formulario no es valido");
      return;
    }


    if(this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe).subscribe(resp=>{
        console.log(resp);
      })
    }else{
      this.heroesService.crearHeroe(this.heroe).subscribe(resp=>{
        console.log(resp);
      });
    }
  }



  chupaMelaBasico(){
    //Sweet alert basico
    Swal.fire("Sweet Alert To guapa");
  }

  //En iconos de imagen tenemos los de: (error, success, info) (todas las clases de bootstrap de colores)
  chupaMela2(){
    Swal.fire({
      icon: 'success',
      title: 'Mensaje de error',
      text: 'Este es un sweet alert de prueba'
    });
  }
  //Swal con imagen
  chupaMela3(){
    Swal.fire({
      title: 'Thor vs Jormungand',
      imageUrl: 'https://supercurioso.com/wp-content/uploads/2018/07/J%C3%B6rmundgander.jpg',
      imageHeight: 500,
      imageAlt: 'A tall image'
    });
  }
  chupaMela4(){
    Swal.fire({
      title:'Sweet desde otra posicion',
      icon: 'warning',
      position: 'bottom-right'
    });
  }
  //ShowClass para las animaciones del popup al entrar y hideClass pues al revés
  chupaMela5(){
    Swal.fire({
      title:'Sweet con animate CSS ',
      icon: 'info',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      }
    });
  }
  chupaMela6(){
    Swal.fire({
      title:'Sweet con animate CSS ',
      icon: 'info',
      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      }
    });
  }

}
