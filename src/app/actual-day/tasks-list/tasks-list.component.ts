import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { ShoppingList } from 'src/app/models/shoppingList.model';
import { ToDo } from 'src/app/models/todo.model';
import { Task } from './../../models/task.model'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [
    new ToDo("My first todo for today", "Learn one hour when you wake up", "todo", 1, [{ name: "turn on the light" }, { name: "get a book" }, { name: "read" }]),
    new ToDo("My second todo for today", "Make your bed", "todo", 2, [{ name: "get up" }, { name: "adjust your pillow" }, { name: "adjust your blanket" }]),
    new ShoppingList("My third todo for today", "From the SHOP", "shoppingList", 3, [{ name: "krumpli" }, { name: "kenyér" }, { name: "Sör" }]),
    new Event("My fourth todo for today", "Nyári Tábor", "event", 4, [{ name: "karakternyomtatás" }, { name: "Hűtő bepakolás" }, { name: "SÖR" }]),
  ];
  tasktype: string = ""

  constructor() { }

  ngOnInit() {
  }

}
