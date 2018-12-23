import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _alumnoService: AlumnoService) {
    this._alumnoService.getData('76350841')
      .subscribe(resp => {
        console.log('Información lista');
        console.log(resp);
      });
  }

  ngOnInit() {
  }

}
