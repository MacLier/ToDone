import { Task } from "../interfaces/task.interface";
import { ShoppingProduct } from "./shoppingProduct.model";

export class ShoppingList implements Task {
    description: string;
    type: string;
    ID: number;
    UUID?: string
    allDone?: boolean;
    timeRequirement?: number;
    serialNumber?: number;
    important?: boolean;
    name: string;
    products?: ShoppingProduct[];
}