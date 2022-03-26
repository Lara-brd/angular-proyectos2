import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor( private _config:NgbCarouselConfig) { 
    _config.interval = 4000;
    _config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
