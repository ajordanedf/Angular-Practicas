import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService){}

  canActivate(
    //Es la ruta a la que va a ir 
    next: ActivatedRouteSnapshot,
    //RouterStateSnapshot dice las rutas que estan activas
    //El obserbable hace que se espere a que el usuario esté suscrito y ahí devuelve el authservice
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  
}
