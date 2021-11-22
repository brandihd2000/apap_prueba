import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasBancosComponent } from './tarjetas-bancos.component';
import { RoutingTarjetasbancosModule } from './routing.module';



@NgModule({
  declarations: [
    TarjetasBancosComponent
  ],
  imports: [
    CommonModule,
    RoutingTarjetasbancosModule
  ]
})
export class TarjetasBancosModule { }
