import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechheadlinesComponent } from './techheadlines/techheadlines.component';
import { BussheadlinesComponent } from './bussheadlines/bussheadlines.component';
import { HealthheadlinesComponent } from './healthheadlines/healthheadlines.component';
import { EnttheadlinesComponent } from './enttheadlines/enttheadlines.component';
import { SportsheadlinesComponent } from './sportsheadlines/sportsheadlines.component';

const routes: Routes = [
  { path:'', component:HeadlinesComponent },
  { path:'technology', component:TechheadlinesComponent },
  { path:'business', component:BussheadlinesComponent },
  { path:'health', component:HealthheadlinesComponent },
  { path:'entertainment', component:EnttheadlinesComponent },
  { path:'sports', component:SportsheadlinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
