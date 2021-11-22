import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InglesComponent } from './ingles.component';
import { RoutingInglesModule } from './routing.module';



@NgModule({
  declarations: [
    InglesComponent
  ],
  imports: [
    CommonModule,
    RoutingInglesModule
  ]
})
export class InglesModule { }
