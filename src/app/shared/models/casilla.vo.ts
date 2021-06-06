import { Coordenada } from "./coordenada.vo";

export class Casilla {

  constructor( public numero: number,
    public  marcado: boolean,
    public coordenada: Coordenada,
  ){}
}
