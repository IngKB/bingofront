import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  constructor(private http: HttpClient) { }

  marcarNumero(numero:number): Observable<any> {
    let body:MarcarNumeroRequest={numero:numero};
    return this.http.post<any>(baseUrl+'/api/numerosActuales', body);
  }

  getNumeros():Observable<any>{
    return this.http.get<any>(baseUrl+'/api/numerosActuales');
  }

}

export interface MarcarNumeroRequest{
  numero:number,
}
