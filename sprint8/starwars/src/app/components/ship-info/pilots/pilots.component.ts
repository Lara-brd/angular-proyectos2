import { Component, Input, OnInit } from '@angular/core';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {
  @Input() pilots: any[]=[];


  constructor( private _shipService:ShipService) { 
  }

  ngOnInit(): void {
  }

}


