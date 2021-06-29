import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: boolean = true;
  autheticated: boolean = false;
  autentication: string = ''
  description: string = "This is ToDone app first view"
  title = 'ToDone';
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(document.cookie);

  }

  changeLogin() {
    if (!this.login) {
      this.login = true;
    } else {
      this.login = false
    }
  }
}
