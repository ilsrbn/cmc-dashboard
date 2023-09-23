import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlinedDirective } from './outlined.directive';



@NgModule({
  declarations: [
    OutlinedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OutlinedDirective
  ]
})
export class DirectivesModule { }
