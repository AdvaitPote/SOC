import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-sportsheadlines',
  templateUrl: './sportsheadlines.component.html',
  styleUrls: ['./sportsheadlines.component.css']
})
export class SportsheadlinesComponent implements OnInit {

  constructor(
    private api:NewsapiService
  ) { }

  topSportsheadlines:any = [];

  ngOnInit(): void {
    this.api.get_sportsheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topSportsheadlines = result.articles;
    })
  }

}
