import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarNCFComponent } from './consultar-ncf.component';
import { RoutingConsultarNCFModule } from './routing.module';



@NgModule({
  declarations: [
    ConsultarNCFComponent
  ],
  imports: [
    CommonModule,
    RoutingConsultarNCFModule
  ]
})
export class ConsultarNCFModule { }
