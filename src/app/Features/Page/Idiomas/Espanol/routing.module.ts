import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { EspanolComponent } from './espanol.component';

const routes: Routes = [
    {path:  '', component: EspanolComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingEspanolModule {}