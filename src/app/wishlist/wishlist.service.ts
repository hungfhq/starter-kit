import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/core';
import { WishListComponent } from './wishlist.component';

export class WishList {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: WishListComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: { reuse: false }
    };
  }
}
