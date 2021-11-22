import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambiarClaveComponent } from './cambiar-clave.component';
import { RoutingCambiarclaveModule } from './routing.module';



@NgModule({
  declarations: [
    CambiarClaveComponent
  ],
  imports: [
    CommonModule,
    RoutingCambiarclaveModule
  ]
})
export class CambiarClaveModule { }
