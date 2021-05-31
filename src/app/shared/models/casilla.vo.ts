import { Coordenada } from "./coordenada.vo";

export class Casilla {

  constructor( public Numero: number,
    public  Marcado: boolean,
    public coordenada: Coordenada,
  ){}
}
