export class Task {
    description: string;
    name: string;
    type: string;
    ID: number;
    UUID: string;
    notification?: Date;
    allDone: boolean;
    timeRequirement: number;
    serialNumber: number;
    important: boolean;
}