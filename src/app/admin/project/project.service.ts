import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.BASE_URL}/project/list`);
  }

}
