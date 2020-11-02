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
var product_details_component_1 = require("./product-details.component");
var app_data_spec_1 = require("../../app.data.spec");
var stocks_service_1 = require("src/app/services/stocks.service");
var snack_bar_1 = require("@angular/material/snack-bar");
var dialog_1 = require("@angular/material/dialog");
var fake_stock_service_spec_1 = require("../../services/fake-stock.service.spec");
var price_pipe_1 = require("../../pipes/price.pipe");
var animations_1 = require("@angular/platform-browser/animations");
describe('ProductDetailsComponent', function () {
    var productDetails;
    var stockService;
    var fixture;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [product_details_component_1.ProductDetailsComponent, price_pipe_1.PricePipe],
                        imports: [dialog_1.MatDialogModule, snack_bar_1.MatSnackBarModule, animations_1.BrowserAnimationsModule],
                        providers: [
                            price_pipe_1.PricePipe,
                            { provide: stocks_service_1.StocksService, useClass: fake_stock_service_spec_1.FakeStockService },
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
        fixture = testing_1.TestBed.createComponent(product_details_component_1.ProductDetailsComponent);
        stockService = testing_1.TestBed.get(stocks_service_1.StocksService);
        productDetails = fixture.componentInstance;
        productDetails.product = app_data_spec_1.clone(app_data_spec_1.emptyProduct);
        productDetails.stocks = app_data_spec_1.emptyStockList;
        fixture.detectChanges();
    });
    it('should be created', function () {
        // Given
        // Then
        expect(productDetails).toBeTruthy();
    });
    describe('ngOnChanges', function () {
        it('should load stock if product is valid', function () {
            // Given
            productDetails.product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            spyOn(stockService, 'getStockByProductId').and.callThrough();
            // When
            productDetails.ngOnChanges();
            // Then
            expect(stockService.getStockByProductId).toHaveBeenCalledWith(app_data_spec_1.fullProduct.id);
        });
        it('should not load any stock if product is not valid', function () {
            // Given
            productDetails.product = null;
            spyOn(stockService, 'getStockByProductId').and.callThrough();
            // When
            productDetails.ngOnChanges();
            // Then
            expect(stockService.getStockByProductId).not.toHaveBeenCalled();
        });
    });
    describe('editProduct', function () {
        it('should emit edit event', function () {
            // Given     
            var product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            spyOn(productDetails.edit, 'emit');
            // When
            productDetails.editProduct(product);
            // Then
            expect(productDetails.edit.emit).toHaveBeenCalledWith(app_data_spec_1.fullProduct);
        });
    });
    describe('enableProduct', function () {
        it('should emit enable event after change enabled to true', function () {
            // Given     
            var product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            product.enabled = false;
            var productExpected = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            productExpected.enabled = true;
            var event = app_data_spec_1.sliderToggleEventTrue;
            spyOn(productDetails.enable, 'emit');
            // When
            productDetails.enableProduct(event, product);
            // Then
            expect(productDetails.enable.emit).toHaveBeenCalledWith(productExpected);
        });
        it('should emit enable event after change enabled to false', function () {
            // Given     
            var product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            product.enabled = true;
            var productExpected = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            productExpected.enabled = false;
            var event = app_data_spec_1.sliderToggleEventFalse;
            spyOn(productDetails.enable, 'emit');
            // When
            productDetails.enableProduct(event, product);
            // Then
            expect(productDetails.enable.emit).toHaveBeenCalledWith(productExpected);
        });
    });
    describe('deleteProduct', function () {
        it('should emit delete event', function () {
            // Given     
            var product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            spyOn(productDetails["delete"], 'emit');
            // When
            productDetails.deleteProduct(product);
            // Then
            expect(productDetails["delete"].emit).toHaveBeenCalledWith(app_data_spec_1.fullProduct);
        });
    });
    describe('addStock', function () {
        it('should not open dialog if product is invalid', function () {
            // Given     
            productDetails.product = null;
            spyOn(productDetails.dialog, 'open');
            // When
            productDetails.addStock();
            // Then
            expect(productDetails.dialog.open).not.toHaveBeenCalled();
        });
        it('should open dialog if product is valid', function () {
            // Given     
            productDetails.product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            spyOn(productDetails.dialog, 'open').and.returnValue(app_data_spec_1.clone(app_data_spec_1.fakeStockDialog));
            spyOn(stockService, 'create').and.callThrough();
            spyOn(stockService, 'getStockByProductId').and.callThrough();
            // When
            productDetails.addStock();
            // Then
            expect(productDetails.dialog.open).toHaveBeenCalled();
            expect(stockService.create).toHaveBeenCalled();
            expect(stockService.getStockByProductId).toHaveBeenCalled();
        });
    });
    describe('editStock', function () {
        it('should open dialog if product is valid', function () {
            // Given     
            productDetails.product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            var stock = app_data_spec_1.clone(app_data_spec_1.fullStock);
            spyOn(productDetails.dialog, 'open').and.returnValue(app_data_spec_1.clone(app_data_spec_1.fakeStockDialog));
            spyOn(stockService, 'edit').and.callThrough();
            spyOn(stockService, 'getStockByProductId').and.callThrough();
            // When
            productDetails.editStock(stock);
            // Then
            expect(productDetails.dialog.open).toHaveBeenCalled();
            expect(stockService.edit).toHaveBeenCalled();
            expect(stockService.getStockByProductId).toHaveBeenCalled();
        });
    });
    describe('deleteStock', function () {
        it('should ask confirmation', function () {
            // Given     
            spyOn(window, 'confirm').and.returnValue(false);
            spyOn(stockService, 'delete');
            var stock = app_data_spec_1.clone(app_data_spec_1.fullStock);
            // When
            productDetails.deleteStock(stock);
            // Then
            expect(stockService["delete"]).not.toHaveBeenCalled();
        });
        it('should delete if user confirms', function () {
            // Given     
            productDetails.product = app_data_spec_1.clone(app_data_spec_1.fullProduct);
            spyOn(window, 'confirm').and.returnValue(true);
            spyOn(stockService, 'delete').and.callThrough();
            spyOn(stockService, 'getStockByProductId').and.callThrough();
            var stock = app_data_spec_1.clone(app_data_spec_1.fullStock);
            // When
            productDetails.deleteStock(stock);
            // Then
            expect(stockService["delete"]).toHaveBeenCalledWith(app_data_spec_1.fullStock);
            expect(stockService.getStockByProductId).toHaveBeenCalled();
        });
    });
});
