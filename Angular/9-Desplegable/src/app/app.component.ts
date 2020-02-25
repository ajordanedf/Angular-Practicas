import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appDesplegable';

  ngOnInit(): void {
    console.log("Estamos en producción");
  }
}
