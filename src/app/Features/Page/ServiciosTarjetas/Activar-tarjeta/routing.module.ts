import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActivarTarjetaComponent } from './activar-tarjeta.component';

const routes: Routes = [
    {path: '', component: ActivarTarjetaComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingActivartarjetaModule {}