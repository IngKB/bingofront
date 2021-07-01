import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserEntity } from 'src/app/shared/models/user.Entity';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userForm = new FormGroup({
    username:new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.minLength(6)]),
  });

  constructor(
    private loginService:LoginService,
    private router:Router) { }

  ngOnInit() {
  }

  login(user:UserEntity){
    this.loginService.login(user).subscribe(value=>{

      if(value.estado==0){
        this.router.navigateByUrl('admin/home/juego');
      }
    }
    );
  }

}
