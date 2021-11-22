import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarMensajeComponent } from './enviar-mensaje.component';
import { RoutingEnviarmensajeModule } from './routing.module';



@NgModule({
  declarations: [
    EnviarMensajeComponent
  ],
  imports: [
    CommonModule,
    RoutingEnviarmensajeModule
  ]
})
export class EnviarMensajeModule { }
