import { PartidoBingo } from "./partidaBingo.entity";

export class EventoBingo{
  id:number;
  fechaInicio:Date;
  estado:String;
  partidas:PartidoBingo[];
}
