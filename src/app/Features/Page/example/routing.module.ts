import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';

const routes: Routes = [
    { path: '', component: ExampleComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingExampleModule {}