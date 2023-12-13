import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseMealPageRoutingModule } from './course-meal-routing.module';

import { CourseMealPage } from './course-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseMealPageRoutingModule
  ],
  declarations: [CourseMealPage]
})
export class CourseMealPageModule {}
