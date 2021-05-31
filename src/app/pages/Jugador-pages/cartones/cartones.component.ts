import { Component, OnInit, ViewChild } from '@angular/core';
import { CartontemplateComponent } from 'src/app/shared/components/cartontemplate/cartontemplate.component';
import { Carton } from 'src/app/shared/models/carton.Entity';

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
  constructor() { }

  ngOnInit() {
    this.generarCartones();
  }

  generarCartones(){

    this.carton1 = new Carton('123');
    this.carton2 = new Carton('125');
    this.carton3 = new Carton('126');
    this.cartonTemp1.generarNuevo(this.carton1);
    this.cartonTemp2.generarNuevo(this.carton2);
    this.cartonTemp3.generarNuevo(this.carton3);
  }
}
