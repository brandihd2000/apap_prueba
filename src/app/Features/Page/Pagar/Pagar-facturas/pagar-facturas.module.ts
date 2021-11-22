import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagarFacturasComponent } from './pagar-facturas.component';
import { RoutingPagarfacturasModule } from './routing.module';



@NgModule({
  declarations: [
    PagarFacturasComponent
  ],
  imports: [
    CommonModule,
    RoutingPagarfacturasModule
  ]
})
export class PagarFacturasModule { }
