"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StocksTableComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var Properties_1 = require("../../configuration/Properties");
var StocksTableComponent = /** @class */ (function () {
    function StocksTableComponent() {
        this.stockColumns = Properties_1.stockColumns;
        this.stocks = [];
    }
    StocksTableComponent.prototype.ngOnChanges = function () {
        this.stockDataSource = new table_1.MatTableDataSource(this.stocks);
    };
    StocksTableComponent.prototype.sortData = function (event) {
        this.sort(event.active, event.direction === "asc");
    };
    StocksTableComponent.prototype.sort = function (key, asc) {
        if (asc === void 0) { asc = false; }
        this.stockDataSource = new table_1.MatTableDataSource(this.stocks.sort(function (a, b) {
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
    ], StocksTableComponent.prototype, "stocks");
    StocksTableComponent = __decorate([
        core_1.Component({
            selector: 'stocks-table',
            templateUrl: './stocks-table.component.html',
            styleUrls: ['./stocks-table.component.css']
        })
    ], StocksTableComponent);
    return StocksTableComponent;
}());
exports.StocksTableComponent = StocksTableComponent;
