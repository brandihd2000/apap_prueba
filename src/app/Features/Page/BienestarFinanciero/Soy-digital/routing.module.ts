import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoyDigitalComponent } from './soy-digital.component';

const routes: Routes = [
    { path: '', component: SoyDigitalComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingSoydigitalModule {}