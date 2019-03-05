import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { PipeModule } from '../custom-pipe/custom-pipe.module';

@NgModule({
  imports: [CommonModule, TranslateModule, ListRoutingModule, NgbModule, PipeModule],
  declarations: [ListComponent]
})
export class ListModule {}
