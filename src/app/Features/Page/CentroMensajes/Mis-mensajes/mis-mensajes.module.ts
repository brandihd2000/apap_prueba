import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisMensajesComponent } from './mis-mensajes.component';
import { RoutingMismensajesModule } from './routing.module';



@NgModule({
  declarations: [
    MisMensajesComponent
  ],
  imports: [
    CommonModule,
    RoutingMismensajesModule
  ]
})
export class MisMensajesModule { }
