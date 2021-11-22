import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioOtraEntidadComponent } from './beneficiario-otra-entidad.component';
import { RoutingBeneficiariootraentidadModule } from './routing.module';



@NgModule({
  declarations: [
    BeneficiarioOtraEntidadComponent,
  ],
  imports: [
    CommonModule,
    RoutingBeneficiariootraentidadModule
  ]
})
export class BeneficiarioOtraEntidadModule { }
