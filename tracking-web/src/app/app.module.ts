import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoute } from './routes/home/home.route';
import { HeaderComponent } from './components/header/header.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { PricePipe } from './pipes/price.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';
import { ProductDialog } from './components/product-dialog/product-dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeRoute,
    HeaderComponent,
    ProductsTableComponent,
    PricePipe,
    ProductDetailsComponent,
    StocksTableComponent,
    ProductDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
