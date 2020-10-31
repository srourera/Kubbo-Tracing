import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialog } from './product-dialog';

describe('ProductDialogComponent', () => {
  let component: ProductDialog;
  let fixture: ComponentFixture<ProductDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
