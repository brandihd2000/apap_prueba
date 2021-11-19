import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioAPAPComponent } from './beneficiario-apap.component';
import { RoutingBeneficiarioAPAPModule } from './routing.module';



@NgModule({
  declarations: [
  BeneficiarioAPAPComponent
  ],
  imports: [
    CommonModule,
    RoutingBeneficiarioAPAPModule
  ]
})
export class BeneficiarioAPAPModule { }
