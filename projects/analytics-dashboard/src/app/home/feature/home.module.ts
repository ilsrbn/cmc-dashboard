import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { StatisticsModule } from '../ui/statistics/statistics.module';
import { TableModule } from '../ui/table/table.module';
import { SpacerComponent } from '../../shared/ui/spacer/spacer.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,

    HomeRoutingModule,

    StatisticsModule,
    TableModule,
    SpacerComponent,
  ]
})
export class HomeModule { }
