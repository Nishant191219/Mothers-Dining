import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThaliPageRoutingModule } from './thali-routing.module';

import { ThaliPage } from './thali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThaliPageRoutingModule
  ],
  declarations: [ThaliPage]
})
export class ThaliPageModule {}
