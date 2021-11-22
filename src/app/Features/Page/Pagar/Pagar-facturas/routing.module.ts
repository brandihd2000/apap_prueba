import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PagarFacturasComponent } from './pagar-facturas.component';

const routes: Routes = [
    {path:  '', component: PagarFacturasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingPagarfacturasModule {}