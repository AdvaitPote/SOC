import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-healthheadlines',
  templateUrl: './healthheadlines.component.html',
  styleUrls: ['./healthheadlines.component.css']
})
export class HealthheadlinesComponent implements OnInit {

  constructor(
    private api:NewsapiService
  ) { }

  topHealthHeadlines:any = [];

  ngOnInit(): void {
    this.api.get_healthheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHealthHeadlines = result.articles;
    })
  }

}
