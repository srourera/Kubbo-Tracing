import { Component, Input, OnChanges } from '@angular/core';
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

  productsDataSource: MatTableDataSource<Product>;

  constructor() { }

  ngOnChanges(): void {
    this.productsDataSource = new MatTableDataSource<Product>(this.products);
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
