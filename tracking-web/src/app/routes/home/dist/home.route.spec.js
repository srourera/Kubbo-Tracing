"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var home_route_1 = require("./home.route");
var snack_bar_1 = require("@angular/material/snack-bar");
var dialog_1 = require("@angular/material/dialog");
var router_1 = require("@angular/router");
var products_service_1 = require("../../services/products.service");
var fake_product_service_spec_1 = require("../../services/fake-product.service.spec");
var testing_2 = require("@angular/router/testing");
var rxjs_1 = require("rxjs");
var app_data_spec_1 = require("src/app/app.data.spec");
var app_data_spec_2 = require("../../app.data.spec");
describe('HomeRoute', function () {
    var home;
    var router;
    var route;
    var productService;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [home_route_1.HomeRoute],
                        imports: [dialog_1.MatDialogModule, snack_bar_1.MatSnackBarModule, testing_2.RouterTestingModule],
                        providers: [
                            { provide: router_1.ActivatedRoute, useValue: { params: rxjs_1.of({ productId: '' }) } },
                            { provide: products_service_1.ProductsService, useClass: fake_product_service_spec_1.FakeProductService },
                            { provide: snack_bar_1.MatSnackBar, useValue: {} }
                        ]
                    })
                        .compileComponents()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_route_1.HomeRoute);
        router = testing_1.TestBed.get(router_1.Router);
        route = testing_1.TestBed.get(router_1.ActivatedRoute);
        productService = testing_1.TestBed.get(products_service_1.ProductsService);
        home = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        // Given
        // Then
        expect(home).toBeTruthy();
    });
    describe('ngOnInit', function () {
        it('should load all products if no products are selected', function () {
            // Given
            route.params = rxjs_1.of({ productId: '' });
            spyOn(productService, 'getProducts').and.callThrough();
            spyOn(productService, 'getProductById');
            // When
            home.ngOnInit();
            // Then
            expect(productService.getProducts).toHaveBeenCalled();
            expect(productService.getProductById).not.toHaveBeenCalled();
            expect(home.showCurrentProduct).toBeFalsy();
        });
        it('should load single product if product is selected', function () {
            // Given
            var id = 1;
            route.params = rxjs_1.of({ productId: id.toString() });
            spyOn(productService, 'getProducts');
            spyOn(productService, 'getProductById').and.callThrough();
            // When
            home.ngOnInit();
            // Then
            expect(productService.getProductById).toHaveBeenCalledWith(id);
            expect(productService.getProducts).not.toHaveBeenCalled();
            expect(home.showCurrentProduct).toBeTruthy();
        });
    });
    describe('createProduct', function () {
        it('should open dialog and upload image before create', function () {
            // Given
            spyOn(home.dialog, 'open').and.returnValue(app_data_spec_2.clone(app_data_spec_2.fakeProductDialogWithImageFile));
            spyOn(productService, 'uploadImage').and.callThrough();
            spyOn(productService, 'create').and.callThrough();
            spyOn(router, 'navigate');
            // When
            home.createProduct();
            // Then
            expect(home.dialog.open).toHaveBeenCalled();
            expect(productService.uploadImage).toHaveBeenCalled();
            expect(productService.create).toHaveBeenCalled();
            expect(router.navigate).toHaveBeenCalled();
            expect(home.loading).toBeFalsy();
        });
        it('should open dialog and not upload any image before create', function () {
            // Given
            spyOn(home.dialog, 'open').and.returnValue(app_data_spec_2.clone(app_data_spec_1.fakeProductDialog));
            spyOn(productService, 'uploadImage');
            spyOn(productService, 'create').and.callThrough();
            spyOn(router, 'navigate');
            // When
            home.createProduct();
            // Then
            expect(home.dialog.open).toHaveBeenCalled();
            expect(productService.uploadImage).not.toHaveBeenCalled();
            expect(productService.create).toHaveBeenCalled();
            expect(router.navigate).toHaveBeenCalled();
            expect(home.loading).toBeFalsy();
        });
    });
    describe('editProduct', function () {
        it('should open dialog and upload image before edit', function () {
            // Given
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            spyOn(home.dialog, 'open').and.returnValue(app_data_spec_2.clone(app_data_spec_2.fakeProductDialogWithImageFile));
            spyOn(productService, 'uploadImage').and.callThrough();
            spyOn(productService, 'edit').and.callThrough();
            spyOn(router, 'navigate');
            // When
            home.editProduct(product);
            // Then
            expect(home.dialog.open).toHaveBeenCalled();
            expect(productService.uploadImage).toHaveBeenCalled();
            expect(productService.edit).toHaveBeenCalled();
            expect(router.navigate).toHaveBeenCalled();
            expect(home.loading).toBeFalsy();
        });
        it('should open dialog and not upload any image before edit', function () {
            // Given
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            spyOn(home.dialog, 'open').and.returnValue(app_data_spec_2.clone(app_data_spec_1.fakeProductDialog));
            spyOn(productService, 'uploadImage');
            spyOn(productService, 'edit').and.callThrough();
            spyOn(router, 'navigate');
            // When
            home.editProduct(product);
            // Then
            expect(home.dialog.open).toHaveBeenCalled();
            expect(productService.uploadImage).not.toHaveBeenCalled();
            expect(productService.edit).toHaveBeenCalled();
            expect(router.navigate).toHaveBeenCalled();
            expect(home.loading).toBeFalsy();
        });
    });
    describe('enableProduct', function () {
        it('should activate product if enabled is true', function () {
            // Given
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            product.enabled = true;
            spyOn(productService, 'activate').and.callThrough();
            spyOn(productService, 'deactivate');
            // When
            home.enableProduct(product);
            // Then
            expect(productService.activate).toHaveBeenCalled();
            expect(productService.deactivate).not.toHaveBeenCalled();
        });
        it('should deactivate product if enabled is false', function () {
            // Given
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            product.enabled = false;
            spyOn(productService, 'activate');
            spyOn(productService, 'deactivate').and.callThrough();
            // When
            home.enableProduct(product);
            // Then
            expect(productService.activate).not.toHaveBeenCalled();
            expect(productService.deactivate).toHaveBeenCalled();
        });
    });
    describe('deleteProduct', function () {
        it('should ask confirmation', function () {
            // Given     
            spyOn(window, 'confirm').and.returnValue(false);
            spyOn(productService, 'delete');
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            // When
            home.deleteProduct(product);
            // Then
            expect(productService["delete"]).not.toHaveBeenCalled();
        });
        it('should delete if user confirms', function () {
            // Given     
            home.showCurrentProduct = false;
            spyOn(window, 'confirm').and.returnValue(true);
            spyOn(productService, 'delete').and.callThrough();
            spyOn(productService, 'getProducts').and.callThrough();
            spyOn(router, 'navigate');
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            // When
            home.deleteProduct(product);
            // Then
            expect(productService["delete"]).toHaveBeenCalledWith(app_data_spec_2.fullProduct);
            expect(productService.getProducts).toHaveBeenCalled();
            expect(router.navigate).not.toHaveBeenCalled();
        });
        it('should delete if confirmed and redirect to home', function () {
            // Given     
            home.showCurrentProduct = true;
            spyOn(window, 'confirm').and.returnValue(true);
            spyOn(productService, 'delete').and.callThrough();
            spyOn(productService, 'getProducts').and.callThrough();
            spyOn(router, 'navigate');
            var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
            // When
            home.deleteProduct(product);
            // Then
            expect(productService["delete"]).toHaveBeenCalledWith(app_data_spec_2.fullProduct);
            expect(productService.getProducts).not.toHaveBeenCalled();
            expect(router.navigate).toHaveBeenCalled();
        });
        describe('productClicked', function () {
            it('should redirect to product page', function () {
                // Given
                var product = app_data_spec_2.clone(app_data_spec_2.fullProduct);
                spyOn(router, 'navigate');
                // When
                home.productClicked(product);
                // Then
                expect(router.navigate).toHaveBeenCalledWith(['products', app_data_spec_2.fullProduct.id]);
            });
        });
    });
});
