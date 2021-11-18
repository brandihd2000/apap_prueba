import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoProductoComponent } from './todo-producto.component';

const routes: Routes = [
    { path: '', component: TodoProductoComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingTodoProductoModule {}