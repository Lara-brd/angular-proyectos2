import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user = "";
  constructor(
    private router:Router,
    private _authService:AuthService
    ){}

  canActivate() {
    this._authService.getUser().subscribe((us) => {
      this.user = us;
    });
    if(this.user == ""){
      this.router.navigate(['./login']);
      return false;
    }
      return true;
  }
}
