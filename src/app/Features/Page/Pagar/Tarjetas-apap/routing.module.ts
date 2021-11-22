import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { TarjetasApapComponent } from './tarjetas-apap.component';

const routes: Routes = [
    {path:  '', component: TarjetasApapComponent}
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingTarjetasapapModule {}