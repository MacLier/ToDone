import { Task } from "./task.model";
import { ShoppingProduct } from "./shoppingProduct.model";

export class ShoppingList extends Task {
    shop?: string
    products?: Array<ShoppingProduct>;
    constructor(description: string, taskName: string, type: string, ID: number, steps: Array<ShoppingProduct>) {

        super(description, taskName, type, ID);
        this.description = description;
        this.taskName = taskName;
        this.type = type;
        this.ID = ID;
        // this.UUID = UUID;
        // this.notification = notification;
        // this.allDone = allDone;
        // this.timeRequirement = timeRequirement;
        // this.serialNumber = serialNumber;
        // this.important = important;

    }
}