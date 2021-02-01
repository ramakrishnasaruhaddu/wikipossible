import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"conn",pathMatch:'full'},


   {path:'user',loadChildren:()=>import(`./dashboard/dashboard.module`).then(m=>m.DashboardModule)},
   {path:'connection',loadChildren:()=> import(`./conne/conne.module`).then(m=>m.ConneModule)},
   {path:'ordermanagements',loadChildren:()=>import(`./ordermanagements/ordermanagements.module`).then(m=>m.OrdermanagementsModule)},
   {path:"products",loadChildren:()=>import(`./products/products.module`).then(m=>m.ProductsModule)},
   {path:'promotion',loadChildren:()=>import(`./promotion/promotion.module`).then(m=>m.PromotionModule)},
   {path:'stockmanagement',loadChildren:()=>import(`./stockmanagement/stockmanagement.module`).then(m=>m.StockmanagementModule)},
   {path:'administration',loadChildren:()=>import(`./administration/administration.module`).then(m=>m.AdministrationModule)},
   {path:'reports',loadChildren:()=>import(`./reports/reports.module`).then(m=>m.ReportsModule)},
   {path:'apimanagement',loadChildren:()=>import(`./apimanagement/apimanagement.module`).then(m=>m.ApimanagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
