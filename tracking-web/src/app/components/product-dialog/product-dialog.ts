import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-dialog',
  templateUrl: './product-dialog.html',
  styleUrls: ['./product-dialog.css']
})
export class ProductDialog {

  constructor(
    public dialogRef: MatDialogRef<ProductDialog>,
    @Inject(MAT_DIALOG_DATA) public product: Product) {}


  toggleEnabled(event) {
    this.product.enabled = event.checked;
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
