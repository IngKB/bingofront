import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';
import { JugadorEntity } from '../shared/models/jugador.Entity';
import { UserEntity } from '../shared/models/user.Entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }
  token:string;
  login(user:UserEntity): Observable<LoginResponse> {
    let body:LoginRequest = {usuario:user};
    return this.http.post<LoginResponse>(baseUrl+'/api/Usuario/', body).pipe(tap(
      (res: LoginResponse) => {
        if (res) {
          if(res.estado==0){
            this.saveUser(res.jugador);
          }else{
            console.log(res);
          }
        }
      })
    );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("token");
    localStorage.removeItem("Id");
    localStorage.removeItem("Nombre");
  }

  saveUser(jugador: JugadorEntity): void {
    localStorage.setItem("Id", jugador.identificacion);
    localStorage.setItem("Nombre", jugador.primer_Nombre+" "+jugador.primer_Apellido);
  }

  getItem(item:string): string {
    return localStorage.getItem(item);
  }

}

export interface LoginRequest{
  usuario:UserEntity
}
export interface LoginResponse{
  estado: number,
  mensaje: string,
  jugador: JugadorEntity
}
