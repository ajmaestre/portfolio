import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmail } from '../interfaces/IEmail';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMail(data: IEmail): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/email/send`, data).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

}
