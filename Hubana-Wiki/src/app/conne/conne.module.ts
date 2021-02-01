import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConneRoutingModule } from './conne-routing.module';
import { ChannelintegrationComponent } from './channelintegration/channelintegration.component';
import { CarrierintegrationComponent } from './carrierintegration/carrierintegration.component';
import { ECommerceintegrationComponent } from './e-commerceintegration/e-commerceintegration.component';
import { DatasyncseheduleComponent } from './datasyncsehedule/datasyncsehedule.component';


@NgModule({
  declarations: [ChannelintegrationComponent, CarrierintegrationComponent, ECommerceintegrationComponent, DatasyncseheduleComponent],
  imports: [
    CommonModule,
    ConneRoutingModule
  ]
})
export class ConneModule { }
