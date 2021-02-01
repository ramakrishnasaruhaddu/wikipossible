import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchjobschedulerComponent } from './batchjobscheduler/batchjobscheduler.component';
import { CommonmastersComponent } from './commonmasters/commonmasters.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { EmailserverconfigurationComponent } from './emailserverconfiguration/emailserverconfiguration.component';
import { EmailtemplateconfigurationComponent } from './emailtemplateconfiguration/emailtemplateconfiguration.component';
import { ReasonmasterComponent } from './reasonmaster/reasonmaster.component';
import { ServicedashboardComponent } from './servicedashboard/servicedashboard.component';
import { ServicelogComponent } from './servicelog/servicelog.component';
import { SmsserverconfigurationComponent } from './smsserverconfiguration/smsserverconfiguration.component';
import { SmstemplateconfigurationComponent } from './smstemplateconfiguration/smstemplateconfiguration.component';
import { TagmastersComponent } from './tagmasters/tagmasters.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';


const routes: Routes = [
  {path:'usermanagement',component:UsermanagementComponent},
  {path:'companysetup',component:CompanysetupComponent},
  {path:'commonmasters',component:CommonmastersComponent},
  {path:'tagmaster',component:TagmastersComponent},
  {path:'batchjobscheduler',component:BatchjobschedulerComponent},
  {path:'emailserverconfiguration',component:EmailserverconfigurationComponent},
  {path:'emailtemplateconfiguration',component:EmailtemplateconfigurationComponent},
  {path:'smsserverconfiguration',component:SmsserverconfigurationComponent},
  {path:'smstemplateconfiguration',component:SmstemplateconfigurationComponent},
  {path:'servicedashboard',component:ServicedashboardComponent},
  {path:'servicelog',component:ServicelogComponent},
  {path:'reasonmaster',component:ReasonmasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
