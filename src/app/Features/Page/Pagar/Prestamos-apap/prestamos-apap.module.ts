import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosApapComponent } from './prestamos-apap.component';
import { RoutingPrestamosapapModule } from './routing.module';



@NgModule({
  declarations: [
    PrestamosApapComponent
  ],
  imports: [
    CommonModule,
    RoutingPrestamosapapModule
  ]
})
export class PrestamosApapModule { }
