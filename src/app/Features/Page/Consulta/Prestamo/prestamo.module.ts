import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingPrestamoModule } from './routing.module';
import { PrestamoComponent } from './prestamo.component';

@NgModule({
  declarations: [
    PrestamoComponent
  ],
  imports: [
    CommonModule,
    RoutingPrestamoModule
  ]
})
export class PrestamoModule { }
