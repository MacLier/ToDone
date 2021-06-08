import { Component } from "@angular/core";



@Component({
    selector: 'actual-day',
    templateUrl: './actual-day.component.html',
    styleUrls: ['./actual-day.component.css']
})
export class ActualDay {
    timeIsNow: Date = new Date();
    /*tasks: Task[] = [
        {
            name: "inni",
            description: "min 2 litert",
            type: "todo",
            ID: 1,
            UUID: "nagyonelso",
            allDone: false,
            timeRequirement: 15,
            serialNumber: 2,
            important: true

        },
        {
            name: "enni",
            description: "min 2 litert",
            type: "todo",
            ID: 2,
            UUID: "nagyonelso",
            allDone: false,
            timeRequirement: 30,
            serialNumber: 3,
            important: true

        }
    ]*/

    ngOnInit(): void {

        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}