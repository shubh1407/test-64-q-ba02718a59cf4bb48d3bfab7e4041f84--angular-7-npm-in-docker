import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';

const routes: Routes = [
  { path: '', component: LeadDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
