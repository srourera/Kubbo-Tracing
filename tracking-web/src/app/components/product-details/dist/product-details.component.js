"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(stocksService) {
        this.stocksService = stocksService;
        this.hidden = false;
        this.stocks = [];
        this.edit = new core_1.EventEmitter();
        this.enable = new core_1.EventEmitter();
        this["delete"] = new core_1.EventEmitter();
    }
    ProductDetailsComponent.prototype.ngOnChanges = function () {
        this.loadStock();
    };
    ProductDetailsComponent.prototype.loadStock = function () {
        var _this = this;
        this.stocks = [];
        if (!!this.product && !!this.product.id) {
            this.stocksService.getStockByProductId(this.product.id).subscribe(function (response) {
                if (!response)
                    return;
                _this.stocks = response;
            }, function () { });
        }
    };
    ProductDetailsComponent.prototype.editProduct = function (product) {
        this.edit.emit(product);
    };
    ProductDetailsComponent.prototype.enableProduct = function (event, product) {
        product.enabled = event.checked;
        this.enable.emit(product);
    };
    ProductDetailsComponent.prototype.deleteProduct = function (product) {
        this["delete"].emit(product);
    };
    ProductDetailsComponent.prototype.addStock = function () {
        console.log("ADD stock");
    };
    __decorate([
        core_1.Input()
    ], ProductDetailsComponent.prototype, "hidden");
    __decorate([
        core_1.Input()
    ], ProductDetailsComponent.prototype, "product");
    __decorate([
        core_1.Input()
    ], ProductDetailsComponent.prototype, "stocks");
    __decorate([
        core_1.Output()
    ], ProductDetailsComponent.prototype, "edit");
    __decorate([
        core_1.Output()
    ], ProductDetailsComponent.prototype, "enable");
    __decorate([
        core_1.Output()
    ], ProductDetailsComponent.prototype, "delete");
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
