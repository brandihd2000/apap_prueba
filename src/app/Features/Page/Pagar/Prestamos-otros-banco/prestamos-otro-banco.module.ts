import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosOtrosBancoComponent } from './prestamos-otros-banco.component';
import { RoutingPrestamosotrobancoModule } from './routing.module';



@NgModule({
  declarations: [
    PrestamosOtrosBancoComponent
  ],
  imports: [
    CommonModule,
    RoutingPrestamosotrobancoModule
  ]
})
export class PrestamosOtroBancoModule { }
