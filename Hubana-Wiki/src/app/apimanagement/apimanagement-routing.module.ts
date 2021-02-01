import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APIListComponent } from './apilist/apilist.component';
import { ManageGatewayComponent } from './manage-gateway/manage-gateway.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';


const routes: Routes = [
  {path:'apilist',component:APIListComponent},
  {path:'servicedashboard',component:ServiceDashboardComponent},
  {path:'managegateway',component:ManageGatewayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApimanagementRoutingModule { }
