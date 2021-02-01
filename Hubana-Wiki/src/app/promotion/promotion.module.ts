import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionreservationComponent } from './promotionreservation/promotionreservation.component';


@NgModule({
  declarations: [PromotionreservationComponent],
  imports: [
    CommonModule,
    PromotionRoutingModule
  ]
})
export class PromotionModule { }
