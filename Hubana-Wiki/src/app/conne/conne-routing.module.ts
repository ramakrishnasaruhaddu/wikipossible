import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrierintegrationComponent}  from './carrierintegration/carrierintegration.component';
import { ChannelintegrationComponent}  from './channelintegration/channelintegration.component';
import { ECommerceintegrationComponent }  from './e-commerceintegration/e-commerceintegration.component'
import { DatasyncseheduleComponent }  from './datasyncsehedule/datasyncsehedule.component'

const routes: Routes = [
  {path:'',redirectTo:'carrierintegration',pathMatch:'full'},
  {path:'carrierintegration',component:CarrierintegrationComponent},
  {path:'channelintegration',component:ChannelintegrationComponent},
  {path:'e-commerceintegration',component:ECommerceintegrationComponent},
  {path:'datasyncsehedule',component:DatasyncseheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConneRoutingModule { }
