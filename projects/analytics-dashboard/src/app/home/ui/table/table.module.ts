import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DirectivesModule } from '../../../shared/directives/directives.module';

import { TableComponent } from './table.component';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,

    DirectivesModule
  ],
  exports: [
    TableComponent,
  ]
})
export class TableModule { }
