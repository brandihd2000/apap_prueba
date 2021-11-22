import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { InglesComponent } from './ingles.component';

const routes: Routes = [
    {path:  '', component: InglesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingInglesModule {}