import { Component, OnInit } from '@angular/core';
import { EventoBingo } from '../../models/eventoBingo.entity';

@Component({
  selector: 'app-proximo-evento',
  templateUrl: './proximo-evento.component.html',
  styleUrls: ['./proximo-evento.component.scss']
})
export class ProximoEventoComponent implements OnInit {

  evento:EventoBingo;
  weekday = new Array(7);
  months = new Array(12);
  fecha:Date;
  constructor() { }

  ngOnInit() {
    this.evento = new EventoBingo();
    this.evento.FechaInicio = new Date(2021,6);
    this.fecha = this.evento.FechaInicio;
    this.evento.Estado = "Activo";

    this.weekday[0] = "Domingo";
    this.weekday[1] = "Lunes";
    this.weekday[2] = "Martes";
    this.weekday[3] = "Miercoles";
    this.weekday[4] = "Jueves";
    this.weekday[5] = "Viernes";
    this.weekday[6] = "Sábado";

    this.months[0] = "Enero";
    this.months[1] = "Febrero";
    this.months[2] = "Marzo";
    this.months[3] = "Abril";
    this.months[4] = "Mayo";
    this.months[5] = "Junio";
    this.months[6] = "Julio";
    this.months[7] = "Agosto";
    this.months[8] = "Septiembre";
    this.months[9] = "Octubre";
    this.months[10] = "Noviembre";
    this.months[11] = "Diciembre";

  }

}
