import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloquearTarjetaComponent } from './bloquear-tarjeta.component';
import { RoutingBloqueartarjetaModule } from './routing.module';



@NgModule({
  declarations: [
    BloquearTarjetaComponent
  ],
  imports: [
    CommonModule,
    RoutingBloqueartarjetaModule
  ]
})
export class BloquearTarjetaModule { }
