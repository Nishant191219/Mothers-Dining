import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseMealPage } from './course-meal.page';

const routes: Routes = [
  {
    path: '',
    component: CourseMealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseMealPageRoutingModule {}
