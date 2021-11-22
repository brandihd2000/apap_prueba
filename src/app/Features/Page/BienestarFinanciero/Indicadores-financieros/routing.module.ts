import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndicadoresFinancierosComponent } from './indicadores-financieros.component';

const routes: Routes = [
    { path: '', component: IndicadoresFinancierosComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingIndicadoresfinancierosModule {}