import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../model/user.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  usuario: User = new User;

  constructor(public _loginService: LoginService, public _alumnoService: AlumnoService) { }

  ngOnInit() {
  }

  startSession() {
    this._loginService.login(this.usuario.username, this.usuario.password)
      .subscribe();
    this._alumnoService.getData(this.usuario.username).subscribe();
  }

}
