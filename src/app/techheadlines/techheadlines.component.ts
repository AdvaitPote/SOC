import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-techheadlines',
  templateUrl: './techheadlines.component.html',
  styleUrls: ['./techheadlines.component.css']
})
export class TechheadlinesComponent implements OnInit {

  constructor(
    private api:NewsapiService
  ) { }

  topTechheadlines:any = [];
  
  ngOnInit(): void {
    this.api.get_techheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topTechheadlines = result.articles;
    })
  }

}
