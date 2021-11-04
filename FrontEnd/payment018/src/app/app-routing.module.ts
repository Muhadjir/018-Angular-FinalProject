import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: PaymentDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NoPageFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
