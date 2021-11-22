import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresFinancierosComponent } from './indicadores-financieros.component';
import { RoutingIndicadoresfinancierosModule } from './routing.module';



@NgModule({
  declarations: [
    IndicadoresFinancierosComponent
  ],
  imports: [
    CommonModule,
    RoutingIndicadoresfinancierosModule
  ]
})
export class IndicadoresFinancierosModule { }
