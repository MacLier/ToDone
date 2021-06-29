import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnauthorizedUser } from '../models/unauthorizedUser.model';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  unauthorizedUser: UnauthorizedUser = new UnauthorizedUser("", "", "", "", "")
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  OnLogin() {
    this.loginService.create(this.unauthorizedUser).forEach(
      data => this.router.navigateByUrl('/'))
  }

}
