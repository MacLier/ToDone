import { Step } from "./step.model";

export class ToDo {
    name: string;
    taskID: number;
    deadline: Date;
    softDeadline: Date;
    startDate: Date;
    repeatable: boolean;
    steps: Step[]
}