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
exports.StockDialog = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var Properties_1 = require("../../configuration/Properties");
var StockDialog = /** @class */ (function () {
    function StockDialog(warehousesService, dialogRef, stock) {
        this.warehousesService = warehousesService;
        this.dialogRef = dialogRef;
        this.stock = stock;
        this.stockStatus = Properties_1.stockStatus;
        this.warehouses = [];
    }
    StockDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.warehousesService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
    };
    StockDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    StockDialog = __decorate([
        core_1.Component({
            selector: 'stock-dialog',
            templateUrl: './stock-dialog.html',
            styleUrls: ['./stock-dialog.css']
        }),
        __param(2, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], StockDialog);
    return StockDialog;
}());
exports.StockDialog = StockDialog;
