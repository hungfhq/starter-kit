import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: 'shop/:category/:brand/:link',
    component: DetailComponent,
    data: { title: extract('Detail...') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DetailRoutingModule {}
