import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from "@angular/material/grid-list"
import { StatisticsCardModule } from '../../../shared/ui/statistics-card/statistics-card.module';

import { StatisticsComponent } from './statistics.component';

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,

    MatGridListModule,

    StatisticsCardModule,
  ],
  exports: [
    StatisticsComponent,
  ]
})
export class StatisticsModule { }
