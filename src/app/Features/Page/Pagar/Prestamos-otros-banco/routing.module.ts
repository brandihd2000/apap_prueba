import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PrestamosOtrosBancoComponent } from './prestamos-otros-banco.component';

const routes: Routes = [
    {path:  '', component: PrestamosOtrosBancoComponent}
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingPrestamosotrobancoModule {}