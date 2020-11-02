import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksTableComponent } from './stocks-table.component';
import { emptyStockList, stockList, clone, fullStock } from '../../app.data.spec';

describe('StocksTableComponent', () => {
  let table: StocksTableComponent;
  let fixture: ComponentFixture<StocksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksTableComponent);
    table = fixture.componentInstance;
    table.stocks = emptyStockList;
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
      table.stocks = stockList;     
      // When
      table.ngOnChanges();
      // Then
      expect(table.stockDataSource.data.length).toBe(stockList.length);
    });
  });

  describe('createStock',()=>{    
    it('should emit create event', ()=>{
      // Given     
      spyOn(table.create,'emit');
      // When
      table.createStock();
      // Then
      expect(table.create.emit).toHaveBeenCalled();
    })
  });

  describe('editStock',()=>{    
    it('should emit edit event',()=>{
      // Given     
      spyOn(table.edit,'emit');
      const stock = clone(fullStock);
      // When
      table.editStock(stock);
      // Then
      expect(table.edit.emit).toHaveBeenCalledWith(fullStock);
    });
  });

  describe('deleteStock',()=>{    
    it('should emit edit event',()=>{
      // Given     
      spyOn(table.delete,'emit');
      const stock = clone(fullStock);
      // When
      table.deleteStock(stock);
      // Then
      expect(table.delete.emit).toHaveBeenCalledWith(fullStock);
    });
  });
});
