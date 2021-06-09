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
    constructor(description: string, taskName: string, type: string, ID: number, steps: Array<PreparationItem>) {

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