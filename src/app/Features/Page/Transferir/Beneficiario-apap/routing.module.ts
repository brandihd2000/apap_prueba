import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BeneficiarioAPAPComponent } from './beneficiario-apap.component';

const routes: Routes = [
    {path:  '', component: BeneficiarioAPAPComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingBeneficiarioAPAPModule {}