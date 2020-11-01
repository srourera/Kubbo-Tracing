import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private productsService: ProductsService,
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

    this.productsService.getProductById(productId).subscribe(
      (response: Product) => {        
        if(!response || !response.id) this.router.navigate(['']);
        this.currentProduct = response;
        this.showCurrentProduct = true;        
      },()=>{        
        this.showCurrentProduct = false;
        this.router.navigate(['']);
      }
    );
  }

  private loadProducts(): void {
    this.productsService.getProducts().subscribe(
      (response: Product[]) => {        
        this.products = response;
      },()=>{
        this.products = [];
      }
    );
  }

  createProduct() {
    this.productDialog().subscribe((product: Product) => {
      if(!product) return;
      this.productsService.create(product).subscribe((product: Product) => {
        this.router.navigate(['products',product.id]);
      });

    });
  }  

  editProduct(product: Product) {
    const p = Object.assign({},product);
    this.productDialog(p).subscribe((product: Product) => {
      if(!product) return;
      this.productsService.edit(product).subscribe((product: Product) => {
        this.currentProduct = product;
        this.router.navigate(['products',product.id]);
      });

    });
  }

  enableProduct(product: Product) {
    if(product.enabled) this.productsService.activate(product.id).subscribe();
    else this.productsService.deactivate(product.id).subscribe();
  }

  deleteProduct(product: Product) {
    if(confirm(`Are you sure to delete ${product.name}?`)) {
      this.productsService.delete(product).subscribe(()=>{
        if(this.showCurrentProduct) this.router.navigate(['']);
        else this.loadProducts();
      });
    }
  }

  productClicked(product: Product) {
    this.router.navigate(['products',product.id]);
  }

  private productDialog(product: Product = {} as Product): Observable<Product> {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '80vw',
      data: product
    });
    return dialogRef.afterClosed();
  }
}
