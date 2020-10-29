"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.HomeRoute = void 0;
var core_1 = require("@angular/core");
var HomeRoute = /** @class */ (function () {
    function HomeRoute(_productsService, _stocksService, _warehousesService) {
        this._productsService = _productsService;
        this._stocksService = _stocksService;
        this._warehousesService = _warehousesService;
    }
    ;
    HomeRoute.prototype.ngOnInit = function () {
        this._loadProducts();
        this._loadStocks();
        this._loadWarehouses();
    };
    HomeRoute.prototype._loadProducts = function () {
        var _this = this;
        this._productsService.getProducts().subscribe(function (response) {
            _this.products = __spreadArrays(response, response, response, response, response);
        });
    };
    HomeRoute.prototype._loadStocks = function () {
        this._stocksService.getStocks().subscribe(function (response) {
            // let key: string = Object.keys(response)[0];
            // this.stocks = `${key}: ${response[key]}`;
        });
    };
    HomeRoute.prototype._loadWarehouses = function () {
        this._warehousesService.getWarehouses().subscribe(function (response) {
            // let key: string = Object.keys(response)[0];
            // this.warehouses = `${key}: ${response[key]}`;
        });
    };
    HomeRoute = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.route.html',
            styleUrls: ['./home.route.css']
        })
    ], HomeRoute);
    return HomeRoute;
}());
exports.HomeRoute = HomeRoute;
