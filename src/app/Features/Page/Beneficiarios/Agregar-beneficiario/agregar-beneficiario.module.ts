import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarBeneficiarioComponent } from './agregar-beneficiario.component';
import { RoutingAgregarbeneficiarioModule } from './routing.module';



@NgModule({
  declarations: [
    AgregarBeneficiarioComponent
  ],
  imports: [
    CommonModule,
    RoutingAgregarbeneficiarioModule
  ]
})
export class AgregarBeneficiarioModule { }
