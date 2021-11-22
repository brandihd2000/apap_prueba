import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ActualizarInformacionComponent } from './actualizar-informacion.component';

const routes: Routes = [
    {path:  '', component: ActualizarInformacionComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingActualizarinformacionModule {}