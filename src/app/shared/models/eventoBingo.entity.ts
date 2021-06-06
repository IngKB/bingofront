import { PartidoBingo } from "./partidaBingo.entity";

export class EventoBingo{
  id:number;
  FechaInicio:Date;
  Estado:String;
  Partidas:PartidoBingo[];
}
