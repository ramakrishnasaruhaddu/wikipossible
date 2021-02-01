import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { CommonmastersComponent } from './commonmasters/commonmasters.component';
import { TagmastersComponent } from './tagmasters/tagmasters.component';
import { BatchjobschedulerComponent } from './batchjobscheduler/batchjobscheduler.component';
import { EmailserverconfigurationComponent } from './emailserverconfiguration/emailserverconfiguration.component';
import { EmailtemplateconfigurationComponent } from './emailtemplateconfiguration/emailtemplateconfiguration.component';
import { SmsserverconfigurationComponent } from './smsserverconfiguration/smsserverconfiguration.component';
import { SmstemplateconfigurationComponent } from './smstemplateconfiguration/smstemplateconfiguration.component';
import { ServicedashboardComponent } from './servicedashboard/servicedashboard.component';
import { ServicelogComponent } from './servicelog/servicelog.component';
import { ReasonmasterComponent } from './reasonmaster/reasonmaster.component';


@NgModule({
  declarations: [UsermanagementComponent, CompanysetupComponent, CommonmastersComponent, TagmastersComponent, BatchjobschedulerComponent, EmailserverconfigurationComponent, EmailtemplateconfigurationComponent, SmsserverconfigurationComponent, SmstemplateconfigurationComponent, ServicedashboardComponent, ServicelogComponent, ReasonmasterComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
