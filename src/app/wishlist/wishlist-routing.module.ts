import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { WishListComponent } from './wishlist.component';

const routes: Routes = [
  {
    path: 'wishlist',
    component: WishListComponent,
    data: { title: extract('Wishlist') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WishListRoutingModule {}
