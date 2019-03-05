import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PipeModule } from '../custom-pipe/custom-pipe.module';

@NgModule({
  imports: [CommonModule, TranslateModule, DetailRoutingModule, NgbModule, PipeModule],
  declarations: [DetailComponent]
})
export class DetailModule {}
