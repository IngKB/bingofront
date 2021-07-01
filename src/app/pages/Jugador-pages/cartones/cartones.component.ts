import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartonService } from 'src/app/services/carton.service';
import { EventoBingoService } from 'src/app/services/evento-bingo.service';
import { LoginService } from 'src/app/services/login.service';
import { CartontemplateComponent } from 'src/app/shared/components/cartontemplate/cartontemplate.component';
import { Carton } from 'src/app/shared/models/carton.Entity';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmarDialogComponent } from '../confirmar-dialog/confirmar-dialog.component';

@Component({
  selector: 'app-cartones',
  templateUrl: './cartones.component.html',
  styleUrls: ['./cartones.component.css']
})
export class CartonesComponent implements OnInit {

  @ViewChild('carton1',{static:true}) cartonTemp1:CartontemplateComponent;
  @ViewChild('carton2',{static:true}) cartonTemp2:CartontemplateComponent;
  @ViewChild('carton3',{static:true}) cartonTemp3:CartontemplateComponent;

  carton1:Carton;
  carton2:Carton;
  carton3:Carton;
  eventoId:number;
  jugadorId:string;
  constructor(
    public dialog:MatDialog,
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
          console.log(this.eventoId);
          this.generarCartones();
        };
      }
    );
  }

  generarCartones(){
    this.carton1 = new Carton(this.jugadorId,this.eventoId);
    this.carton2 = new Carton(this.jugadorId,this.eventoId);
    this.carton3 = new Carton(this.jugadorId,this.eventoId);
    this.cartonTemp1.generarNuevo(this.carton1);
    this.cartonTemp2.generarNuevo(this.carton2);
    this.cartonTemp3.generarNuevo(this.carton3);
  }

  comprarCartones(){
    this.cartonService.comprarCarton(this.carton1).subscribe(_=>
    this.cartonService.comprarCarton(this.carton2).subscribe(_=>
    this.cartonService.comprarCarton(this.carton3).subscribe(_=>{

      const dialogref = this.dialog.open(ConfirmarDialogComponent,{});
      dialogref.afterClosed().subscribe(res=>{
        this.router.navigateByUrl("/userhome");
      })
    }
    )));

  }

}
