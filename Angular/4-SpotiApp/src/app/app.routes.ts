import { Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


export const ROUTES: Routes = [
    { path: 'artista', component: ArtistaComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];
