import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellAndViewComponent } from './sell-and-view/sell-and-view.component';
import { NewCarInsurComponent } from './sell-and-view/new-car-insur/new-car-insur.component';
import { ViewAllPurchasesComponent } from './sell-and-view/view-all-purchases/view-all-purchases.component';
import { environment } from 'src/environments/environment';
import { InsuranceService } from './../shared/services/insurance.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgModel, FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NewInsuranceComponent } from './sell-and-view/new-insurance/new-insurance.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SellAndViewComponent,
    NewCarInsurComponent,
    ViewAllPurchasesComponent,
    NewInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule ],
  providers: [
      { provide: 'BASE_API_URL', useValue: environment.appUrl },
      InsuranceService,
      HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
