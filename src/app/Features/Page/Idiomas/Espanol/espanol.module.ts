import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspanolComponent } from './espanol.component';
import { RoutingEspanolModule } from './routing.module';



@NgModule({
  declarations: [
    EspanolComponent
  ],
  imports: [
    CommonModule,
    RoutingEspanolModule
  ]
})
export class EspanolModule { }
