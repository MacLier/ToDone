import { Step } from "./step.model";
import { Task } from "./task.model"

export class ToDo extends Task {
    deadline?: Date;
    softDeadline?: Date;
    startDate?: Date;
    repeatable?: boolean;
    steps: Array<Step>;
    constructor(description: string, taskName: string, type: string, ID: number, steps: Array<Step>) {

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