import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { productColumns } from '../../configuration/Properties';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnChanges {
  
  productColumns = productColumns;  

  @Input() products: Product[] = [];
  @Input() hidden: boolean = false;
  @Output() clicked: EventEmitter<Product> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<Product> = new EventEmitter();
  @Output() enable: EventEmitter<Product> = new EventEmitter();
  @Output() delete: EventEmitter<Product> = new EventEmitter();

  productsDataSource: MatTableDataSource<Product>;


  constructor() { }

  ngOnChanges(): void {
    this.productsDataSource = new MatTableDataSource<Product>(this.products);
  }

  seeProduct(product: Product) {
    this.clicked.emit(product);
  }
  
  enableProduct(event, product: Product) {
    product.enabled = event.checked;
    this.enable.emit(product);
  }

  createProduct() {
    this.create.emit();
  }

  editProduct(event,product: Product) {
    this.stopPropagation(event);
    this.edit.emit(product);    
  }

  deleteProduct(event,product: Product) {
    this.stopPropagation(event);
    this.delete.emit(product);
  }

  stopPropagation(event){
    event.stopPropagation();
  }
  sortData(event) {
    this.sort(event.active, event.direction === "asc");
  }

  private sort(key, asc = false) {
    this.productsDataSource = new MatTableDataSource<Product>(this.products.sort((a, b) =>{
      if(a[key] < b[key]) return asc ? -1 : 1;
      else if(a[key] > b[key]) return asc ? 1 : -1;
      else return 0;
    }));
  }
}
