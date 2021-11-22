import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumoInteligenteComponent } from './consumo-inteligente.component';
import { RoutingConsumointeligenteModule } from './routing.module';



@NgModule({
  declarations: [
    ConsumoInteligenteComponent
  ],
  imports: [
    CommonModule,
    RoutingConsumointeligenteModule
  ]
})
export class ConsumoInteligenteModule { }
