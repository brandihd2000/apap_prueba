import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ImpuestosDComponent } from './impuestos-d.component';

const routes: Routes = [
    {path:  '', component: ImpuestosDComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingImpuestosDModule {}