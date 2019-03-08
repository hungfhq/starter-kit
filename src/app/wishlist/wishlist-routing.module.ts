import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { WishListComponent } from './wishlist.component';
import { WishList } from './wishlist.service';

const routes: Routes = [
  WishList.childRoutes([
    {
      path: 'wishlist',
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
