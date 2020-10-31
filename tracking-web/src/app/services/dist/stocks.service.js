"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StocksService = void 0;
var core_1 = require("@angular/core");
var Properties_1 = require("../configuration/Properties");
var StocksService = /** @class */ (function () {
    function StocksService(http) {
        this.http = http;
    }
    StocksService.prototype.getStockByProductId = function (productId) {
        return this.http.get(Properties_1.stocksUrl + "/" + productId);
    };
    StocksService.prototype.create = function (stock) {
        return this.http.post(Properties_1.stocksUrl, stock);
    };
    StocksService.prototype.edit = function (stock) {
        return this.http.put(Properties_1.stocksUrl + "/" + stock.id, stock);
    };
    StocksService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StocksService);
    return StocksService;
}());
exports.StocksService = StocksService;
