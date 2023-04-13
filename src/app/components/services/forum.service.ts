import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  getAllNews(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/everything?q=agriculture&from=2023-04-12&to=2023-04-12&sortBy=popularity&apiKey=c82a973c097240d789a397411e75fd3a&pageSize=20', {
      headers:new HttpHeaders({
      })
    })
  }
}
