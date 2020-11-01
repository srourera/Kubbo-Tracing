"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var icon_1 = require("@angular/material/icon");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var snack_bar_1 = require("@angular/material/snack-bar");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_route_1 = require("./routes/home/home.route");
var header_component_1 = require("./components/header/header.component");
var products_table_component_1 = require("./components/products-table/products-table.component");
var price_pipe_1 = require("./pipes/price.pipe");
var product_details_component_1 = require("./components/product-details/product-details.component");
var stocks_table_component_1 = require("./components/stocks-table/stocks-table.component");
var product_dialog_1 = require("./components/product-dialog/product-dialog");
var stock_dialog_1 = require("./components/stock-dialog/stock-dialog");
var image_pipe_1 = require("./pipes/image.pipe");
var loading_component_1 = require("./components/loading/loading.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_route_1.HomeRoute,
                header_component_1.HeaderComponent,
                products_table_component_1.ProductsTableComponent,
                price_pipe_1.PricePipe,
                product_details_component_1.ProductDetailsComponent,
                stocks_table_component_1.StocksTableComponent,
                product_dialog_1.ProductDialog,
                stock_dialog_1.StockDialog,
                image_pipe_1.ImagePipe,
                loading_component_1.LoadingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                table_1.MatTableModule,
                sort_1.MatSortModule,
                icon_1.MatIconModule,
                slide_toggle_1.MatSlideToggleModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                progress_spinner_1.MatProgressSpinnerModule,
                snack_bar_1.MatSnackBarModule,
                forms_1.FormsModule
            ],
            providers: [image_pipe_1.ImagePipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
