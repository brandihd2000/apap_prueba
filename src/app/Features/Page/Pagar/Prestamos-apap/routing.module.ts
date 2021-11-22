import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PrestamosApapComponent } from './prestamos-apap.component';

const routes: Routes = [
    {path:  '', component: PrestamosApapComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingPrestamosapapModule {}