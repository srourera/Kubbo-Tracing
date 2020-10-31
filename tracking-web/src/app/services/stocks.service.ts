import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stocksUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getStockByProductId(productId: number): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${stocksUrl}/${productId}`);
  }
}
