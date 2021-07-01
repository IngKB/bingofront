import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartonService } from 'src/app/services/carton.service';
import { EventoBingoService } from 'src/app/services/evento-bingo.service';
import { LoginService } from 'src/app/services/login.service';
import { EventoBingo } from 'src/app/shared/models/eventoBingo.entity';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.scss']
})
export class JugarComponent implements OnInit {

  eventoEnJuego:boolean = false;
  numCartones=0;
  constructor(
    private cartonService:CartonService,
    private loginService:LoginService,
    private eventoService:EventoBingoService,
    private router:Router) { }

  ngOnInit() {
    const id = this.loginService.getItem('Id');
    this.eventoService.getEventos().subscribe(val=>{
      if(val.estado==0){

        console.log(val.evento);
      }
    });
    this.cartonService.obtenerCartones(id).subscribe(val=>{
        this.numCartones = val.cartones.length;
    });
  }

  irCompras(){
    this.router.navigateByUrl('/userhome/cartones');
  }


}
