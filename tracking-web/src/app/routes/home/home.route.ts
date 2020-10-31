import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../../models/stock.model';
import { StocksService } from '../../services/stocks.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialog } from '../../components/product-dialog/product-dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.css']
})
export class HomeRoute implements OnInit {

  products: Product[];
  stocks: string[];

  showCurrentProduct: boolean = false;
  currentProduct: Product = {} as Product;
  currentProductStock: Stock[] = [];

  constructor(
    private productsService: ProductsService,
    private stockService: StocksService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){};

  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      const productId = !!p && !!p.productId && !isNaN(p.productId) ? Number(p.productId) : -1;

      if(productId !== -1) this.loadProduct(productId);
      else {
        this.loadProducts();
        this.showCurrentProduct = false;
      }
    });
  }

  private loadProduct(productId:number) {
    this.currentProduct = {} as Product;
    this.currentProductStock = [];

    this.productsService.getProductById(productId).subscribe(
      (response: Product) => {        
        if(!response) this.router.navigate(['']);
        this.currentProduct = response;        
        this.showCurrentProduct = true;        
      },()=>{        
        this.showCurrentProduct = false;
        this.router.navigate(['']);
      }
    );

    this.loadStock(productId);
  }

  private loadProducts(): void {
    this.productsService.getProducts().subscribe(
      (response: Product[]) => {        
        this.products = [...response,...response,...response,...response,...response];
      },()=>{
        this.products = [];
      }
    );
  }

  private loadStock(productId: number){
    this.stockService.getStockByProductId(productId).subscribe(
      (response: Stock[]) => {        
        if(!response) return;
        this.currentProductStock = response;        
      },()=>{}
    );
  }

  createProduct() {
    this.productDialog().subscribe((result: Product) => {
      console.log("RESULT",result);
    });
  }  

  editProduct(product: Product) {
    this.productDialog(product).subscribe((result: Product) => {
      console.log("RESULT",result);
    });
  }

  productClicked(product: Product) {
    this.router.navigate(['products',product.id]);
  }

  private productDialog(product: Product = null): Observable<Product> {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '80vw',
      data: product
    });
    return dialogRef.afterClosed();
  }
}
