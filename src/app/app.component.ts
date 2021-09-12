import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proj';
  public  userChange:boolean=false;
  public saveChanges(newChange:boolean):void{
    this.userChange=newChange;
  }
}
