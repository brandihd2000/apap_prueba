import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BloquearTarjetaComponent } from './bloquear-tarjeta.component';

const routes: Routes = [
    {path: '', component: BloquearTarjetaComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingBloqueartarjetaModule {}