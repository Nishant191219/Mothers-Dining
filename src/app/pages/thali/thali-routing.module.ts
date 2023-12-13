import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThaliPage } from './thali.page';

const routes: Routes = [
  {
    path: '',
    component: ThaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThaliPageRoutingModule {}
