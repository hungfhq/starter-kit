import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

import { PipeModule } from '../custom-pipe/custom-pipe.module';

@NgModule({
  imports: [CommonModule, TranslateModule, ShopRoutingModule, NgbModule, PipeModule],
  declarations: [ShopComponent]
})
export class ShopModule {}
