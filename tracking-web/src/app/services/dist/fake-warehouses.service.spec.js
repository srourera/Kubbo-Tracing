"use strict";
exports.__esModule = true;
exports.FakeWarehousesService = void 0;
var rxjs_1 = require("rxjs");
var app_data_spec_1 = require("../app.data.spec");
var FakeWarehousesService = /** @class */ (function () {
    function FakeWarehousesService() {
    }
    FakeWarehousesService.prototype.getWarehouses = function () {
        return rxjs_1.of(app_data_spec_1.warehouseList);
    };
    return FakeWarehousesService;
}());
exports.FakeWarehousesService = FakeWarehousesService;
