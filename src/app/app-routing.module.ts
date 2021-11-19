import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasModule } from './Features/Page/Consulta/Tarjetas/tarjetas.module';

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
    path: 'Consulta/tarjetas', 
    loadChildren: () => import('./Features/Page/Consulta/Tarjetas/tarjetas.module').then((m) => m.TarjetasModule)
  },
  {
  path: 'Consulta/ConsultarNCF', 
  loadChildren: () => import('./Features/Page/Consulta/consultar-ncf/consultar-ncf.module').then((m) => m.ConsultarNCFModule)
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
