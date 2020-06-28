import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellAndViewComponent } from './sell-and-view/sell-and-view.component';
import { NewCarInsurComponent } from './new-car-insur/new-car-insur.component';
import { ViewAllPurchasesComponent } from './view-all-purchases/view-all-purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    SellAndViewComponent,
    NewCarInsurComponent,
    ViewAllPurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
