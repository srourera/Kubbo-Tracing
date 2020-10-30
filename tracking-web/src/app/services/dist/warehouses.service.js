"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WarehousesService = void 0;
var core_1 = require("@angular/core");
var Properties_1 = require("../configuration/Properties");
var WarehousesService = /** @class */ (function () {
    function WarehousesService(http) {
        this.http = http;
    }
    WarehousesService.prototype.getWarehouses = function () {
        return this.http.get(Properties_1.warehousesUrl);
    };
    WarehousesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], WarehousesService);
    return WarehousesService;
}());
exports.WarehousesService = WarehousesService;
