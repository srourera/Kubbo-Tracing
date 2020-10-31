"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsTableComponent = void 0;
var core_1 = require("@angular/core");
var Properties_1 = require("../../configuration/Properties");
var table_1 = require("@angular/material/table");
var ProductsTableComponent = /** @class */ (function () {
    function ProductsTableComponent() {
        this.productColumns = Properties_1.productColumns;
        this.products = [];
        this.hidden = false;
        this.productClicked = new core_1.EventEmitter();
        this.editProductClicked = new core_1.EventEmitter();
        this.enableProductClicked = new core_1.EventEmitter();
        this.deleteProductClicked = new core_1.EventEmitter();
    }
    ProductsTableComponent.prototype.ngOnChanges = function () {
        this.productsDataSource = new table_1.MatTableDataSource(this.products);
    };
    ProductsTableComponent.prototype.seeProduct = function (product) {
        this.productClicked.emit(product);
    };
    ProductsTableComponent.prototype.enableProduct = function (event, product) {
        event.stopPropagation();
        this.enableProductClicked.emit(product);
    };
    ProductsTableComponent.prototype.editProduct = function (event, product) {
        event.stopPropagation();
        this.editProductClicked.emit(product);
    };
    ProductsTableComponent.prototype.deleteProduct = function (event, product) {
        event.stopPropagation();
        this.deleteProductClicked.emit(product);
    };
    ProductsTableComponent.prototype.sortData = function (event) {
        this.sort(event.active, event.direction === "asc");
    };
    ProductsTableComponent.prototype.sort = function (key, asc) {
        if (asc === void 0) { asc = false; }
        this.productsDataSource = new table_1.MatTableDataSource(this.products.sort(function (a, b) {
            if (a[key] < b[key])
                return asc ? -1 : 1;
            else if (a[key] > b[key])
                return asc ? 1 : -1;
            else
                return 0;
        }));
    };
    __decorate([
        core_1.Input()
    ], ProductsTableComponent.prototype, "products");
    __decorate([
        core_1.Input()
    ], ProductsTableComponent.prototype, "hidden");
    __decorate([
        core_1.Output()
    ], ProductsTableComponent.prototype, "productClicked");
    __decorate([
        core_1.Output()
    ], ProductsTableComponent.prototype, "editProductClicked");
    __decorate([
        core_1.Output()
    ], ProductsTableComponent.prototype, "enableProductClicked");
    __decorate([
        core_1.Output()
    ], ProductsTableComponent.prototype, "deleteProductClicked");
    ProductsTableComponent = __decorate([
        core_1.Component({
            selector: 'products-table',
            templateUrl: './products-table.component.html',
            styleUrls: ['./products-table.component.css']
        })
    ], ProductsTableComponent);
    return ProductsTableComponent;
}());
exports.ProductsTableComponent = ProductsTableComponent;
