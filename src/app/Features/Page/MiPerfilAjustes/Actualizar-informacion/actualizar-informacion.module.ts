import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarInformacionComponent } from './actualizar-informacion.component';
import { RoutingActualizarinformacionModule } from './routing.module';



@NgModule({
  declarations: [
    ActualizarInformacionComponent
  ],
  imports: [
    CommonModule,
    RoutingActualizarinformacionModule
  ]
})
export class ActualizarInformacionModule { }
