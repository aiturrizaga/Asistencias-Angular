import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnos: any[] = [];

  constructor(public http: HttpClient) { }

  getData(codAlum: string) {
    const url = `http://rest.jcondori.com/Asistencias/v1/alternancia/detalle/${codAlum}`;
    return this.http.get(url)
      .map((resp: any) => {
        this.alumnos = resp.alumno;
        return this.alumnos;
      });
  }

}
