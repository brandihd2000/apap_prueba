import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PreferenciasHolapapComponent } from './preferencias-holapap.component';

const routes: Routes = [
    {path:  '', component: PreferenciasHolapapComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingPreferenciasholapapModule {}