import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsCardComponent } from './statistics-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    StatisticsCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    StatisticsCardComponent
  ]
})
export class StatisticsCardModule { }
