import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { PipeModule } from '../custom-pipe/custom-pipe.module';

@NgModule({
  imports: [CommonModule, TranslateModule, ContentRoutingModule, NgbModule, PipeModule],
  declarations: [ContentComponent]
})
export class ContentModule {}
