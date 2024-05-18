import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IsAuth } from '../interfaces/isAuth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuth(): Observable<IsAuth>{
    return this.http.get<IsAuth>(`${environment.BASE_URL}/user/is-auth`, {
      headers: new HttpHeaders({'x-access-token': `${this.getToken()}`})
    }).pipe(
      tap(
        (res: IsAuth) => {
          if(res.response)
            return res.response;
            this.router.navigate(['/']);
            return false;
        },
        (err) => {
          this.router.navigate(['/']);
          return err.error.response;
        }
      )
    );
  }

  getToken(): string{
    const tkn: string = localStorage.getItem('tkn') || '';
    return tkn;
  }

}
