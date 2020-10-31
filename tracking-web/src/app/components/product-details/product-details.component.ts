import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() hidden: boolean = false;
  @Input() product: Product;
  @Input() stocks: Stock[];

  constructor() { }

  ngOnInit(): void {
  }

}
