import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { warehousesUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(warehousesUrl);
  }
}
