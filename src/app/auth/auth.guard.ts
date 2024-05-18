import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
import { IsAuth } from '../interfaces/isAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private guardService: AuthService){}

  canActivate() {
    return this.guardService.isAuth().pipe(map(
      (res: IsAuth) => {
        return res.response;
      }
    ));
  }
  
}