import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  constructor(
    private api:NewsapiService
  ) { }

  topHeadlines:any = [];

  ngOnInit(): void {
    this.api.get_headlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlines = result.articles;
    })
  }
  

}
