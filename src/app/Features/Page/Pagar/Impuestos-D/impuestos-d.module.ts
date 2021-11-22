import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpuestosDComponent } from './impuestos-d.component';
import { RoutingImpuestosDModule } from './routing.module';



@NgModule({
  declarations: [
    ImpuestosDComponent
  ],
  imports: [
    CommonModule,
    RoutingImpuestosDModule
  ]
})
export class ImpuestosDModule { }
