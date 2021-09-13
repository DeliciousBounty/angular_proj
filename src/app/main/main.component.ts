import { ResourceLoader } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Country } from '../shared/models/country.model';
import { CountryService } from '../shared/services/country.service';
 @Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit   {
  @Input() public choice:boolean|undefined;
  public flag:boolean=true;
  public countryList:Country[] =[];
  constructor(private CountryService:CountryService){}
  public coutryname:string="";
  public result:Country[]=[];
 ngOnInit(){
   this.CountryService.getCountryDetails().subscribe(res=>{
     this.countryList=res;
   });
 }
 public    myFunction(newCountry:string):void {
   this.coutryname= newCountry;
   this.flag=false;
  let filter = this.coutryname.toUpperCase();

  for (let i = 0; i < this.countryList.length; i++) {
     let txtValue=this.countryList[i].name;
      if (txtValue.indexOf(filter) > -1) {
          this.result.push(this.countryList[i]);
      } 
  }
  if(this.result.length==0){this.flag=true;}
  console.log(this.result);
}
public reset():void{
  this.flag=true;
   
}
  }


