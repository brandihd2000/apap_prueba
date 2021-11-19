import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscuentasComponent } from './miscuentas.component';
import { RoutingMiscuentasModule } from './routing.module';


@NgModule({
  declarations: [
    MiscuentasComponent,
  ],
  imports: [
    CommonModule,
    RoutingMiscuentasModule

  ]
})
export class MiscuentasModule { }
