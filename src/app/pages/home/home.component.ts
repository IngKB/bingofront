import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor(private login: LoginService, private router:Router){}
  nombre:string = '';
  ngOnInit(): void {
    this.nombre = this.login.getItem("Nombre");
  }

  jugar(){
    if(this.nombre!=null && this.nombre!=''){
      this.router.navigateByUrl('userhome');
    }
  }
}
