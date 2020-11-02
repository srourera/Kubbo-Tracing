import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { clone, emptyStockList, emptyProduct, fullProduct, sliderToggleEventTrue, sliderToggleEventFalse, fakeStockDialog, fullStock } from '../../app.data.spec';
import { StocksService } from 'src/app/services/stocks.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FakeStockService } from '../../services/fake-stock.service.spec';
import { PricePipe } from '../../pipes/price.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductDetailsComponent', () => {
  let productDetails: ProductDetailsComponent;
  let stockService: StocksService;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent,PricePipe ],
      imports: [MatDialogModule, MatSnackBarModule,BrowserAnimationsModule],
      providers: [
        PricePipe,
        { provide: StocksService, useClass: FakeStockService },
        { provide: MatSnackBar, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    stockService = TestBed.get(StocksService);
    productDetails = fixture.componentInstance;
    productDetails.product = clone(emptyProduct);
    productDetails.stocks = emptyStockList;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Given
    // Then
    expect(productDetails).toBeTruthy();
  });

  describe('ngOnChanges', ()=>{
    it('should load stock if product is valid',()=>{
      // Given
      productDetails.product = clone(fullProduct);
      spyOn(stockService, 'getStockByProductId').and.callThrough();
      // When
      productDetails.ngOnChanges();
      // Then
      expect(stockService.getStockByProductId).toHaveBeenCalledWith(fullProduct.id);
    });
    it('should not load any stock if product is not valid',()=>{
      // Given
      productDetails.product = null;
      spyOn(stockService, 'getStockByProductId').and.callThrough();
      // When
      productDetails.ngOnChanges();
      // Then
      expect(stockService.getStockByProductId).not.toHaveBeenCalled();
    });
  });

  describe('editProduct',()=>{    
    it('should emit edit event', ()=>{
      // Given     
      const product = clone(fullProduct);
      spyOn(productDetails.edit,'emit');
      // When
      productDetails.editProduct(product);
      // Then
      expect(productDetails.edit.emit).toHaveBeenCalledWith(fullProduct);
    })
  });

  describe('enableProduct',()=>{    
    it('should emit enable event after change enabled to true', ()=>{
      // Given     
      const product = clone(fullProduct);   
      product.enabled = false;

      const productExpected = clone(fullProduct);   
      productExpected.enabled = true;

      const event = sliderToggleEventTrue;  

      spyOn(productDetails.enable,'emit');
      // When
      productDetails.enableProduct(event,product);
      // Then
      expect(productDetails.enable.emit).toHaveBeenCalledWith(productExpected);
    });
    it('should emit enable event after change enabled to false', ()=>{
      // Given     
      const product = clone(fullProduct);   
      product.enabled = true;

      const productExpected = clone(fullProduct);   
      productExpected.enabled = false;

      const event = sliderToggleEventFalse;  

      spyOn(productDetails.enable,'emit');
      // When
      productDetails.enableProduct(event,product);
      // Then
      expect(productDetails.enable.emit).toHaveBeenCalledWith(productExpected);
    })
  });

  describe('deleteProduct',()=>{    
    it('should emit delete event', ()=>{
      // Given     
      const product = clone(fullProduct);
      spyOn(productDetails.delete,'emit');
      // When
      productDetails.deleteProduct(product);
      // Then
      expect(productDetails.delete.emit).toHaveBeenCalledWith(fullProduct);
    })
  });

  describe('addStock',()=>{    
    it('should not open dialog if product is invalid', ()=>{
      // Given     
      productDetails.product = null;
      spyOn(productDetails.dialog,'open');
      // When
      productDetails.addStock();
      // Then
      expect(productDetails.dialog.open).not.toHaveBeenCalled();
    });
    it('should open dialog if product is valid', ()=>{
      // Given     
      productDetails.product = clone(fullProduct);
      spyOn(productDetails.dialog,'open').and.returnValue(clone(fakeStockDialog));
      spyOn(stockService, 'create').and.callThrough();
      spyOn(stockService, 'getStockByProductId').and.callThrough();
      // When
      productDetails.addStock();
      // Then
      expect(productDetails.dialog.open).toHaveBeenCalled();
      expect(stockService.create).toHaveBeenCalled();
      expect(stockService.getStockByProductId).toHaveBeenCalled();
    });
  });

  describe('editStock',()=>{    
    it('should open dialog if product is valid', ()=>{
      // Given     
      productDetails.product = clone(fullProduct);
      const stock = clone(fullStock);
      spyOn(productDetails.dialog,'open').and.returnValue(clone(fakeStockDialog));
      spyOn(stockService, 'edit').and.callThrough();
      spyOn(stockService, 'getStockByProductId').and.callThrough();
      // When
      productDetails.editStock(stock);
      // Then
      expect(productDetails.dialog.open).toHaveBeenCalled();
      expect(stockService.edit).toHaveBeenCalled();
      expect(stockService.getStockByProductId).toHaveBeenCalled();
    });
  });

  describe('deleteStock',()=>{    
    it('should ask confirmation', ()=>{
      // Given     
      spyOn(window,'confirm').and.returnValue(false);
      spyOn(stockService, 'delete');
      const stock = clone(fullStock);
      // When
      productDetails.deleteStock(stock);
      // Then
      expect(stockService.delete).not.toHaveBeenCalled();
    });
    it('should delete if user confirms', ()=>{
      // Given     
      productDetails.product = clone(fullProduct);
      spyOn(window,'confirm').and.returnValue(true);
      spyOn(stockService, 'delete').and.callThrough();
      spyOn(stockService, 'getStockByProductId').and.callThrough();
      const stock = clone(fullStock);
      // When
      productDetails.deleteStock(stock);
      // Then
      expect(stockService.delete).toHaveBeenCalledWith(fullStock);
      expect(stockService.getStockByProductId).toHaveBeenCalled();
    });
  });
});
