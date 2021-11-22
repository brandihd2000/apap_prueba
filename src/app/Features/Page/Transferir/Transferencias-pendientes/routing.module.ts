import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransferenciasPendientesComponent } from './transferencias-pendientes.component';

const routes: Routes = [
    {path: '', component: TransferenciasPendientesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingTransferenciasPendientesModule {}