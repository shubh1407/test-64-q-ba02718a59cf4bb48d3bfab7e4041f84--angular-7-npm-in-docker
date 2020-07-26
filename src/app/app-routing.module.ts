import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';

const routes: Routes = [
  { path: '', component: LeadDashboardComponent },
];
=======

const routes: Routes = [];
>>>>>>> 0dddc4696c126d0c783db26cecf820950434b31e

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
