import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConsultarNCFComponent } from './consultar-ncf.component';

const routes: Routes = [
    {path: '', component: ConsultarNCFComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingConsultarNCFModule {}