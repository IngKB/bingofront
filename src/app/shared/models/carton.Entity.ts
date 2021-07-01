import { Casilla } from "./casilla.vo";
import { Coordenada } from "./coordenada.vo";

export class Carton{
  casillas:Casilla[];
  JugadorId:string;
  EventoId:number;

  constructor(jugadorId:string, evento:number, casillas?:Casilla[]){
    this.EventoId = evento;
    this.JugadorId = jugadorId;
    this.GenerarCasillas();
  }



  private GenerarCasillas(){
    this.casillas = [];
    let cont = 0;
    let max = 15;
    let min = 0;
    let numeros:number[] = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let num = 0;
        do{
          num = Math.floor(Math.random() * (max - min)+1) + min;
        }while(this.estaRepetido(num,numeros));
        numeros[(i*5)+j] =num;
      }
      max += 15;
      min += 15;
    }
    numeros.sort((a,b)=>a-b);
    max = 15;
    min = 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let num = numeros[(i*5)+j];
        if(i==2 && j==2){
          num = 0;
        }
        this.casillas[cont] = new Casilla(num,false,new Coordenada(i,j));
        cont++;
      }
      max += 15;
      min += 15;
    }
  }

  private estaRepetido(numero:number, numeros:number[]):boolean{
    let repetido = false;
    numeros.forEach(num => {
      if(num == numero) repetido = true;
    });
    return repetido;
  }
}
