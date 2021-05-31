import { Component, OnInit } from '@angular/core';
import { EventoBingo } from 'src/app/shared/models/eventoBingo.entity';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.scss']
})
export class JugarComponent implements OnInit {

  eventoEnJuego:boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
