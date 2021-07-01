import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartonService } from 'src/app/services/carton.service';
import { EventoBingoService } from 'src/app/services/evento-bingo.service';
import { LoginService } from 'src/app/services/login.service';
import { CartontemplateComponent } from 'src/app/shared/components/cartontemplate/cartontemplate.component';
import { Carton } from 'src/app/shared/models/carton.Entity';

@Component({
  selector: 'app-mis-cartones',
  templateUrl: './mis-cartones.component.html',
  styleUrls: ['./mis-cartones.component.css']
})
export class MisCartonesComponent implements OnInit {

  @ViewChild('carton1',{static:true}) cartonTemp1:CartontemplateComponent;
  @ViewChild('carton2',{static:true}) cartonTemp2:CartontemplateComponent;
  @ViewChild('carton3',{static:true}) cartonTemp3:CartontemplateComponent;

  cartones:Carton[];
  eventoId:number;
  jugadorId:string;
  numeroActual = 0;
  constructor(
    public router:Router,
    public cartonService:CartonService,
    public eventoService:EventoBingoService,
    public loginService:LoginService) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.jugadorId = this.loginService.getItem("Id");
    this.eventoService.getEventos().subscribe(
      value=>{
        if(value.estado == 0) {
          this.eventoId = value.evento.id;
          this.obtenerCartones();
        };
      }
    );
  }

  obtenerCartones(){
    this.cartonService.obtenerCartones(this.jugadorId).subscribe(res=>{

      if(res.estado==0 ){
        this.cartones = res.cartones;
        this.asignarCartones(0);
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
