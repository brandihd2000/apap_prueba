import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciasPendientesComponent } from './transferencias-pendientes.component';
import { RoutingTransferenciasPendientesModule } from './routing.module';



@NgModule({
  declarations: [
  TransferenciasPendientesComponent,
  ],
  imports: [
    CommonModule,
    RoutingTransferenciasPendientesModule
  ]
})
export class TransferenciasPendientesModule { }
