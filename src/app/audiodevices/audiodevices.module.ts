import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AudiodevicesRoutingModule } from './audiodevices-routing.module';
import { AudiodevicesComponent } from './audiodevices.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AudiodevicesRoutingModule],
  declarations: [AudiodevicesComponent]
})
export class AudiodevicesModule {}
