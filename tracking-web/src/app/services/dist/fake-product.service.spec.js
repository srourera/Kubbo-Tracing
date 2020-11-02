"use strict";
exports.__esModule = true;
exports.FakeProductService = void 0;
var rxjs_1 = require("rxjs");
var app_data_spec_1 = require("../app.data.spec");
var FakeProductService = /** @class */ (function () {
    function FakeProductService() {
    }
    FakeProductService.prototype.create = function (product) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullProduct));
    };
    FakeProductService.prototype.edit = function (product) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullProduct));
    };
    FakeProductService.prototype["delete"] = function (product) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullProduct));
    };
    FakeProductService.prototype.getProducts = function () {
        return rxjs_1.of(app_data_spec_1.productList);
    };
    FakeProductService.prototype.getProductById = function (id) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullProduct));
    };
    FakeProductService.prototype.activate = function (productId) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullProduct));
    };
    FakeProductService.prototype.deactivate = function (productId) {
        return rxjs_1.of(app_data_spec_1.clone(app_data_spec_1.fullProduct));
    };
    FakeProductService.prototype.uploadImage = function (image) {
        return rxjs_1.of(1);
    };
    return FakeProductService;
}());
exports.FakeProductService = FakeProductService;
