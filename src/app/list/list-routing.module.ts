import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: 'shop/:category',
    component: ListComponent,
    data: { title: extract('List...') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListRoutingModule {}
