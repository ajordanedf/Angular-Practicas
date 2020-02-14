//ng g d resaltado para hacer una directiva
//Directive sirve para hacer directiva normal
//ElementRef para hacer referencia al elemento llamado
//HostListener es un evento de escucha los eventos 
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    //Con la referencia al elemento editamos su css
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.el.nativeElement.style.backgroundColor=this.nuevoColor;
  }
  
  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor=null;
  }
}