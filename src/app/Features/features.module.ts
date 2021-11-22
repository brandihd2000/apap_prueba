import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioAPAPComponent } from './Page/Transferir/Beneficiario-apap/beneficiario-apap.component';
import { BeneficiarioOtraEntidadComponent } from './Page/Transferir/Beneficiario-otra-entidad/beneficiario-otra-entidad.component';
import { TransferenciasPendientesComponent } from './Page/Transferir/Transferencias-pendientes/transferencias-pendientes.component';
import { TarjetasBancosComponent } from './Page/Pagar/Tarjetas-bancos/tarjetas-bancos.component';
import { PrestamosApapComponent } from './Page/Pagar/Prestamos-apap/prestamos-apap.component';
import { PrestamosOtrosBancoComponent } from './Page/Pagar/Prestamos-otros-banco/prestamos-otros-banco.component';
import { AvancesEfectivotcComponent } from './Page/ServiciosTarjetas/Avances-efectivotc/avances-efectivotc.component';
import { MetasAhorroComponent } from './Page/BienestarFinanciero/Metas-ahorro/metas-ahorro.component';



@NgModule({
  declarations: [
    BeneficiarioAPAPComponent,
    BeneficiarioOtraEntidadComponent,
    TransferenciasPendientesComponent,
    TarjetasBancosComponent,
    PrestamosApapComponent,
    PrestamosOtrosBancoComponent,
    AvancesEfectivotcComponent,
    MetasAhorroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
