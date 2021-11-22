import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AvancesEfectivotcComponent } from './avances-efectivotc.component';

const routes: Routes = [
    {path: '', component: AvancesEfectivotcComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingAvancesefectivotcModule {}