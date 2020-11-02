import { Observable, of as observableOf } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';
import { clone, warehouseList } from '../app.data.spec';

export class FakeWarehousesService {

    constructor() { }
  
    getWarehouses(): Observable<Warehouse[]> {
      return observableOf(warehouseList);
    }
  }