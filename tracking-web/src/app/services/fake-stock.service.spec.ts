import { Observable, of as observableOf } from 'rxjs';
import { stockList, clone, fullStock } from '../app.data.spec';
import { Stock } from '../models/stock.model';

export class FakeStockService {

    constructor() { }
  
    getStockByProductId(id: number): Observable<Stock[]> {
      return observableOf(stockList);
    }

    create(stock: Stock) {
      return observableOf(clone(fullStock));
    }

    edit(stock: Stock) {
      return observableOf(clone(fullStock));
    }

    delete(stock: Stock) {
      return observableOf(clone(fullStock));
    }
}