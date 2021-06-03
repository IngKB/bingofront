import { Component, OnInit } from '@angular/core';
import { Casilla } from '../../models/casilla.vo';
import { Coordenada } from '../../models/coordenada.vo';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  B:Casilla[]=[];
  indice = [0,1,2,3,4];

  constructor() { }

  ngOnInit() {

    let cont = 1;
    for(let i = 0; i <= 5; i++){
      for (let j = 1; j <= 15; j++) {
        this.B.push(new Casilla(cont,false,new Coordenada(i,j)));
        cont++;
      }
    }

  }


  getFila(column:number):Casilla[]{
    return this.B.filter((casilla)=>casilla.coordenada.posX == column);
  }
}
