import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";  // or from "@microsoft/signalr" if you are using a new library
import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor(private http: HttpClient) { }

  public numerosMarcados: number[];

  private hubConnection: signalR.HubConnection

  public startConnection = () => {

    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(baseUrl +'/partida_jugando',{
                            })
                            .build();

    return this.hubConnection
      .start();
  }

  public addNumerosListener = (funcion:()=>void) => {
    this.hubConnection.on('numeromarcado', (data) => {
      this.numerosMarcados = data;
      funcion();
      console.log(this.numerosMarcados);
    });
  }


  public getNumerosActuales():Observable<any>{
    return this.http.get(baseUrl + '/api/numerosActuales').pipe(tap(
      (res) => {
        if (res) {
          console.log(res);
        }
      })
    );
  }
}


