import { Component, Input, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/models/shoppingList.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.css']
})
export class ShoppingsComponent implements OnInit {
  @Input() products: ShoppingList[]
  constructor() { }

  ngOnInit() {
  }

}
