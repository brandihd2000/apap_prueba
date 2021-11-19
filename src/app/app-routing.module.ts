import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'example', pathMatch: 'full'
  },
  { 
    path: 'example', 
    loadChildren: () => import('./Features/Page/example/example.module').then((m) => m.ExampleModule)
  },
  { 
    path: 'Consulta/Todo-Producto', 
    loadChildren: () => import('./Features/Page/Consulta/TodoProducto/todo-producto.module').then((m) => m.TodoProductoModule)
  },
  { 
    path: 'Consulta/Cuenta', 
    loadChildren: () => import('./Features/Page/Consulta/Cuenta/cuenta.module').then((m) => m.CuentaModule)
  },
  { 
    path: 'Consulta/Prestamo', 
    loadChildren: () => import('./Features/Page/Consulta/Prestamo/prestamo.module').then((m) => m.PrestamoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
