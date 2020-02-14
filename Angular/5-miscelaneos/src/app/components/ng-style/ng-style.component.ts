import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamany">
      Hola mundo, esto es una etiqueta
    </p>
    <button class="btn btn-primary">
      <i class="fa fa-plus" (click)="tamany= tamany + 5;"></i>
    </button>
    <button class="btn btn-primary ml-3" (click)="tamany= tamany - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamany:number= 50; 
  constructor() { }

  ngOnInit(): void {
  }

}
