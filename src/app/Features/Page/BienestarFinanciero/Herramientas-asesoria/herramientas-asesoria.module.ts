import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerramientasAsesoriaComponent } from './herramientas-asesoria.component';
import { RoutingHerramientasasesoriaModule } from './routing.module';



@NgModule({
  declarations: [
    HerramientasAsesoriaComponent
  ],
  imports: [
    CommonModule,
    RoutingHerramientasasesoriaModule
  ]
})
export class HerramientasAsesoriaModule { }
