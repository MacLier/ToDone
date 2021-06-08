import { Step } from "./step.model";
import { Task } from "./../interfaces/task.interface"

export class ToDo implements Task {
    description: string;
    type: string;
    ID: number;
    UUID?: string
    allDone?: boolean;
    timeRequirement?: number;
    serialNumber?: number;
    important?: boolean;
    name: string;
    deadline?: Date;
    softDeadline?: Date;
    startDate?: Date;
    repeatable?: boolean;
    steps?: Step[]
}