import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignarPropositoProductosComponent } from './asignar-proposito-productos.component';
import { RoutingAsignarpropositoproductosModule } from './routing.module';



@NgModule({
  declarations: [
    AsignarPropositoProductosComponent
  ],
  imports: [
    CommonModule,
    RoutingAsignarpropositoproductosModule
  ]
})
export class AsignarPropositoProductosModule { }
