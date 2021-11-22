import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HerramientasAsesoriaComponent } from './herramientas-asesoria.component';

const routes: Routes = [
    { path: '', component: HerramientasAsesoriaComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingHerramientasasesoriaModule {}