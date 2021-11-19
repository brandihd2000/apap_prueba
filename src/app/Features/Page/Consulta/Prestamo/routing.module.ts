import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrestamoComponent } from './prestamo.component';

const routes: Routes = [
    { path: '', component: PrestamoComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingPrestamoModule {}