import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FulfillnodesetupComponent } from './fulfillnodesetup/fulfillnodesetup.component';
import { LocationmasterComponent } from './locationmaster/locationmaster.component';
import { PincodemasterComponent } from './pincodemaster/pincodemaster.component';
import { StockinStockoutComponent } from './stockin-stockout/stockin-stockout.component';
import { StockviewComponent } from './stockview/stockview.component';


const routes: Routes = [

  {path:'stockin-stockout',component:StockinStockoutComponent},
  {path:'stockview',component:StockviewComponent},
  {path:'fulfillnodesetup',component:FulfillnodesetupComponent},
  {path:'locationmaster',component:LocationmasterComponent},
  {path:'pincodemaster',component:PincodemasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockmanagementRoutingModule { }
