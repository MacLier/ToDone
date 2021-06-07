import { Component } from "@angular/core";

@Component({
    selector: 'actual-day',
    templateUrl: './actual-day.component.html',
    styleUrls: ['./actual-day.component.css']
})
export class ActualDay {
    timeIsNow: Date = new Date()

    ngOnInit(): void {

        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}