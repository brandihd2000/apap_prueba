import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTarjetasModule } from './routing.module';
import { TarjetasComponent } from './tarjetas.component';



@NgModule({
  declarations: [
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    RoutingTarjetasModule
    ]
})
export class TarjetasModule { }
