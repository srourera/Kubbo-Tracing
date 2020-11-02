"use strict";
exports.__esModule = true;
exports.clone = exports.fakeStockDialog = exports.fakeProductDialogWithImageFile = exports.fakeProductDialog = exports.inputFileEvent = exports.simpleEvent = exports.sliderToggleEventFalse = exports.sliderToggleEventTrue = exports.stockList = exports.emptyStockList = exports.warehouseList = exports.emptyWarehouseList = exports.productList = exports.emptyProductList = exports.fullStock = exports.emptyStock = exports.fullWarehouse = exports.emptyWarehouse = exports.productWithImage = exports.fullProduct = exports.emptyProduct = void 0;
/* PRODUCT */
exports.emptyProduct = {};
exports.fullProduct = {
    id: 1,
    name: "name",
    sku: "sku",
    barcode: "barcode",
    image: 1,
    enabled: true,
    price: "35.50"
};
exports.productWithImage = {
    id: 1,
    image: 1,
    imageFile: {}
};
/* WAREHOUSE */
exports.emptyWarehouse = {};
exports.fullWarehouse = {
    id: 1,
    name: "name",
    city: "city"
};
/* STOCK */
exports.emptyStock = {};
exports.fullStock = {
    id: 1,
    productId: 1,
    warehouseId: 1,
    warehouse: exports.fullWarehouse,
    quantity: 1,
    status: "AVAILABLE"
};
/* PRODUCTS LIST */
exports.emptyProductList = [];
exports.productList = [clone(exports.fullProduct), clone(exports.fullProduct), clone(exports.fullProduct)];
/* WAREHOUSE LIST */
exports.emptyWarehouseList = [];
exports.warehouseList = [clone(exports.fullWarehouse), clone(exports.fullWarehouse), clone(exports.fullWarehouse)];
/* STOCK LIST */
exports.emptyStockList = [];
exports.stockList = [clone(exports.fullStock), clone(exports.fullStock), clone(exports.fullStock)];
/* EVENTS */
exports.sliderToggleEventTrue = { checked: true };
exports.sliderToggleEventFalse = { checked: false };
exports.simpleEvent = { stopPropagation: function () { } };
exports.inputFileEvent = {
    target: {
        files: [
            {}
        ]
    }
};
/* DIALOG */
exports.fakeProductDialog = {
    componentInstance: {
        save: {
            subscribe: function (a) { a(clone(exports.fullProduct)); }
        },
        closeDialog: function () { }
    }
};
exports.fakeProductDialogWithImageFile = {
    componentInstance: {
        save: {
            subscribe: function (a) {
                var p = clone(exports.fullProduct);
                p.imageFile = {};
                a(p);
            }
        },
        closeDialog: function () { }
    }
};
exports.fakeStockDialog = {
    componentInstance: {
        save: {
            subscribe: function (a) { a(clone(exports.fullStock)); }
        },
        closeDialog: function () { }
    }
};
/* CLONE */
function clone(obj) {
    return Object.assign({}, obj);
}
exports.clone = clone;
