import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingCuentaModule } from './routing.module';
import { CuentaComponent } from './cuenta.component';



@NgModule({
  declarations: [
    CuentaComponent
  ],
  imports: [
    CommonModule,
    RoutingCuentaModule
  ]
})
export class CuentaModule { }
