import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdermanagementsRoutingModule } from './ordermanagements-routing.module';
import { OrderdashboardComponent } from './orderdashboard/orderdashboard.component';
import { OrdermanagementComponent } from './ordermanagement/ordermanagement.component';
import { ManifestComponent } from './manifest/manifest.component';
import { OrdercancellationComponent } from './ordercancellation/ordercancellation.component';
import { SalesreturnComponent } from './salesreturn/salesreturn.component';
import { OrderreceivingruleComponent } from './orderreceivingrule/orderreceivingrule.component';
import { OrderallocaationruleComponent } from './orderallocaationrule/orderallocaationrule.component';
import { ReturnrequestruleComponent } from './returnrequestrule/returnrequestrule.component';
import { PaymentrecostatementofaccountComponent } from './paymentrecostatementofaccount/paymentrecostatementofaccount.component';


@NgModule({
  declarations: [OrderdashboardComponent, OrdermanagementComponent, ManifestComponent, OrdercancellationComponent, SalesreturnComponent, OrderreceivingruleComponent, OrderallocaationruleComponent, ReturnrequestruleComponent, PaymentrecostatementofaccountComponent],
  imports: [
    CommonModule,
    OrdermanagementsRoutingModule
  ]
})
export class OrdermanagementsModule { }
