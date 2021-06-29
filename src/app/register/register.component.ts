import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User('', '', '', '', '')

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }
  OnCreateNewUser() {
    console.log(this.newUser);

    this.registerService.create(this.newUser).forEach(
      data => this.router.navigateByUrl('/')
    )
  }

}
