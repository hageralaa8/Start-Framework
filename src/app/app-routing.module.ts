import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  // lw 3andy el default page shabh path 3andy
  //  {path:"", redirectTo:"home", pathMathch:"full"}, kda haro7 ll path home bs
  {path:"", component:HomeComponent}, //default
  {path:"about",component:AboutComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotfoundComponent}//match ay masar 8alt
  // wildcard route ?hwa path:"**" route b match ay path 3andy ba7to a5er wahd fe array bta3t el routes lw ma3nish path by match

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
