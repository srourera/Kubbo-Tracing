"use strict";
exports.__esModule = true;
exports.FakeStockService = void 0;
var rxjs_1 = require("rxjs");
var app_data_spec_1 = require("../app.data.spec");
var FakeStockService = /** @class */ (function () {
    function FakeStockService() {
    }
    FakeStockService.prototype.getStockByProductId = function (id) {
        return rxjs_1.of(app_data_spec_1.stockList);
    };
    FakeStockService.prototype.create = function (stock) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullStock));
    };
    FakeStockService.prototype.edit = function (stock) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullStock));
    };
    FakeStockService.prototype["delete"] = function (stock) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullStock));
    };
    return FakeStockService;
}());
exports.FakeStockService = FakeStockService;
