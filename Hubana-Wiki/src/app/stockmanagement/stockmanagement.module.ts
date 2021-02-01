import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockmanagementRoutingModule } from './stockmanagement-routing.module';
import { StockinStockoutComponent } from './stockin-stockout/stockin-stockout.component';
import { StockviewComponent } from './stockview/stockview.component';
import { FulfillnodesetupComponent } from './fulfillnodesetup/fulfillnodesetup.component';
import { LocationmasterComponent } from './locationmaster/locationmaster.component';
import { PincodemasterComponent } from './pincodemaster/pincodemaster.component';


@NgModule({
  declarations: [StockinStockoutComponent, StockviewComponent, FulfillnodesetupComponent, LocationmasterComponent, PincodemasterComponent],
  imports: [
    CommonModule,
    StockmanagementRoutingModule
  ]
})
export class StockmanagementModule { }
