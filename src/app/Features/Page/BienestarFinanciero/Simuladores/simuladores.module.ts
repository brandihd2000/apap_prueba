import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimuladoresComponent } from './simuladores.component';
import { RoutingSimuladoresModule } from './routing.module';



@NgModule({
  declarations: [
    SimuladoresComponent
  ],
  imports: [
    CommonModule,
    RoutingSimuladoresModule
  ]
})
export class SimuladoresModule { }
