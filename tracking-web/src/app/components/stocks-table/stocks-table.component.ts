import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { stockColumns } from '../../configuration/Properties';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.css']
})
export class StocksTableComponent implements OnChanges {

  stockColumns = stockColumns;

  @Input() stocks: Stock[] = [];
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<Stock> = new EventEmitter();
  @Output() delete: EventEmitter<Stock> = new EventEmitter();

  stockDataSource: MatTableDataSource<Stock>;

  constructor() { }

  ngOnChanges(): void {
    this.stockDataSource = new MatTableDataSource<Stock>(this.stocks);
  }

  createStock() {
    this.create.emit();
  }

  editStock(stock: Stock) {
    this.edit.emit(stock);    
  }

  deleteStock(stock: Stock) {
    this.delete.emit(stock);    
  }

  sortData(event) {
    this.sort(event.active, event.direction === "asc");
  }

  private sort(key, asc = false) {    
    this.stockDataSource = new MatTableDataSource<Stock>(this.stocks.sort((a, b) =>{
      let first = a as any;
      let second = b as any;
      if(key === "name" || key === "city"){
        first = a.warehouse;
        second = b.warehouse;      
      }
      if(first[key] < second[key]) return asc ? -1 : 1;
      else if(first[key] > second[key]) return asc ? 1 : -1;
      else return 0;
    }));
  }

}
