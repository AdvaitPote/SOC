import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-bussheadlines',
  templateUrl: './bussheadlines.component.html',
  styleUrls: ['./bussheadlines.component.css']
})
export class BussheadlinesComponent implements OnInit {

  constructor(
    private api:NewsapiService
  ) { }

  topBussheadlines:any = [];

  ngOnInit(): void {
    this.api.get_bussheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topBussheadlines = result.articles;
    })
  }
  


}
