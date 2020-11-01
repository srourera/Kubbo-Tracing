"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProductDialog = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var ProductDialog = /** @class */ (function () {
    function ProductDialog(imagePipe, dialogRef, product) {
        this.imagePipe = imagePipe;
        this.dialogRef = dialogRef;
        this.product = product;
        this.preview = "../../../assets/images/AddImage.jpg";
        this.save = new core_1.EventEmitter();
    }
    ProductDialog.prototype.ngOnInit = function () {
        if (!!this.product && !!this.product.id && !!this.product.image) {
            this.preview = this.imagePipe.transform(this.product.image);
        }
    };
    ProductDialog.prototype.toggleEnabled = function (event) {
        this.product.enabled = event.checked;
    };
    ProductDialog.prototype.onNoClick = function () {
        this.closeDialog();
    };
    ProductDialog.prototype.onSaveClick = function () {
        this.save.emit(this.product);
    };
    ProductDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ProductDialog.prototype.setErrors = function () {
    };
    ProductDialog.prototype.imageClick = function () {
        document.getElementById("image-input").click();
    };
    ProductDialog.prototype.removeImage = function () {
        this.product.image = null;
        this.product.imageFile = null;
        this.preview = "../../../assets/images/AddImage.jpg";
    };
    ProductDialog.prototype.onFileChanged = function (event) {
        this.product.imageFile = event.target.files[0];
        this.setPreviewImage();
    };
    ProductDialog.prototype.setPreviewImage = function () {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.preview = e.target.result;
        };
        reader.readAsDataURL(this.product.imageFile);
    };
    __decorate([
        core_1.Output()
    ], ProductDialog.prototype, "save");
    ProductDialog = __decorate([
        core_1.Component({
            selector: 'product-dialog',
            templateUrl: './product-dialog.html',
            styleUrls: ['./product-dialog.css']
        }),
        __param(2, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ProductDialog);
    return ProductDialog;
}());
exports.ProductDialog = ProductDialog;
