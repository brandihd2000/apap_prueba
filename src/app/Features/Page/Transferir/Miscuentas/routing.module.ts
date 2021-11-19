import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MiscuentasComponent } from './miscuentas.component';

const routes: Routes = [
    {path: '', component: MiscuentasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingMiscuentasModule {}