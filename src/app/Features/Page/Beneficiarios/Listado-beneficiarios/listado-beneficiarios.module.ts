import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoBeneficiariosComponent } from './listado-beneficiarios.component';
import { RoutingListadobeneficiariosModule } from './routing.module';



@NgModule({
  declarations: [
    ListadoBeneficiariosComponent
  ],
  imports: [
    CommonModule,
    RoutingListadobeneficiariosModule
  ]
})
export class ListadoBeneficiariosModule { }
