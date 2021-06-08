import { PreparationItem } from "../models/preparationItem.model";
import { Task } from "../interfaces/task.interface";

export class Event implements Task {
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
    repeatable?: boolean;
    allDay?: boolean;
    location?: string;
    members?: string;
    preparations?: PreparationItem[];
}