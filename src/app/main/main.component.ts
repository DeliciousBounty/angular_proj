import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../shared/models/country.model';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit   {
  @Input() public choice:boolean|undefined;
  public countryList:Country[] =[];
  constructor(private CountryService:CountryService){}
  
    ////this.countryList=this.CountryService.countryList;
 ngOnInit(){
   this.CountryService.getCountryDetails().subscribe(res=>{
     this.countryList=res;
   });
 }
  }


