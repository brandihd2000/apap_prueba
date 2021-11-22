import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgregarProveedorComponent } from './agregar-proveedor.component';

const routes: Routes = [
    {path: '', component: AgregarProveedorComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingAgregarproveedorModule {}