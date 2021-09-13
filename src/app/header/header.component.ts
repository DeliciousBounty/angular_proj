import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Country } from '../shared/models/country.model';
import { CountryService } from '../shared/services/country.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent  {
constructor(){}
//public clientSelection:boolean=false;
@Output() public clientSelection:EventEmitter<boolean>=new EventEmitter<boolean>();
 
public saveChoice():void{
  this.clientSelection.emit(true);
}
public falsechange():void{
  this.clientSelection.emit(false);
}

//public get CountryDetails ():Country[]{
 // return this.myCountryService.selectedCountry;
// }
//public saveCountry( newName:string):void{
//let c:Country|undefined;
//c=this.countryList.find(e=>e.name==newName);
///this.CountryService.selectedCountry.name=c.name;
//this.CountryService.selectedCountry.flag=c.flag;
//}
}