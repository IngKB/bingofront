import { Component, OnInit, ViewChild } from '@angular/core';
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
  constructor(public signalRService: SignalRService) { }

  ngOnInit() {

    this.conectarWebSocket();
    this.crearCarton();
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
    this.carton1 = new Carton('123');
    this.cartonTemp1.generarNuevo(this.carton1);
  }

  marcarNumero = ()=>{
    this.signalRService.numerosMarcados.forEach(numero => {
      this.cartonTemp1.marcarNumero(numero);
    });
  }

}
