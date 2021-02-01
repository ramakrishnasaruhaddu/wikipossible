import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionreservationComponent } from './promotionreservation/promotionreservation.component';


const routes: Routes = [
  {path:'promotionreservaation',component:PromotionreservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
