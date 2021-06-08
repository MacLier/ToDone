import { Task } from "./task.model";
import { ShoppingProduct } from "./shoppingProduct.model";

export class ShoppingList extends Task {
    shop?: string
    products?: Array<ShoppingProduct>;

}