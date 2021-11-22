import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CambiarClaveComponent } from './cambiar-clave.component';

const routes: Routes = [
    {path:  '', component: CambiarClaveComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingCambiarclaveModule {}