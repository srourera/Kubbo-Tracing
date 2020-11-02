import { of as observableOf, Observable } from 'rxjs';
import { clone, fullProduct, productList } from '../app.data.spec';
import { Product } from '../models/product.model';

export class FakeProductService {

    constructor() { }

    create(product: Product) {
      return observableOf(clone(fullProduct));
    }

    edit(product: Product) {
      return observableOf(clone(fullProduct));
    }

    delete(product: Product) {
      return observableOf(clone(fullProduct));
    }

    getProducts(): Observable<Product[]> {
        return observableOf(productList);
    }

    getProductById(id:number): Observable<Product> {
        return observableOf(clone(fullProduct));
    }
    
    activate(productId: number) {
        return observableOf(clone(fullProduct));
    }

    deactivate(productId: number) {
        return observableOf(clone(fullProduct));
    }

    uploadImage(image: File){
        return observableOf(1);
    }
}