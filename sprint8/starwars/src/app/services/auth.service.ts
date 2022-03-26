import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signinInfo:Auth[]=[];
  userName:any;
  private userName$ = new Subject<string>();

  constructor() { }

  //recogiendo array info del local storage
  getSigninInf(){
    this.signinInfo = JSON.parse(localStorage.getItem('signin')!);
    return this.signinInfo;
  }

  addUser(userName:any){
    this.userName = userName;
    this.userName$.next(userName);
  }

  getUser():Observable<string>{
    return this.userName$.asObservable();
  }


  

}
