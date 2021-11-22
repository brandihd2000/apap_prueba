import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingMetasahorroModule } from './routing.module';
import { MetasAhorroComponent } from './metas-ahorro.component';



@NgModule({
  declarations: [
    MetasAhorroComponent
  ],
  imports: [
    CommonModule,
    RoutingMetasahorroModule
  ]
})
export class MetasAhorroModule { }
