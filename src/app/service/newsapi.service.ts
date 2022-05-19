import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(
    private http:HttpClient
  ) { }

  headlines_url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0d562a7703df4e8688b2073a390327a4";

  techheadlines_url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0d562a7703df4e8688b2073a390327a4";

  bussheadlines_url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d562a7703df4e8688b2073a390327a4";
  
  healthheadlines_url = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0d562a7703df4e8688b2073a390327a4";

  enttheadlines_url = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0d562a7703df4e8688b2073a390327a4";
  
  sportsheadlines_url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0d562a7703df4e8688b2073a390327a4";
  
  get_headlines():Observable<any> {
    return this.http.get(this.headlines_url);
  }

  get_techheadlines():Observable<any> {
    return this.http.get(this.techheadlines_url);
  }

  get_bussheadlines():Observable<any> {
    return this.http.get(this.bussheadlines_url);
  }

  get_healthheadlines():Observable<any> {
    return this.http.get(this.healthheadlines_url);
  }

  get_enttheadlines():Observable<any> {
    return this.http.get(this.enttheadlines_url);
  }

  get_sportsheadlines():Observable<any> {
    return this.http.get(this.sportsheadlines_url);
  }
}
