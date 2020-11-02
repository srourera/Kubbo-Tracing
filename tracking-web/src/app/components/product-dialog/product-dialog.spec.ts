import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialog } from './product-dialog';
import { ImagePipe } from '../../pipes/image.pipe';
import { productWithImage, inputFileEvent, emptyProduct, fullProduct, sliderToggleEventTrue, sliderToggleEventFalse, clone } from '../../app.data.spec';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ProductDialogComponent', () => {
  let dialog: ProductDialog;
  let imagePipe: ImagePipe;
  let fixture: ComponentFixture<ProductDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDialog ],
      imports: [MatDialogModule],
      providers: [
        ImagePipe,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close(){} } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDialog);
    imagePipe = TestBed.get(ImagePipe);
    dialog = fixture.componentInstance;
    dialog.product = clone(emptyProduct);
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Given
    // Then
    expect(dialog).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init preview image', ()=>{
      // Given
      spyOn(imagePipe, 'transform');
      const product = clone(productWithImage);
      dialog.product = product;
      // When
      dialog.ngOnInit();
      // Then
      expect(imagePipe.transform).toHaveBeenCalledWith(productWithImage.image);
    });
  });

  describe('toggleEnabled',()=>{    
    it('should set the enabled slider with the event.checked when true', ()=>{
      // Given          
      const event = clone(sliderToggleEventTrue);
      // When
      dialog.toggleEnabled(event);
      // Then
      expect(dialog.product.enabled).toBeTruthy();
    });
    it('should set the enabled slider with the event.checked when false', ()=>{
      // Given          
      dialog.product.enabled = true;
      const event = clone(sliderToggleEventFalse);
      // When
      dialog.toggleEnabled(event);
      // Then
      expect(dialog.product.enabled).toBeFalsy();
    })
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
      dialog.product = clone(fullProduct);     
      spyOn(dialog.save,'emit');
      // When
      dialog.onSaveClick();
      // Then
      expect(dialog.save.emit).toHaveBeenCalledWith(fullProduct);
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

  describe('removeImage',()=>{    
    it('should remove image from product', ()=>{
      // Given
      dialog.product = clone(productWithImage);
      // When
      dialog.removeImage();
      // Then
      expect(dialog.product.image).toBeNull();
      expect(dialog.product.imageFile).toBeNull();
    })
  });

  describe('onFileChanged',()=>{    
    it('should assign imageFile', ()=>{
      // Given      
      const event = clone(inputFileEvent);
      spyOn(dialog,'setPreviewImage');
      // When
      dialog.onFileChanged(event);
      // Then
      expect(dialog.setPreviewImage).toHaveBeenCalled();
      expect(dialog.product.imageFile).not.toBeNull();
    })
  });

});
