"use strict";
exports.__esModule = true;
exports.productColumns = exports.warehousesUrl = exports.stocksUrl = exports.productsUrl = exports.baseUrl = exports.appTitle = void 0;
exports.appTitle = 'kubbo smart logistics';
// export const baseUrl = '/gui';
exports.baseUrl = 'http://localhost:8000/gui';
exports.productsUrl = exports.baseUrl + '/products';
exports.stocksUrl = exports.baseUrl + '/stocks';
exports.warehousesUrl = exports.baseUrl + '/warehouses';
exports.productColumns = ['image', 'name', 'sku', 'barcode', 'price', 'enabled', 'actions'];
