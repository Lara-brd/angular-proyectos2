import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipService } from 'src/app/services/ship.service';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  ships:any[] = [];
  id:string = '2';
  page:number;
  listCount:number =0;
  angleRight = faAngleDoubleRight;
  loaded = false;


  constructor(
    private _shipService:ShipService,
    private router:Router
    ) {
      this.page = this._shipService.page;
      this._shipService.getAllShips(this.page).subscribe(date=>{
        console.log(date);
        this.listCount = date.count;
        this.ships = date.results;
        this.isLoaded();
      });

  }

  ngOnInit(): void { 
  }


  getId(shipUrl:any){
    //recogiendo id para añadirlo a url
    let numberId:number = this._shipService.getIdFromUrl(shipUrl);
    this.router.navigate(['/starships/', numberId]);
    return numberId;
  }

  next(){
    this.page +=1;
    let nextTimes = Math.ceil(this.listCount/10);
    if(this.page > nextTimes){
      this.page = 1;
    }
    this._shipService.setPage(this.page);
    this._shipService.getAllShips(this.page).subscribe(date=>{
      this.listCount = date.count;
      this.ships = date.results;
      this.isLoaded();
    }); 
  }

  
  //si esta cargado aparece btn
  isLoaded(){
    if(this.ships != null  || this.ships != undefined){
      this.loaded = true;
    }
  }

}


