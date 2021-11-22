import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { EnviarMensajeComponent } from './enviar-mensaje.component';

const routes: Routes = [
    {path:  '', component: EnviarMensajeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingEnviarmensajeModule {}