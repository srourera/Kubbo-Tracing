import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { Stock } from '../../models/stock.model';
import { StocksService } from '../../services/stocks.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StockDialog } from '../stock-dialog/stock-dialog';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {

  loading:boolean = false;

  @Input() hidden: boolean = false;
  @Input() product: Product;
  @Input() stocks: Stock[] = [];
  @Output() edit: EventEmitter<Product> = new EventEmitter();
  @Output() enable: EventEmitter<Product> = new EventEmitter();
  @Output() delete: EventEmitter<Product> = new EventEmitter();

  constructor(
    private stocksService: StocksService,
    public dialog: MatDialog
  ) { }

  ngOnChanges() {
    this.stocks = [];
    this.loadStock();
  }

  private loadStock(){
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
    if(!!this.product && !!this.product.id){
      const stock = {
        productId: this.product.id
      } as Stock;
      const dialogRef = this.stockDialog(stock);

      dialogRef.componentInstance.save.subscribe((stock: Stock) => {
        if(!stock) dialogRef.componentInstance.closeDialog();
        this.loading = true;

        this.stocksService.create(stock).subscribe((stock: Stock) => {
          this.loadStock();
          dialogRef.componentInstance.closeDialog();
          this.loading = false;
        });
      });
    }    
  }

  editStock(stock: Stock){
    const s = Object.assign({},stock);
    s.warehouseId = !!s.warehouse ? s.warehouse.id : null;

    const dialogRef = this.stockDialog(s);

    dialogRef.componentInstance.save.subscribe((stock: Stock) => {
      if(!stock) dialogRef.componentInstance.closeDialog();
      this.loading = true;

      this.stocksService.edit(stock).subscribe((stock: Stock) => {
        this.loadStock();
        dialogRef.componentInstance.closeDialog();
        this.loading = false;
      });
    });
  }

  deleteStock(stock: Stock) {
    if(confirm(`Are you sure to delete stock of ${stock.warehouse.name}?`)) {
      this.loading = true;
      this.stocksService.delete(stock).subscribe(()=>{
        this.loadStock();
        this.loading = false;
      })
    }
  }

  private stockDialog(stock: Stock): MatDialogRef<StockDialog, any> {
    return this.dialog.open(StockDialog, {
      width: '80vw',
      data: stock
    });
  }

}
