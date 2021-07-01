import { Component, OnInit, ViewChild } from '@angular/core';
import { PartidaService } from 'src/app/services/partida.service';
import { TableroComponent } from 'src/app/shared/components/tablero/tablero.component';

@Component({
  selector: 'app-admin-juego',
  templateUrl: './admin-juego.component.html',
  styleUrls: ['./admin-juego.component.css']
})
export class AdminJuegoComponent implements OnInit {

  @ViewChild(TableroComponent,{static:true}) tablero:TableroComponent;
  numeroInput=0;
  constructor(private partidaService:PartidaService) { }

  ngOnInit() {
    this.partidaService.getNumeros().subscribe(res=>{
      console.log(res);
      res.numeros.forEach(element => {
        this.tablero.marcarNumero(element);
      });
    });
  }

  marcarNumero(){
    this.partidaService.marcarNumero(this.numeroInput).subscribe(_=>this.numeroInput=0);
    this.tablero.marcarNumero(this.numeroInput);
  }



}
