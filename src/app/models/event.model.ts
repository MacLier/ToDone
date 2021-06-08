import { PreparationItem } from "../models/preparationItem.model";
import { Task } from "../models/task.model";

export class Event extends Task {
    deadline?: Date;
    softDeadline?: Date;
    repeatable?: boolean;
    allDay?: boolean;
    location?: string;
    members?: string;
    preparations?: Array<PreparationItem>;
}