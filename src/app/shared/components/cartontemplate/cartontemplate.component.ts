import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Carton } from '../../models/carton.Entity';
import { Casilla } from '../../models/casilla.vo';

@Component({
  selector: 'app-cartontemplate',
  templateUrl: './cartontemplate.component.html',
  styleUrls: ['./cartontemplate.component.scss']
})
export class CartontemplateComponent implements OnInit {

  @Input() carton:Carton;
  indice = [0,1,2,3];
  constructor() { }

  ngOnInit() {

    this.carton = new Carton('123');
  }

  marcarNumero(numero:number){
    if(this.carton){
      this.carton.Casillas.forEach(casilla => {
        if(casilla.Numero==numero){
          casilla.Marcado = true;
        }
      });
    }
  }

  generarNuevo(carton:Carton){
    this.carton = carton;
  }

  getColumna(column:number):Casilla[]{
    if(this.carton){
      return this.carton.Casillas.filter((casilla)=>casilla.coordenada.posX == column);
    }
    return [];
  }
}
