import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableComponent } from './products-table.component';
import { clone, emptyProductList, productList, fullProduct, sliderToggleEventFalse, sliderToggleEventTrue, simpleEvent } from '../../app.data.spec';

describe('ProductsTableComponent', () => {
  let table: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTableComponent);
    table = fixture.componentInstance;
    table.products = emptyProductList;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Given
    // Then
    expect(table).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should retrieve warehouses', ()=>{
      // Given 
      table.products = productList;     
      // When
      table.ngOnChanges();
      // Then
      expect(table.productsDataSource.data.length).toBe(productList.length);
    });
  });

  describe('seeProduct',()=>{    
    it('should emit clicked event', ()=>{
      // Given     
      const product = clone(fullProduct);     
      spyOn(table.clicked,'emit');
      // When
      table.seeProduct(product);
      // Then
      expect(table.clicked.emit).toHaveBeenCalledWith(fullProduct);
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

      spyOn(table.enable,'emit');
      // When
      table.enableProduct(event,product);
      // Then
      expect(table.enable.emit).toHaveBeenCalledWith(productExpected);
    });
    it('should emit enable event after change enabled to false', ()=>{
      // Given     
      const product = clone(fullProduct);   
      product.enabled = true;

      const productExpected = clone(fullProduct);   
      productExpected.enabled = false;

      const event = sliderToggleEventFalse;  

      spyOn(table.enable,'emit');
      // When
      table.enableProduct(event,product);
      // Then
      expect(table.enable.emit).toHaveBeenCalledWith(productExpected);
    })
  });

  describe('createProduct',()=>{    
    it('should emit create event', ()=>{
      // Given     
      spyOn(table.create,'emit');
      // When
      table.createProduct();
      // Then
      expect(table.create.emit).toHaveBeenCalled();
    })
  });

  describe('editProduct',()=>{    
    it('should stop propagation and emit edit event',()=>{
      // Given     
      spyOn(table.edit,'emit');
      spyOn(table,'stopPropagation');
      const event = clone(simpleEvent);
      const product = clone(fullProduct);
      // When
      table.editProduct(event,product);
      // Then
      expect(table.edit.emit).toHaveBeenCalledWith(fullProduct);
      expect(table.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('deleteProduct',()=>{    
    it('should stop propagation and emit edit event',()=>{
      // Given     
      spyOn(table.delete,'emit');
      spyOn(table,'stopPropagation');
      const event = clone(simpleEvent);
      const product = clone(fullProduct);
      // When
      table.deleteProduct(event,product);
      // Then
      expect(table.delete.emit).toHaveBeenCalledWith(fullProduct);
      expect(table.stopPropagation).toHaveBeenCalled();
    });
  });

  describe('stopPropagation',()=>{    
    it('should stop propagation',()=>{
      // Given     
      const event = clone(simpleEvent);
      spyOn(event,'stopPropagation');
      // When
      table.stopPropagation(event);
      // Then
      expect(event.stopPropagation).toHaveBeenCalled();
    });
  });
});
