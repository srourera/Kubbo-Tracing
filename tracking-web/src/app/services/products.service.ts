import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsUrl, imagesUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>(`${productsUrl}/${id}`);
  }

  create(product: Product) {
    return this.http.post(productsUrl,product);
  }

  edit(product: Product) {
    return this.http.put(`${productsUrl}/${product.id}`,product);
  }

  activate(productId: number) {
    return this.http.put(`${productsUrl}/activate/${productId}`,{});
  }

  deactivate(productId: number) {
    return this.http.put(`${productsUrl}/deactivate/${productId}`,{});
  }

  delete(product: Product) {
    return this.http.delete(`${productsUrl}/${product.id}`);
  }

  uploadImage(image: File){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', image);
  
    return this.http.post(imagesUrl,uploadImageData);
  }
}
