import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

import { ReplaceStringPipe } from '../replace-string.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule, ShopRoutingModule, NgbModule],
  declarations: [ShopComponent, ReplaceStringPipe]
})
export class ShopModule {}
