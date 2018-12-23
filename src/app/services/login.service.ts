import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  acceso: boolean;

  constructor(public http: HttpClient) {
    console.log('Servicio login listo..!!!');
  }

  login(user: string, pass: string) {
    const url = 'http://rest.jcondori.com/Asistencias/v1/alumno/login';
    const headers = new HttpHeaders({
      'Usuario': user,
      'Password': pass
    });
    return this.http.get(url, { headers })
      .map((resp: any) => {
        if (resp === false) {
          console.log('El usuario no existe');
        } else {
          this.acceso = true;
        }
      });
  }

}
