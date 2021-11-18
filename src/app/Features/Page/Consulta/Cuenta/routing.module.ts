import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CuentaComponent } from './cuenta.component';

const routes: Routes = [
    {path: '', component: CuentaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingCuentaModule {}