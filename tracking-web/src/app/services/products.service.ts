import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(productsUrl);
  }
}
