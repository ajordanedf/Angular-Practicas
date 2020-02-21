import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './paginas/heroe/heroe.component';
import { HeroesComponent } from './paginas/heroes/heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
