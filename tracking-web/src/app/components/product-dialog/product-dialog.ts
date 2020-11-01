import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { ImagePipe } from '../../pipes/image.pipe';

@Component({
  selector: 'product-dialog',
  templateUrl: './product-dialog.html',
  styleUrls: ['./product-dialog.css']
})
export class ProductDialog implements OnInit{
  
  selectedImage: File;
  preview: string | ArrayBuffer = "../../../assets/images/AddImage.jpg";
  
  @Output() save: EventEmitter<Product> = new EventEmitter();

  constructor(
    private imagePipe: ImagePipe,
    public dialogRef: MatDialogRef<ProductDialog>,
    @Inject(MAT_DIALOG_DATA) public product: Product) {}

  ngOnInit(){
    if(!!this.product && !!this.product.id && !!this.product.image) {
      this.preview = this.imagePipe.transform(this.product.image);
    }
  }

  toggleEnabled(event) {
    this.product.enabled = event.checked;
  }

  onNoClick() {
    this.closeDialog();
  }

  onSaveClick(){
    this.save.emit(this.product);
  }

  closeDialog(){
    this.dialogRef.close();
  }
  setErrors(){

  }

  imageClick() {
    document.getElementById("image-input").click();
  }
  removeImage(){
    this.product.image = null;
    this.product.imageFile = null;
    this.preview = "../../../assets/images/AddImage.jpg";
  }
  onFileChanged(event) {    
    this.product.imageFile = event.target.files[0];
    this.setPreviewImage();
  }
  setPreviewImage(){
    const reader = new FileReader();
    reader.onload = e => {
        this.preview = e.target.result;
    };
    reader.readAsDataURL(this.product.imageFile);
  }

}
