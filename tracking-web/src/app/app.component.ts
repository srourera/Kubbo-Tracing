import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { StocksService } from './services/stocks.service';
import { WarehousesService } from './services/warehouses.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string;

  products: string;
  stocks: string;
  warehouses: string;

  constructor(
    private _productsService: ProductsService,
    private _stocksService: StocksService,
    private _warehousesService: WarehousesService
  ){};

  ngOnInit(): void {
    this.title = 'Kubbo Smart Logistics';
    this.products = 'Loading message...';
    this.stocks = 'Loading message...';
    this.warehouses = 'Loading message...';

    this._loadProducts();
    this._loadStocks();
    this._loadWarehouses();
  }

  private _loadProducts(): void {
    this._productsService.getProducts().subscribe(
      response => {
        let key: string = Object.keys(response)[0];
        this.products = `${key}: ${response[key]}`;
      }
    );
  }

  private _loadStocks(): void {
    this._stocksService.getStocks().subscribe(
      response => {
        let key: string = Object.keys(response)[0];
        this.stocks = `${key}: ${response[key]}`;
      }
    );
  }

  private _loadWarehouses(): void {
    this._warehousesService.getWarehouses().subscribe(
      response => {
        let key: string = Object.keys(response)[0];
        this.warehouses = `${key}: ${response[key]}`;
      }
    );
  }
}
