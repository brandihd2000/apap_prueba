import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoyDigitalComponent } from './soy-digital.component';
import { RoutingSoydigitalModule } from './routing.module';



@NgModule({
  declarations: [
    SoyDigitalComponent
  ],
  imports: [
    CommonModule,
    RoutingSoydigitalModule
  ]
})
export class SoyDigitalModule { }
