import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDialog } from './stock-dialog';

describe('StockDialogComponent', () => {
  let component: StockDialog;
  let fixture: ComponentFixture<StockDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
