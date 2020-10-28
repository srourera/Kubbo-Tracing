import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stocksUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getStocks(): Observable<any> {
    return this.http.get<any>(stocksUrl);
  }
}
