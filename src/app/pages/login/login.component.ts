import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(public _loginService: LoginService) { }

  ngOnInit() {
  }

  startSession() {
    this._loginService.login(this.user, this.pass)
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
