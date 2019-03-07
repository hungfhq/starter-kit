import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdLoginModal } from './login-modal/login-modal';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ContentModule } from '@app/content/content.module';
import { ListModule } from '@app/list/list.module';
import { DetailModule } from '@app/detail/detail.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    TranslateModule,
    ContentModule,
    ListModule,
    DetailModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, NgbdLoginModal]
})
export class ShopModule {}
