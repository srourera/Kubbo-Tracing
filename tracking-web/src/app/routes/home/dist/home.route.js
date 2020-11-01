"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeRoute = void 0;
var core_1 = require("@angular/core");
var product_dialog_1 = require("../../components/product-dialog/product-dialog");
var HomeRoute = /** @class */ (function () {
    function HomeRoute(productsService, dialog, router, route) {
        this.productsService = productsService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.showCurrentProduct = false;
        this.currentProduct = {};
    }
    ;
    HomeRoute.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            var productId = !!p && !!p.productId && !isNaN(p.productId) ? Number(p.productId) : -1;
            if (productId !== -1)
                _this.loadProduct(productId);
            else {
                _this.loadProducts();
                _this.showCurrentProduct = false;
            }
        });
    };
    HomeRoute.prototype.loadProduct = function (productId) {
        var _this = this;
        this.currentProduct = {};
        this.productsService.getProductById(productId).subscribe(function (response) {
            if (!response || !response.id)
                _this.router.navigate(['']);
            _this.currentProduct = response;
            _this.showCurrentProduct = true;
        }, function () {
            _this.showCurrentProduct = false;
            _this.router.navigate(['']);
        });
    };
    HomeRoute.prototype.loadProducts = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (response) {
            _this.products = response;
        }, function () {
            _this.products = [];
        });
    };
    HomeRoute.prototype.createProduct = function () {
        var _this = this;
        var dialogRef = this.productDialog();
        dialogRef.componentInstance.save.subscribe(function (product) {
            if (!product)
                dialogRef.componentInstance.closeDialog();
            _this.loading = true;
            if (!!product.imageFile) {
                _this.productsService.uploadImage(product.imageFile).subscribe(function (id) {
                    product.image = id;
                    _this.productsService.create(product).subscribe(function (product) {
                        _this.router.navigate(['products', product.id]);
                        dialogRef.componentInstance.closeDialog();
                        _this.loading = false;
                    });
                });
            }
            else {
                product.image = null;
                _this.productsService.create(product).subscribe(function (product) {
                    _this.router.navigate(['products', product.id]);
                    dialogRef.componentInstance.closeDialog();
                    _this.loading = false;
                });
            }
        });
    };
    HomeRoute.prototype.editProduct = function (product) {
        var _this = this;
        var p = Object.assign({}, product);
        var dialogRef = this.productDialog(p);
        dialogRef.componentInstance.save.subscribe(function (product) {
            if (!product)
                dialogRef.componentInstance.closeDialog();
            _this.loading = true;
            if (!!product.imageFile) {
                _this.productsService.uploadImage(product.imageFile).subscribe(function (id) {
                    product.image = id;
                    _this.productsService.edit(product).subscribe(function (product) {
                        _this.currentProduct = product;
                        _this.router.navigate(['products', product.id]);
                        dialogRef.componentInstance.closeDialog();
                        _this.loading = false;
                    });
                });
            }
            else {
                _this.productsService.edit(product).subscribe(function (product) {
                    _this.currentProduct = product;
                    _this.router.navigate(['products', product.id]);
                    dialogRef.componentInstance.closeDialog();
                    _this.loading = false;
                });
            }
        });
    };
    HomeRoute.prototype.enableProduct = function (product) {
        if (product.enabled)
            this.productsService.activate(product.id).subscribe();
        else
            this.productsService.deactivate(product.id).subscribe();
    };
    HomeRoute.prototype.deleteProduct = function (product) {
        var _this = this;
        if (confirm("Are you sure to delete " + product.name + "?")) {
            this.loading = true;
            this.productsService["delete"](product).subscribe(function () {
                _this.loading = false;
                if (_this.showCurrentProduct)
                    _this.router.navigate(['']);
                else
                    _this.loadProducts();
            });
        }
    };
    HomeRoute.prototype.productClicked = function (product) {
        this.router.navigate(['products', product.id]);
    };
    HomeRoute.prototype.productDialog = function (product) {
        if (product === void 0) { product = {}; }
        return this.dialog.open(product_dialog_1.ProductDialog, {
            width: '80vw',
            data: product
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
