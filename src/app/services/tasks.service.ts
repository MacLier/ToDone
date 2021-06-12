import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url: string = 'http://localhost:3232/api';

  constructor(private http: HttpClient) { }

  read(): Observable<any> {
    return this.http.get(this.url);
  }
  create(task): Observable<any> {
    console.log("POST from taskService" + JSON.stringify(task));
    return this.http.post<Task>(this.url, task);

  }
  updateTask(task): Observable<any> {
    console.log("PUT from taskService");
    return this.http.put<Task>(this.url, task);
  }
  deleteTask(task): Observable<any> {
    console.log("DELETE from taskService");
    return this.http.delete<Task>(`${this.url}/${task.ID}`)
  };
}

