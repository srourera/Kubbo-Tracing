import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { Stock } from '../../models/stock.model';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {

  @Input() hidden: boolean = false;
  @Input() product: Product;
  @Input() stocks: Stock[] = [];
  @Output() edit: EventEmitter<Product> = new EventEmitter();
  @Output() enable: EventEmitter<Product> = new EventEmitter();
  @Output() delete: EventEmitter<Product> = new EventEmitter();

  constructor(private stocksService: StocksService) { }

  ngOnChanges(): void {
    this.loadStock();
  }

  private loadStock(){
    this.stocks = [];

    if(!!this.product && !!this.product.id){
      this.stocksService.getStockByProductId(this.product.id).subscribe(
        (response: Stock[]) => {        
          if(!response) return;
          this.stocks = response;        
        },()=>{}
      );
    }
  }

  editProduct(product: Product) {
    this.edit.emit(product);
  }

  enableProduct(event, product: Product) {
    product.enabled = event.checked;
    this.enable.emit(product);
  }

  deleteProduct(product: Product) {
    this.delete.emit(product);
  }

  addStock() {
    console.log("ADD stock");
  }

}
