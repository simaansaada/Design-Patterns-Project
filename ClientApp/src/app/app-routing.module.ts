import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellAndViewComponent } from './sell-and-view/sell-and-view.component';
import { NewCarInsurComponent } from './new-car-insur/new-car-insur.component';
import { ViewAllPurchasesComponent } from './view-all-purchases/view-all-purchases.component';


const routes: Routes = [
  {
    path: '',
    component: SellAndViewComponent
  },
  {
    path: 'new-car-insur',
    component: NewCarInsurComponent
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
