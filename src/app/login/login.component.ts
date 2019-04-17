import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    // TODO: hash password
    console.log('trying login');
    this.authService.login(this.username, this.password)
    console.log(this.authService.getCurrentUser());
  }

  isAuthenticated(): boolean {
    return (this.authService.getCurrentUser() != null);
  }

}
