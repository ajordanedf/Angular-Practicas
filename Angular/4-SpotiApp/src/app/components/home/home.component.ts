import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises:any[]=[];
  constructor(private http:HttpClient) {
      
      console.log('Constructor HOME activado');
      this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((paises:any[])=>{
        this.paises= paises;
      });

   }

  ngOnInit(): void {
  }

}
