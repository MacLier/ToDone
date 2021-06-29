import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnauthorizedUser } from '../models/unauthorizedUser.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'http://localhost:3232/api/login';

  constructor(private http: HttpClient) { }
  create(user): Observable<any> {
    return this.http.post<UnauthorizedUser>(this.url, user)
  }

}
