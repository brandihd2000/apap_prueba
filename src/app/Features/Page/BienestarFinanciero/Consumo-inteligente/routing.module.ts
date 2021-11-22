import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConsumoInteligenteComponent } from './consumo-inteligente.component';

const routes: Routes = [
    { path: '', component: ConsumoInteligenteComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingConsumointeligenteModule {}