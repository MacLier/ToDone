export class Task {
    description: string;
    taskName: string;
    type: string;
    ID?: number;
    UUID?: string;
    notification?: Date;
    allDone?: boolean;
    timeRequirement?: number;
    serialNumber?: number;
    important?: boolean;

    constructor(desc: string, taskName: string, type: string, ID: number) {
        this.description = desc;
        this.taskName = taskName;
        this.type = type;
        this.ID = ID;
    }
}