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
    this.carton = new Carton(' ',0);
  }

  marcarNumero(numero:number){
    if(this.carton && this.carton.casillas){
      this.carton.casillas.forEach(casilla => {
        if(casilla.numero==numero){
          casilla.marcado = true;
        }
      });
    }
  }

  generarNuevo(carton:Carton){
    this.carton = carton;
  }

  getColumna(column:number):Casilla[]{

    if(this.carton){
      return this.carton.casillas.filter((casilla)=>casilla.coordenada.posX == column);
    }else{
      console.log("get column nul");
    }
    return [];
  }
}
