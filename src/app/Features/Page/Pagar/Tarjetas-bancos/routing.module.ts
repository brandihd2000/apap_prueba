import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { TarjetasBancosComponent } from './tarjetas-bancos.component';

const routes: Routes = [
    {path:  '', component: TarjetasBancosComponent}   
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingTarjetasbancosModule {}