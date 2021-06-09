import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.css']
})
export class ShoppingsComponent implements OnInit {
  @Input() shoppingList: Task
  constructor() { }

  ngOnInit() {
  }

}
