import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoute } from './home.route';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FakeProductService } from '../../services/fake-product.service.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { of as observableOf } from 'rxjs';
import { fakeProductDialog } from 'src/app/app.data.spec';
import { clone, fakeProductDialogWithImageFile, fullProduct, productList } from '../../app.data.spec';

describe('HomeRoute', () => {
  let home: HomeRoute;
  let router: Router;
  let route: ActivatedRoute;
  let productService: ProductsService;
  let fixture: ComponentFixture<HomeRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRoute ],
      imports: [MatDialogModule, MatSnackBarModule,RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { params: observableOf({ productId: '' }) } },
        { provide: ProductsService, useClass: FakeProductService },
        { provide: MatSnackBar, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoute);
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    productService = TestBed.get(ProductsService);
    home = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Given
    // Then
    expect(home).toBeTruthy();
  });

  describe('ngOnInit',()=>{
    it('should load all products if no products are selected',()=>{
      // Given
      route.params = observableOf({ productId: '' });
      spyOn(productService,'getProducts').and.callThrough();
      spyOn(productService,'getProductById');
      // When
      home.ngOnInit();
      // Then
      expect(productService.getProducts).toHaveBeenCalled();
      expect(productService.getProductById).not.toHaveBeenCalled();
      expect(home.showCurrentProduct).toBeFalsy();
    });
    it('should load single product if product is selected',()=>{
      // Given
      const id = 1;
      route.params = observableOf({ productId: id.toString() });
      spyOn(productService,'getProducts');
      spyOn(productService,'getProductById').and.callThrough();
      // When
      home.ngOnInit();
      // Then
      expect(productService.getProductById).toHaveBeenCalledWith(id);
      expect(productService.getProducts).not.toHaveBeenCalled();
      expect(home.showCurrentProduct).toBeTruthy();
    });
  });

  describe('createProduct',()=>{
    it('should open dialog and upload image before create',()=>{
      // Given
      spyOn(home.dialog,'open').and.returnValue(clone(fakeProductDialogWithImageFile));
      spyOn(productService,'uploadImage').and.callThrough();
      spyOn(productService,'create').and.callThrough();
      spyOn(router,'navigate');
      // When
      home.createProduct();
      // Then
      expect(home.dialog.open).toHaveBeenCalled();
      expect(productService.uploadImage).toHaveBeenCalled();
      expect(productService.create).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
      expect(home.loading).toBeFalsy();
    });
    it('should open dialog and not upload any image before create',()=>{
      // Given
      spyOn(home.dialog,'open').and.returnValue(clone(fakeProductDialog));
      spyOn(productService,'uploadImage');
      spyOn(productService,'create').and.callThrough();
      spyOn(router,'navigate');
      // When
      home.createProduct();
      // Then
      expect(home.dialog.open).toHaveBeenCalled();
      expect(productService.uploadImage).not.toHaveBeenCalled();
      expect(productService.create).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
      expect(home.loading).toBeFalsy();
    });
  });

  describe('editProduct',()=>{
    it('should open dialog and upload image before edit',()=>{
      // Given
      const product = clone(fullProduct);
      spyOn(home.dialog,'open').and.returnValue(clone(fakeProductDialogWithImageFile));
      spyOn(productService,'uploadImage').and.callThrough();
      spyOn(productService,'edit').and.callThrough();
      spyOn(router,'navigate');
      // When
      home.editProduct(product);
      // Then
      expect(home.dialog.open).toHaveBeenCalled();
      expect(productService.uploadImage).toHaveBeenCalled();
      expect(productService.edit).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
      expect(home.loading).toBeFalsy();
    });
    it('should open dialog and not upload any image before edit',()=>{
      // Given
      const product = clone(fullProduct);
      spyOn(home.dialog,'open').and.returnValue(clone(fakeProductDialog));
      spyOn(productService,'uploadImage');
      spyOn(productService,'edit').and.callThrough();
      spyOn(router,'navigate');
      // When
      home.editProduct(product);
      // Then
      expect(home.dialog.open).toHaveBeenCalled();
      expect(productService.uploadImage).not.toHaveBeenCalled();
      expect(productService.edit).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
      expect(home.loading).toBeFalsy();
    });
  });

  describe('enableProduct',()=>{
    it('should activate product if enabled is true',()=>{
      // Given
      const product = clone(fullProduct);
      product.enabled = true;
      spyOn(productService,'activate').and.callThrough();
      spyOn(productService,'deactivate');
      // When
      home.enableProduct(product);
      // Then
      expect(productService.activate).toHaveBeenCalled();
      expect(productService.deactivate).not.toHaveBeenCalled();
    });
    it('should deactivate product if enabled is false',()=>{
      // Given
      const product = clone(fullProduct);
      product.enabled = false;
      spyOn(productService,'activate');
      spyOn(productService,'deactivate').and.callThrough();
      // When
      home.enableProduct(product);
      // Then
      expect(productService.activate).not.toHaveBeenCalled();
      expect(productService.deactivate).toHaveBeenCalled();
    });
  });

  describe('deleteProduct',()=>{    
    it('should ask confirmation', ()=>{
      // Given     
      spyOn(window,'confirm').and.returnValue(false);
      spyOn(productService, 'delete');
      const product = clone(fullProduct);
      // When
      home.deleteProduct(product);
      // Then
      expect(productService.delete).not.toHaveBeenCalled();
    });
    it('should delete if user confirms', ()=>{
      // Given     
      home.showCurrentProduct = false;
      spyOn(window,'confirm').and.returnValue(true);
      spyOn(productService, 'delete').and.callThrough();
      spyOn(productService, 'getProducts').and.callThrough();
      spyOn(router, 'navigate');
      const product = clone(fullProduct);
      // When
      home.deleteProduct(product);
      // Then
      expect(productService.delete).toHaveBeenCalledWith(fullProduct);
      expect(productService.getProducts).toHaveBeenCalled();
      expect(router.navigate).not.toHaveBeenCalled();
    });
    it('should delete if confirmed and redirect to home', ()=>{
      // Given     
      home.showCurrentProduct = true;
      spyOn(window,'confirm').and.returnValue(true);
      spyOn(productService, 'delete').and.callThrough();
      spyOn(productService, 'getProducts').and.callThrough();
      spyOn(router, 'navigate');
      const product = clone(fullProduct);
      // When
      home.deleteProduct(product);
      // Then
      expect(productService.delete).toHaveBeenCalledWith(fullProduct);
      expect(productService.getProducts).not.toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalled();
    });

    describe('productClicked',()=>{
      it('should redirect to product page',()=>{
        // Given
        const product = clone(fullProduct);
        spyOn(router, 'navigate');
        // When
        home.productClicked(product);
        // Then
        expect(router.navigate).toHaveBeenCalledWith(['products',fullProduct.id]);
      });
    });
  });
});
