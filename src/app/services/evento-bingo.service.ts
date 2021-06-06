import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { EventoBingo } from '../shared/models/eventoBingo.entity';

@Injectable({
  providedIn: 'root'
})
export class EventoBingoService {

  constructor(private http: HttpClient) {
  }

  getEventos():Observable<ObtenerUltimoEventoResponse>{
    return this.http.get<ObtenerUltimoEventoResponse>(baseUrl+'/api/Evento/');
  }
}

export interface ObtenerUltimoEventoResponse{
  estado:number,
  evento:EventoBingo,
}
