import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
