import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url: string = 'http://localhost:3232/api/register';

  constructor(private http: HttpClient) { }
  create(user): Observable<any> {
    console.log(user);
    return this.http.post<User>(this.url, user)

  }

}