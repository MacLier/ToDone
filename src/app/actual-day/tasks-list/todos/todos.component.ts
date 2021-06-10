import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() steps: ToDo[]

  constructor() {
  }

  ngOnInit() {

  }

}
