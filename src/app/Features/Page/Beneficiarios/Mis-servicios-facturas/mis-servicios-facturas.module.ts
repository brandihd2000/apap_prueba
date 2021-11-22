import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisServiciosFacturasComponent } from './mis-servicios-facturas.component';
import { RoutingMisserviciosfacturasModule } from './routing.module';



@NgModule({
  declarations: [
    MisServiciosFacturasComponent
  ],
  imports: [
    CommonModule,
    RoutingMisserviciosfacturasModule
  ]
})
export class MisServiciosFacturasModule { }
