import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { StocksService } from '../../services/stocks.service';
import { WarehousesService } from '../../services/warehouses.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.css']
})
export class HomeRoute implements OnInit {

  products: Product[];
  stocks: string[];
  warehouses: string[];

  constructor(
    private _productsService: ProductsService,
    private _stocksService: StocksService,
    private _warehousesService: WarehousesService
  ){};

  ngOnInit(): void {    
    this._loadProducts();
    this._loadStocks();
    this._loadWarehouses();
  }

  private _loadProducts(): void {
    this._productsService.getProducts().subscribe(
      (response: Product[]) => {        
        this.products = [...response,...response,...response,...response,...response];
      }
    );
  }

  private _loadStocks(): void {
    this._stocksService.getStocks().subscribe(
      response => {
        // let key: string = Object.keys(response)[0];
        // this.stocks = `${key}: ${response[key]}`;
      }
    );
  }

  private _loadWarehouses(): void {
    this._warehousesService.getWarehouses().subscribe(
      response => {
        // let key: string = Object.keys(response)[0];
        // this.warehouses = `${key}: ${response[key]}`;
      }
    );
  }

}
