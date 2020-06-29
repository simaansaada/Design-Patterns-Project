import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellAndViewComponent } from './sell-and-view/sell-and-view.component';
import { NewCarInsurComponent } from './sell-and-view/new-car-insur/new-car-insur.component';
import { ViewAllPurchasesComponent } from './sell-and-view/view-all-purchases/view-all-purchases.component';
import { NewInsuranceComponent } from './sell-and-view/new-insurance/new-insurance.component';


const routes: Routes = [
  {
    path: '',
    component: SellAndViewComponent
  },
  {
    path: 'new-insur/:type',
    component: NewInsuranceComponent
  },
  {
    path: 'view-all-purchases',
    component: ViewAllPurchasesComponent
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
