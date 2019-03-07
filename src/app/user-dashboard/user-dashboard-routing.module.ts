import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  { path: 'user-dashboard', component: UserDashboardComponent, data: { title: extract('User Dashboard') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserDashboardRoutingModule {}
