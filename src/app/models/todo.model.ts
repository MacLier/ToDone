import { Step } from "./step.model";
import { Task } from "./task.model"

export class ToDo extends Task {
    deadline?: Date;
    softDeadline?: Date;
    startDate?: Date;
    repeatable?: boolean;
    steps?: Array<Step>;
}