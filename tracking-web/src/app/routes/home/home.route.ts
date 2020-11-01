import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDialog } from '../../components/product-dialog/product-dialog';

@Component({
  selector: 'home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.css']
})
export class HomeRoute implements OnInit {

  loading:boolean = false;
  
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
    const dialogRef = this.productDialog();

    dialogRef.componentInstance.save.subscribe((product: Product) => {
      if(!product) dialogRef.componentInstance.closeDialog();
      this.loading = true;

      if(!!product.imageFile){      
        this.productsService.uploadImage(product.imageFile).subscribe((id: number) => {
          product.image = id;
          this.productsService.create(product).subscribe((product: Product) => {
            this.router.navigate(['products',product.id]);
            dialogRef.componentInstance.closeDialog();
            this.loading = false;
          });
        });      
      }
      else {
        product.image = null;
        this.productsService.create(product).subscribe((product: Product) => {
          this.router.navigate(['products',product.id]);
          dialogRef.componentInstance.closeDialog();
          this.loading = false;
        });
      }
    });
  }  

  editProduct(product: Product) {
    const p = Object.assign({},product);
    const dialogRef = this.productDialog(p);

    dialogRef.componentInstance.save.subscribe((product: Product) => {
      if(!product) dialogRef.componentInstance.closeDialog();
      this.loading = true;
      
      if(!!product.imageFile){      
        this.productsService.uploadImage(product.imageFile).subscribe((id: number) => {
          product.image = id;
          this.productsService.edit(product).subscribe((product: Product) => {
            this.currentProduct = product;
            this.router.navigate(['products',product.id]);
            dialogRef.componentInstance.closeDialog();
            this.loading = false;
          });
        });
      }
      else {        
        this.productsService.edit(product).subscribe((product: Product) => {
          this.currentProduct = product;
          this.router.navigate(['products',product.id]);
          dialogRef.componentInstance.closeDialog();
          this.loading = false;
        });
      }

    });
  }

  enableProduct(product: Product) {
    if(product.enabled) this.productsService.activate(product.id).subscribe();
    else this.productsService.deactivate(product.id).subscribe();
  }

  deleteProduct(product: Product) {
    if(confirm(`Are you sure to delete ${product.name}?`)) {
      this.loading = true;
      this.productsService.delete(product).subscribe(()=>{
        this.loading = false;
        if(this.showCurrentProduct) this.router.navigate(['']);
        else this.loadProducts();
      });
    }
  }

  productClicked(product: Product) {
    this.router.navigate(['products',product.id]);
  }

  private productDialog(product: Product = {} as Product): MatDialogRef<ProductDialog, any> {
    return this.dialog.open(ProductDialog, {
      width: '80vw',
      data: product
    });
  }
}
