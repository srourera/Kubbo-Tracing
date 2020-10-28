import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { warehousesUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<any> {
    return this.http.get<any>(warehousesUrl);
  }
}
