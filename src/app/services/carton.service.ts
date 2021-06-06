import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carton } from '../shared/models/carton.Entity';
import { DefaultResponse } from './DefaultResponse';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartonService {

  constructor(private http: HttpClient) { }

  comprarCarton(carton:Carton):Observable<DefaultResponse>{
    let body:ComprarCartonRequest={carton:carton};
    return this.http.post<DefaultResponse>(baseUrl+'/api/Carton/', body);
  }

  obtenerCartones(jugadorId:string):Observable<ObtenerCartonesRespose>{
    return this.http.get<ObtenerCartonesRespose>(baseUrl+'/api/Carton/jugador/' + jugadorId);
  }
}

export interface ComprarCartonRequest{
  carton:Carton,
}

export interface ObtenerCartonesRespose{
  estado:number,
  cartones:Carton[]
}
