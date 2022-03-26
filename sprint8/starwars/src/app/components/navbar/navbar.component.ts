import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName:string ="";

  constructor( 
    private _shipService:ShipService,
    private _authService:AuthService
    ) {
      // this.userName = localStorage.getItem('userName');
      this._authService.getUser().subscribe((user)=>{
        console.log(user);
        this.userName = user;
      })


    
  }

  ngOnInit(): void {
  }

  //obteniendo lista naves de API y llevandolas a service
  getShips(){
    this._shipService.getAllShips(1).subscribe(data =>{
      let ships = data.results;
      this._shipService.refreshShips(ships);
    });
  }

}
