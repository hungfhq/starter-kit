import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { WishListComponent } from './wishlist.component';
import { UserDashboard } from '../user-dashboard.service';

const routes: Routes = [
  UserDashboard.childRoutes([
    {
      path: 'user-dashboard',
      component: WishListComponent,
      data: { title: extract('Wishlist') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WishListRoutingModule {}
