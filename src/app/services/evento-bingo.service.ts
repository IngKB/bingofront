import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoBingoService {

  constructor(private http: HttpClient) {
  }

  getEventos(){
    // let body:Request={usuario:usuario,jugador:jugador};
    // return this.http.post<DefaultResponse>(baseUrl+'/api/Jugador/', body);
  }
}
