import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './service/newsapi.service';
import { TechheadlinesComponent } from './techheadlines/techheadlines.component';
import { BussheadlinesComponent } from './bussheadlines/bussheadlines.component';
import { HealthheadlinesComponent } from './healthheadlines/healthheadlines.component';
import { EnttheadlinesComponent } from './enttheadlines/enttheadlines.component';
import { SportsheadlinesComponent } from './sportsheadlines/sportsheadlines.component'

@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TechheadlinesComponent,
    BussheadlinesComponent,
    HealthheadlinesComponent,
    EnttheadlinesComponent,
    SportsheadlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
