import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
    console.log('Servicio login listo..!!!');
  }

  login() {
    const url = 'http://rest.jcondori.com/Asistencias/v1/alumno/login';
    const headers = new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'content-type, if-none-match',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Max-Age': '3600',
      'Usuario': '76350841',
      'Password': '76350841'
    });
    this.http.get(url, { headers })
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
