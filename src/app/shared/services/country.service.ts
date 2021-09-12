import {Injectable} from '@angular/core'
import { Country } from '../models/country.model'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
 
 

@Injectable({
    'providedIn':'root'
})
export class CountryService{

    public selectedCountry: Country={"flag":"https://restcountries.eu/data/isr.svg","name":"Israel","capital":"Jerusalem","population":8527400,"nativeName":"יִשְׂרָאֵל"};

    public countryList:Country[]=[];;
    constructor(private myHttpClient:HttpClient){
        
   }
    public getCountryDetails(): Observable<Country[]> {
           return this.myHttpClient.get<Country[]>("https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;nativeName");
                 
                
        }
     }


    