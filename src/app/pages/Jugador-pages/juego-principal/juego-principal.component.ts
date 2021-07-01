import { Component, OnInit, ViewChild } from '@angular/core';
import { CartonService } from 'src/app/services/carton.service';
import { LoginService } from 'src/app/services/login.service';
import { SignalRService } from 'src/app/services/signal-r.service';
import { CartontemplateComponent } from 'src/app/shared/components/cartontemplate/cartontemplate.component';
import { TableroComponent } from 'src/app/shared/components/tablero/tablero.component';
import { Carton } from 'src/app/shared/models/carton.Entity';

@Component({
  selector: 'app-juego-principal',
  templateUrl: './juego-principal.component.html',
  styleUrls: ['./juego-principal.component.scss']
})
export class JuegoPrincipalComponent implements OnInit {

  @ViewChild('carton5',{static:true}) cartonTemp1:CartontemplateComponent;
  @ViewChild('carton6',{static:true}) cartonTemp2:CartontemplateComponent;
  @ViewChild('carton7',{static:true}) cartonTemp3:CartontemplateComponent;

  @ViewChild(TableroComponent,{static:true}) tablero:TableroComponent;

  cartones:Carton[];
  eventoId:number;
  jugadorId:string;
  numeroActual = 0;
  constructor(
    public signalRService: SignalRService,
    public loginService: LoginService,
    public cartonService: CartonService) { }

  ngOnInit() {

    this.crearCarton();
    this.conectarWebSocket();
  }

  conectarWebSocket(){
    this.signalRService.startConnection().then((res)=>{
      console.log("Connected");
      this.signalRService.getNumerosActuales().subscribe(_=>this.marcarNumero());
    }
    ).catch(err => console.log('Error while starting connection: ' + err));
    this.signalRService.addNumerosListener(this.marcarNumero);
  }

  crearCarton(){
    this.cartonService.obtenerCartones(this.loginService.getItem("Id")).subscribe(
      res=>{
        if(res.estado==0 && res.cartones.length>0){
          this.cartones = res.cartones;
          this.asignarCartones(0);
        }
      }
    );
  }

  marcarNumero = ()=>{
    if(this.signalRService.numerosMarcados){
      this.signalRService.numerosMarcados.forEach(numero => {
      this.tablero.marcarNumero(numero);
        if(this.cartones!=null){
          this.cartones.forEach(carton=>{
            this.marcarNumeroEnCarton(carton,numero);
          })
        }

      });
    }else{
      console.log("numeros nulos");
    }

  }

  marcarNumeroEnCarton(carton:Carton,numero:number){
      carton.casillas.forEach(casilla => {
        if(casilla.numero==numero){
          casilla.marcado=true;
        }
      });
  }
  asignarCartones(n:number){
    this.cartonTemp1.generarNuevo(this.cartones[n]);
    this.cartonTemp2.generarNuevo(this.cartones[n+1]);
    this.cartonTemp3.generarNuevo(this.cartones[n+2]);
  }

  mostrarSiguientes(){
    if(this.numeroActual<this.cartones.length-3){
      this.numeroActual++;
      this.asignarCartones(this.numeroActual);
    }
  }

  mostrarAnteriores(){
    if(this.numeroActual>0){
      this.numeroActual--;
      this.asignarCartones(this.numeroActual);
    }
  }

}
