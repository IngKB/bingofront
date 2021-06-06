import { Component, OnInit, ViewChild } from '@angular/core';
import { CartonService } from 'src/app/services/carton.service';
import { LoginService } from 'src/app/services/login.service';
import { SignalRService } from 'src/app/services/signal-r.service';
import { CartontemplateComponent } from 'src/app/shared/components/cartontemplate/cartontemplate.component';
import { Carton } from 'src/app/shared/models/carton.Entity';

@Component({
  selector: 'app-juego-principal',
  templateUrl: './juego-principal.component.html',
  styleUrls: ['./juego-principal.component.scss']
})
export class JuegoPrincipalComponent implements OnInit {

  @ViewChild('carton5',{static:true}) cartonTemp1:CartontemplateComponent;

  carton1:Carton;
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
      value=>{
        if(value.estado==0 && value.cartones.length>0){
          this.carton1 = value.cartones[0];
          console.log(this.carton1)
          this.cartonTemp1.generarNuevo(this.carton1);
        }else{
          console.log("error");
        }

      }
    );
  }

  marcarNumero = ()=>{
    if(this.signalRService.numerosMarcados){
      this.signalRService.numerosMarcados.forEach(numero => {
        this.cartonTemp1.marcarNumero(numero);
      });
    }else{
      console.log("numeros nulos");
    }

  }

}
