import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarProveedorComponent } from './agregar-proveedor.component';
import { RoutingAgregarproveedorModule } from './routing.module';



@NgModule({
  declarations: [
    AgregarProveedorComponent
  ],
  imports: [
    CommonModule,
    RoutingAgregarproveedorModule
  ]
})
export class AgregarProveedorModule { }
