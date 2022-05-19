import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-enttheadlines',
  templateUrl: './enttheadlines.component.html',
  styleUrls: ['./enttheadlines.component.css']
})
export class EnttheadlinesComponent implements OnInit {

  constructor(
    private api:NewsapiService
  ) { }

  topEnttheadlines:any = [];

  ngOnInit(): void {
    this.api.get_enttheadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topEnttheadlines = result.articles;
    })
  }

}
