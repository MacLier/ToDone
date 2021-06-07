import { PreparationItem } from "../actual-day/events/preparation-item/preparation-item.component";

export class Event {
    name: string;
    deadline: Date;
    softDeadline: Date;
    repeatable: boolean;
    allDay: boolean;
    taskID: number;
    location?: string;
    members?: string;
    preparations: PreparationItem[];
}