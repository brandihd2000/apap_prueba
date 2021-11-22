import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasModule } from './Features/Page/Consulta/Tarjetas/tarjetas.module';
import { MiscuentasModule } from './Features/Page/Transferir/Miscuentas/miscuentas.module';
import { BeneficiarioOtraEntidadModule } from './Features/Page/Transferir/Beneficiario-otra-entidad/beneficiario-otra-entidad.module';
import { TransferenciasPendientesModule } from './Features/Page/Transferir/Transferencias-pendientes/transferencias-pendientes.module';
import { TarjetasApapComponent } from './Features/Page/Pagar/Tarjetas-apap/tarjetas-apap.component';
import { TarjetasAPAPModule } from './Features/Page/Pagar/Tarjetas-apap/tarjetas-apap.module';
import { TarjetasBancosModule } from './Features/Page/Pagar/Tarjetas-bancos/tarjetas-bancos.module';
import { PrestamosApapModule } from './Features/Page/Pagar/Prestamos-apap/prestamos-apap.module';
import { PrestamosOtroBancoModule } from './Features/Page/Pagar/Prestamos-otros-banco/prestamos-otro-banco.module';
import { PagarFacturasModule } from './Features/Page/Pagar/Pagar-facturas/pagar-facturas.module';
import { ImpuestosDModule } from './Features/Page/Pagar/Impuestos-D/impuestos-d.module';
import { ListadoBeneficiariosModule } from './Features/Page/Beneficiarios/Listado-beneficiarios/listado-beneficiarios.module';
import { AgregarBeneficiarioModule } from './Features/Page/Beneficiarios/Agregar-beneficiario/agregar-beneficiario.module';
import { AvancesEfectivotcModule } from './Features/Page/ServiciosTarjetas/Avances-efectivotc/avances-efectivotc.module';
import { ActivarTarjetaModule } from './Features/Page/ServiciosTarjetas/Activar-tarjeta/activar-tarjeta.module';
import { ConsumoInteligenteModule } from './Features/Page/BienestarFinanciero/Consumo-inteligente/consumo-inteligente.module';
import { SoyDigitalModule } from './Features/Page/BienestarFinanciero/Soy-digital/soy-digital.module';
import { IndicadoresFinancierosModule } from './Features/Page/BienestarFinanciero/Indicadores-financieros/indicadores-financieros.module';
import { SimuladoresModule } from './Features/Page/BienestarFinanciero/Simuladores/simuladores.module';
import { HerramientasAsesoriaModule } from './Features/Page/BienestarFinanciero/Herramientas-asesoria/herramientas-asesoria.module';
import { ActualizarInformacionModule } from './Features/Page/MiPerfilAjustes/Actualizar-informacion/actualizar-informacion.module';
import { PreferenciasHOLAPAPModule } from './Features/Page/MiPerfilAjustes/Preferencias-holapap/preferencias-holapap.module';
import { AsignarPropositoProductosModule } from './Features/Page/MiPerfilAjustes/Asignar-proposito-productos/asignar-proposito-productos.module';
import { EnviarMensajeModule } from './Features/Page/CentroMensajes/Enviar-mensaje/enviar-mensaje.module';
import { MisMensajesModule } from './Features/Page/CentroMensajes/Mis-mensajes/mis-mensajes.module';
import { InglesModule } from './Features/Page/Idiomas/Ingles/ingles.module';
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
    path: 'Transferir/Miscuentas', 
    loadChildren: () => import('./Features/Page/Transferir/Miscuentas/miscuentas.module').then((m) => m.MiscuentasModule)
  },
  { 
    path: 'Transferir/BeneficiarioAPAP', 
    loadChildren: () => import('./Features/Page/Transferir/Beneficiario-apap/beneficiario-apap.module').then((m) => m.BeneficiarioAPAPModule)
  },
  { 
    path: 'Transferir/Beneficiario-otra-entidad', 
    loadChildren: () => import('./Features/Page/Transferir/Beneficiario-otra-entidad/beneficiario-otra-entidad.module').then((m) => m.BeneficiarioOtraEntidadModule)
  },
  { 
    path: 'Transferir/Transferencias-pendientes', 
    loadChildren: () => import('./Features/Page/Transferir/Transferencias-pendientes/transferencias-pendientes.module').then((m) => m.TransferenciasPendientesModule)
  },
  { 
    path: 'Pagar/Tarjetas-apap', 
    loadChildren: () => import('./Features/Page/Pagar/Tarjetas-apap/tarjetas-apap.module').then((m) => m.TarjetasAPAPModule)
  },
  { 
    path: 'Pagar/Tarjetas-bancos', 
    loadChildren: () => import('./Features/Page/Pagar/Tarjetas-bancos/tarjetas-bancos.module').then((m) => m.TarjetasBancosModule)
  },
  { 
    path: 'Pagar/Prestamos-apap', 
    loadChildren: () => import('./Features/Page/Pagar/Prestamos-apap/prestamos-apap.module').then((m) => m.PrestamosApapModule)
  },
  { 
    path: 'Pagar/Prestamos-otros-banco', 
    loadChildren: () => import('./Features/Page/Pagar/Prestamos-otros-banco/prestamos-otro-banco.module').then((m) => m.PrestamosOtroBancoModule)
  },
  { 
    path: 'Pagar/Pagar-facturas', 
    loadChildren: () => import('./Features/Page/Pagar/Pagar-facturas/pagar-facturas.module').then((m) => m.PagarFacturasModule)
  },
  { 
    path: 'Pagar/Impuestos-D', 
    loadChildren: () => import('./Features/Page/Pagar/Impuestos-D/impuestos-d.module').then((m) => m.ImpuestosDModule)
  },
  { 
    path: 'Beneficiarios/Listado-beneficiarios', 
    loadChildren: () => import('./Features/Page/Beneficiarios/Listado-beneficiarios/listado-beneficiarios.module').then((m) => m.ListadoBeneficiariosModule)
  },
  { 
    path: 'Beneficiarios/Agregar-beneficiario', 
    loadChildren: () => import('./Features/Page/Beneficiarios/Agregar-beneficiario/agregar-beneficiario.module').then((m) => m.AgregarBeneficiarioModule)
  },
  { 
    path: 'Beneficiarios/Mis-servicios-facturas', 
    loadChildren: () => import('./Features/Page/Beneficiarios/Mis-servicios-facturas/mis-servicios-facturas.module').then((m) => m.MisServiciosFacturasModule)
  },
  { 
    path: 'Beneficiarios/Agregar-proveedor', 
    loadChildren: () => import('./Features/Page/Beneficiarios/Agregar-proveedor/agregar-proveedor.module').then((m) => m.AgregarProveedorModule)
  },
  { 
    path: 'ServiciosTarjetas/Avance-efectivotc', 
    loadChildren: () => import('./Features/Page/ServiciosTarjetas/Avances-efectivotc/avances-efectivotc.module').then((m) => m.AvancesEfectivotcModule)
  },
  { 
    path: 'ServiciosTarjetas/Reportar-viaje', 
    loadChildren: () => import('./Features/Page/ServiciosTarjetas/Reportar-viaje/reportar-viaje.module').then((m) => m.ReportarViajeModule)
  },
  { 
    path: 'ServiciosTarjetas/Bloquear-tarjeta', 
    loadChildren: () => import('./Features/Page/ServiciosTarjetas/Bloquear-tarjeta/bloquear-tarjeta.module').then((m) => m.BloquearTarjetaModule)
  },
  { 
    path: 'ServiciosTarjetas/Activar-tarjeta', 
    loadChildren: () => import('./Features/Page/ServiciosTarjetas/Activar-tarjeta/activar-tarjeta.module').then((m) => m.ActivarTarjetaModule)
  },
  { 
    path: 'BienestarFinanciero/Metas-ahorro', 
    loadChildren: () => import('./Features/Page/BienestarFinanciero/Metas-ahorro/metas-ahorro.module').then((m) => m.MetasAhorroModule)
  },
  { 
    path: 'BienestarFinanciero/Consumo-inteligente', 
    loadChildren: () => import('./Features/Page/BienestarFinanciero/Consumo-inteligente/consumo-inteligente.module').then((m) => m.ConsumoInteligenteModule)
  },
  { 
    path: 'BienestarFinanciero/Soy-digital', 
    loadChildren: () => import('./Features/Page/BienestarFinanciero/Soy-digital/soy-digital.module').then((m) => m.SoyDigitalModule)
  },
  { 
    path: 'BienestarFinanciero/Indicadores-financieros', 
    loadChildren: () => import('./Features/Page/BienestarFinanciero/Indicadores-financieros/indicadores-financieros.module').then((m) => m.IndicadoresFinancierosModule)
  },
  { 
    path: 'BienestarFinanciero/Simuladores', 
    loadChildren: () => import('./Features/Page/BienestarFinanciero/Simuladores/simuladores.module').then((m) => m.SimuladoresModule)
  },
  { 
    path: 'BienestarFinanciero/Herramientas-asesoria', 
    loadChildren: () => import('./Features/Page/BienestarFinanciero/Herramientas-asesoria/herramientas-asesoria.module').then((m) => m.HerramientasAsesoriaModule)
  },
  { 
    path: 'MiPerfilAjustes/Cambiar-clave', 
    loadChildren: () => import('./Features/Page/MiPerfilAjustes/Cambiar-clave/cambiar-clave.module').then((m) => m.CambiarClaveModule)
  },
  { 
    path: 'MiPerfilAjustes/Actualizar-informacion', 
    loadChildren: () => import('./Features/Page/MiPerfilAjustes/Actualizar-informacion/actualizar-informacion.module').then((m) => m.ActualizarInformacionModule)
  },
  { 
    path: 'MiPerfilAjustes/Preferencias-holapap', 
    loadChildren: () => import('./Features/Page/MiPerfilAjustes/Preferencias-holapap/preferencias-holapap.module').then((m) => m.PreferenciasHOLAPAPModule)
  },
  { 
    path: 'MiPerfilAjustes/Asignar-proposito-productos', 
    loadChildren: () => import('./Features/Page/MiPerfilAjustes/Asignar-proposito-productos/asignar-proposito-productos.module').then((m) => m.AsignarPropositoProductosModule)
  },
  { 
    path: 'CentroMensajes/Enviar-mensaje', 
    loadChildren: () => import('./Features/Page/CentroMensajes/Enviar-mensaje/enviar-mensaje.module').then((m) => m.EnviarMensajeModule)
  },
  { 
    path: 'CentroMensajes/Mis-mensajes', 
    loadChildren: () => import('./Features/Page/CentroMensajes/Mis-mensajes/mis-mensajes.module').then((m) => m.MisMensajesModule)
  },
  { 
    path: 'Idiomas/Ingles', 
    loadChildren: () => import('./Features/Page/Idiomas/Ingles/ingles.module').then((m) => m.InglesModule)
  },
  { 
    path: 'Idiomas/Espanol', 
    loadChildren: () => import('./Features/Page/Idiomas/Espanol/espanol.module').then((m) => m.EspanolModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
