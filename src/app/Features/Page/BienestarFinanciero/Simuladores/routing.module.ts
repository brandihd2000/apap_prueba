import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SimuladoresComponent } from './simuladores.component';

const routes: Routes = [
    { path: '', component: SimuladoresComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingSimuladoresModule {}