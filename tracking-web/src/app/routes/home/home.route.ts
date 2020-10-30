import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

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

    this.loadProducts();
  }

  private loadProduct(productId:number) {
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

  productClicked(product: Product) {
    this.router.navigate(['products',product.id]);
  }
}
