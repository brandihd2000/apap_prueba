import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MisServiciosFacturasComponent } from './mis-servicios-facturas.component';

const routes: Routes = [
    {path: '', component: MisServiciosFacturasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingMisserviciosfacturasModule {}