import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportarViajeComponent } from './reportar-viaje.component';
import { RoutingReportarviajeModule } from './routing.module';



@NgModule({
  declarations: [
    ReportarViajeComponent,
  ],
  imports: [
    CommonModule,
    RoutingReportarviajeModule
  ]
})
export class ReportarViajeModule { }
