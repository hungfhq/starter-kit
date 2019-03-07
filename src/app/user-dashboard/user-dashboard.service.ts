import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/core';
import { UserDashboardComponent } from './user-dashboard.component';

export class UserDashboard {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: UserDashboardComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse UserDashboardComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
