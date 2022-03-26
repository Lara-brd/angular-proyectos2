import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private info:Auth [] =[];
  username:string ='';
  password:string= '';

  constructor(
    private _authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  login(){
    //TO DO -> validar.
    //ir a backend verificar usuario password
    //tener usuario que almacenaremos en servicio
    this.info = this._authService.getSigninInf() || [];
    this.info.forEach((user)=>{
      if(this.username == user.name && this.password == user.password){
        this.username = user.name;
        localStorage.setItem('userName', this.username);
        this._authService.addUser(this.username);
        this.router.navigate(['./starships']);
      }else{
        this.router.navigate(['./login']);
      }
      //todo ok nos manda a starships
    });

  }

}
