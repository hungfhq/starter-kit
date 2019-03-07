import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { WishListModule } from './wishlist/wishlist.module';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, WishListModule, UserDashboardRoutingModule],
  declarations: [UserDashboardComponent]
})
export class UserDashboardModule {}
