import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-propuesta',
  templateUrl: './actividad-propuesta.component.html',
  styleUrls: ['./actividad-propuesta.component.scss'],
})
export class ActividadPropuestaComponent implements OnInit {
  developApp: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  setDevelopApp(): void {
    this.developApp = true;
  }
}
