import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgregarBeneficiarioComponent } from './agregar-beneficiario.component';

const routes: Routes = [
    {path: '', component: AgregarBeneficiarioComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingAgregarbeneficiarioModule {}