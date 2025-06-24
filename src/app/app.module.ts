import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { ProductsComponent } from './component/products/products.component';
import { UsersComponent } from './component/users/users.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UpgradeModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
