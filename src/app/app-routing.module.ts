import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
 
const routes: Routes = [
 // {path:'', pathMatch:'full', component:HeaderComponent},
  {path:'main', component:MainComponent},
 {path:'header', component:HeaderComponent}
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }