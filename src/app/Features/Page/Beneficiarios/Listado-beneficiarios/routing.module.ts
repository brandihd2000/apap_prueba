import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListadoBeneficiariosComponent } from './listado-beneficiarios.component';

const routes: Routes = [
    {path: '', component: ListadoBeneficiariosComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingListadobeneficiariosModule {}