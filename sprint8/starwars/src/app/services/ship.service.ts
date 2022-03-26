import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ShipsTemplate } from '../interfaces/ship';
@Injectable({
  providedIn: 'root'
})
export class ShipService {
  api:string;
  listShips:any[];
  private ships$ = new Subject<any>();
  page:number = 1;
  pilots:string[] =[];




  constructor( private http:HttpClient) { 
    this.api = 'https://swapi.dev/api/';
    this.listShips = [];

  }

  //petición datos API nave
    //petición datos API nave
    getAllShips(page:number):Observable<any>{
      const PATH = this.api +'starships/?page='+ page;
      return this.http.get<ShipsTemplate[]>(PATH);
    }

    getInfo(url:any){
      const PATH = url;
      return this.http.get<any>(PATH);
    }



  //observable primero avisamos del cambio y mandamos array luego método get para poder subscribirnos
  refreshShips(arr:any){
    this.listShips = arr;
    this.ships$.next(this.listShips);
  }
  getShips$():Observable<any>{
    return this.ships$.asObservable();
  }

  getIdFromUrl(url:any){
    let regex = /(\d+)/g;
    return + url.substring(url.length -4).match(regex);
  }

  setPage(newPage:number){
    this.page = newPage;
  }

  setPilots(newArr:any){
    this.pilots = newArr;
  }


}
