import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivarTarjetaComponent } from './activar-tarjeta.component';
import { RoutingActivartarjetaModule } from './routing.module';



@NgModule({
  declarations: [
    ActivarTarjetaComponent
  ],
  imports: [
    CommonModule,
    RoutingActivartarjetaModule
    
  ]
})
export class ActivarTarjetaModule { }
