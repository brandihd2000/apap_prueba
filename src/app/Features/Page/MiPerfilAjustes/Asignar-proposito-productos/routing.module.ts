import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AsignarPropositoProductosComponent } from './asignar-proposito-productos.component';

const routes: Routes = [
    {path:  '', component: AsignarPropositoProductosComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingAsignarpropositoproductosModule {}