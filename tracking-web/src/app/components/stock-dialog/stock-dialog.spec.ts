import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { StockDialog } from './stock-dialog';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { emptyStock, fullStock, clone, warehouseList } from '../../app.data.spec';
import { WarehousesService } from '../../services/warehouses.service';
import { FakeWarehousesService } from '../../services/fake-warehouses.service.spec';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

describe('StockDialogComponent', () => {
  let dialog: StockDialog;
  let fixture: ComponentFixture<StockDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDialog ],
      imports: [MatDialogModule, MatSnackBarModule],
      providers: [
        { provide: WarehousesService, useClass: FakeWarehousesService },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
        { provide: MatDialogRef, useValue: { close(){} } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDialog);
    dialog = fixture.componentInstance;
    dialog.stock = clone(emptyStock);
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Given
    // Then
    expect(dialog).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should retrieve warehouses', fakeAsync(()=>{
      // Given      
      // When
      dialog.ngOnInit();
      tick();
      // Then
      expect(dialog.warehouses.length).toBe(warehouseList.length);
    }));
  });

  describe('onNoClick',()=>{    
    it('should close the dialog', ()=>{
      // Given          
      spyOn(dialog,'closeDialog');
      // When
      dialog.onNoClick();
      // Then
      expect(dialog.closeDialog).toHaveBeenCalled();
    })
  });

  describe('onSaveClick',()=>{    
    it('should emit save event', ()=>{
      // Given     
      dialog.stock = clone(fullStock);     
      spyOn(dialog.save,'emit');
      // When
      dialog.onSaveClick();
      // Then
      expect(dialog.save.emit).toHaveBeenCalledWith(fullStock);
    })
  });

  describe('closeDialog',()=>{    
    it('should close the dialog', ()=>{
      // Given          
      spyOn(dialog.dialogRef,'close');
      // When
      dialog.closeDialog();
      // Then
      expect(dialog.dialogRef.close).toHaveBeenCalled();
    })
  });

});
