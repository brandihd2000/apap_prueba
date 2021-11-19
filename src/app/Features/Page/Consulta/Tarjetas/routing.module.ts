import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TarjetasComponent } from './tarjetas.component';

const routes: Routes = [
    {path: '', component: TarjetasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingTarjetasModule {}