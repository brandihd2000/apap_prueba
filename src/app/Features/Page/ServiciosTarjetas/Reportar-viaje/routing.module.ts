import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportarViajeComponent } from './reportar-viaje.component';

const routes: Routes = [
    {path: '', component: ReportarViajeComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingReportarviajeModule {}