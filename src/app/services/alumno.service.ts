import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(public http: HttpClient) {
    console.log('Servicio Alumno listo..!!!');
  }

  getData() {
    const url = 'http://rest.jcondori.com/Asistencias/v1/alternancia/detalle/76350841/A';
    this.http.get(url)
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
