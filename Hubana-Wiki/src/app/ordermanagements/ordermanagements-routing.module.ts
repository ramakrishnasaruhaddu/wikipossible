import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { OrderdashboardComponent}  from '../ordermanagements/orderdashboard/orderdashboard.component';
import { OrdermanagementComponent }  from '../ordermanagements/ordermanagement/ordermanagement.component';
import {  ManifestComponent }  from '../ordermanagements/manifest/manifest.component';

import { OrdercancellationComponent }  from '../ordermanagements/ordercancellation/ordercancellation.component';

import {  SalesreturnComponent}  from '../ordermanagements/salesreturn/salesreturn.component';

import { OrderreceivingruleComponent }  from '../ordermanagements/orderreceivingrule/orderreceivingrule.component';

import { OrderallocaationruleComponent}  from '../ordermanagements/orderallocaationrule/orderallocaationrule.component';

import { ReturnrequestruleComponent}  from '../ordermanagements/returnrequestrule/returnrequestrule.component';

import { PaymentrecostatementofaccountComponent }  from '../ordermanagements/paymentrecostatementofaccount/paymentrecostatementofaccount.component';


const routes: Routes = [
  {path:'orderdashboard',component:OrderdashboardComponent},
  {path:'ordermanagement',component:OrdermanagementComponent},
  {path:'manifest',component:ManifestComponent},
  {path:'ordercancellation',component:OrdercancellationComponent},
  {path:'salesreturn',component:SalesreturnComponent},
  {path:'orderreceivingrule',component:OrderreceivingruleComponent},
  {path:'orderallocationrule',component:OrderallocaationruleComponent},
  {path:'returnrequestrule',component:ReturnrequestruleComponent},
  {path:'payment-reco-statementofaccount',component:PaymentrecostatementofaccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdermanagementsRoutingModule { }
