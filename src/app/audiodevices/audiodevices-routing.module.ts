import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AudiodevicesComponent } from './audiodevices.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'index/audiodevices', component: AudiodevicesComponent, data: { title: extract('Audio Devices') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AudiodevicesRoutingModule {}
