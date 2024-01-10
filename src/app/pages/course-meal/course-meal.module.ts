import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  declarations: [CourseMealPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseMealPageModule {}
