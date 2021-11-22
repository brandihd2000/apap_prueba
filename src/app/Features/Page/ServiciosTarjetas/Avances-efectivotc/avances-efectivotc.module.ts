import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvancesEfectivotcComponent } from './avances-efectivotc.component';
import { RoutingAvancesefectivotcModule } from './routing.module';



@NgModule({
  declarations: [
    AvancesEfectivotcComponent
  ],
  imports: [
    CommonModule,
    RoutingAvancesefectivotcModule
  ]
})
export class AvancesEfectivotcModule { }
