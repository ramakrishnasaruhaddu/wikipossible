import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideaccordionComponent } from './sideaccordion/sideaccordion.component';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ProductsComponent } from './products/products.component';

import { StockmanagementComponent } from './stockmanagement/stockmanagement.component';
import { ReportsComponent } from './reports/reports.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './login/login.component';
import { ConneModule}  from './conne/conne.module';
import { OrdermanagementsModule}   from './ordermanagements/ordermanagements.module'
import { ProductsModule }  from './products/products.module';
import { PromotionModule}  from './promotion/promotion.module';
import { StockmanagementModule}  from './stockmanagement/stockmanagement.module';
import { AdministrationModule }   from './administration/administration.module';
import { ReportsModule}  from './reports/reports.module';
import {DashboardModule }  from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApimanagementModule }  from './apimanagement/apimanagement.module';

 
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideaccordionComponent,
    
    
    ProductsComponent,
    
    StockmanagementComponent,
    ReportsComponent,
    AdministrationComponent,
    LoginComponent,
  DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ConneModule,
    OrdermanagementsModule,
    ProductsModule,
    PromotionModule,
    StockmanagementModule,
    AdministrationModule,
    ReportsModule,
    DashboardModule,
    ApimanagementModule
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
