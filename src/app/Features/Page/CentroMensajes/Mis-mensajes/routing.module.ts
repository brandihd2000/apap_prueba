import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { MisMensajesComponent } from './mis-mensajes.component';

const routes: Routes = [
    {path:  '', component: MisMensajesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingMismensajesModule {}