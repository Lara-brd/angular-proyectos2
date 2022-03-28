import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.scss']
})
export class ShipInfoComponent implements OnInit {
  page:number;
  urlId:number = 0;
  ships:any[]=[];
  shipInfo = {
    name:'',
    model: '',
    cost_in_credits:'',
    max_atmosphering_speed:'',
    image:'',
    manufacturer:'',
    length:'',
    crew:'',
    pilots:[], 
    films:[]
  }

  pilotsArr:any[] =[];
  filmsArr:any[]=[];
  pilotsContent:boolean = false;
  filmsContent:boolean = false;

  constructor(
    private route:ActivatedRoute,
    private _shipService:ShipService
  ) {
    this.page = this._shipService.page;
  }
  


  ngOnInit(): void {
    //recojo id de la url
    this.route.paramMap.subscribe(params=>{
      this.urlId= +params.get('id')!;
    });

    this._shipService.getAllShips(this.page).subscribe(date =>{
      this.ships = date.results;
      this.searchShip(this.ships);
      this.searchImage();
    });
  }


  //search ship by selected id
  searchShip(ships:any){
    ships.forEach((ship:any)=>{
      if(ship.url == 'https://swapi.dev/api/starships/'+this.urlId +'/' ){
        this.shipInfo.name = ship.name;
        this.shipInfo.model = ship.model;
        this.shipInfo.cost_in_credits = ship.cost_in_credits;
        this.shipInfo.max_atmosphering_speed = ship.max_atmosphering_speed;
        this.shipInfo.manufacturer = ship.manufacturer;
        this.shipInfo.length = ship.length;
        this.shipInfo.crew = ship.crew;
        this.shipInfo.pilots = ship.pilots;
        this.shipInfo.films = ship.films;
      }
    });
    this.getPilotInfo();
    this.getFilmsInfo();
    }

  getPilotInfo(){
    this.shipInfo.pilots.forEach(pilot =>{
      this._shipService.getInfo(pilot).subscribe(pi=>{
        this.pilotsArr.push(pi);
        if(this.pilotsArr.length > 0){
          this.pilotsContent = true;
        }
      });
    });
  }

  getFilmsInfo(){
    this.shipInfo.films.forEach(film =>{
      this._shipService.getInfo(film).subscribe(flm =>{
        this.filmsArr.push(flm);
        if(this.filmsArr.length > 0){
          this.filmsContent = true;
        }
      });
    });
    console.log(this.filmsArr);
  }

  //get image
  searchImage(){
    this.shipInfo.image = 'https://starwars-visualguide.com/assets/img/starships/'+this.urlId+'.jpg';
  }

}
