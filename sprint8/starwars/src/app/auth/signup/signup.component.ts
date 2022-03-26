import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/auth.interface';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup:Auth = {
    name : '',
    surname: '',
    password:''
  }
  signups:Auth[] = [];
  validatedName:boolean = true;
  validatedSurname:boolean = true;
  validatedPassword:boolean = true;


  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  //TO DO mejorar validación
  addSign(){
    if(this.signup.name !="" && this.signup.surname !="" && this.signup.password !=""){
      this.signups.unshift(this.signup);
      localStorage.setItem('signin', JSON.stringify(this.signups));
      //reseteando form
      this.signup = {
        name : '',
        surname: '',
        password:''
      }
      this.router.navigate(['./login'])
    }else{
      if(this.signup.name == "")this.validatedName = false;
      if(this.signup.surname == "")this.validatedSurname = false;
      if(this.signup.password== "")this.validatedPassword= false;
    }

  }

}
