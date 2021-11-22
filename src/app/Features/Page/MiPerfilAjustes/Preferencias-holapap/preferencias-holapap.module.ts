import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenciasHolapapComponent } from './preferencias-holapap.component';
import { RoutingPreferenciasholapapModule } from './routing.module';



@NgModule({
  declarations: [
    PreferenciasHolapapComponent
  ],
  imports: [
    CommonModule,
    RoutingPreferenciasholapapModule
  ]
})
export class PreferenciasHOLAPAPModule { }
