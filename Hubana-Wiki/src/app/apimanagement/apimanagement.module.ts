import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApimanagementRoutingModule } from './apimanagement-routing.module';
import { APIListComponent } from './apilist/apilist.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ManageGatewayComponent } from './manage-gateway/manage-gateway.component';


@NgModule({
  declarations: [APIListComponent, ServiceDashboardComponent, ManageGatewayComponent],
  imports: [
    CommonModule,
    ApimanagementRoutingModule
  ]
})
export class ApimanagementModule { }
