import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BeneficiarioOtraEntidadComponent } from './beneficiario-otra-entidad.component';

const routes: Routes = [
    {path: '', component: BeneficiarioOtraEntidadComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingBeneficiariootraentidadModule {}