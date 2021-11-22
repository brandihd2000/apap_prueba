import { Component, OnInit } from '@angular/core';
import { OptionSidebar } from '../../Model/OptionSidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public OptionSiderbar: Array<OptionSidebar> = [];
  constructor() {

  }

  ngOnInit() {
    this.getOptionSiderbar();
  }


  public getOptionSiderbar() {
    this.OptionSiderbar = [
      {
        label: 'Consulta',
        icon: 'mdi mdi-account-search',
        subMenu: [{
          label: 'Todos mis Productos',
          icon: 'mdi mdi-star',
          url: 'Consulta/Todo-Producto'
        },
        {
          label: 'Cuentas',
          icon: 'mdi mdi-file-presentation-box',
          url: 'Consulta/Cuenta'
        },
        {
          label: 'Productos Familiares',
          icon: 'mdi mdi-account-outline',
        },
        {
          label: 'Instrumentos a plazos',
          icon: 'mdi mdi-calendar'
        },
        {
          label: 'Préstamos ',
          icon: 'mdi mdi-folder-multiple'
        },
        {
          label: 'Tarjetas',
          icon: 'mdi mdi-credit-card',
          url: 'Consulta/tarjetas'
        },
        {
          label: 'Histórico de transferencias',
          icon: 'mdi mdi-format-list-bulleted'
        },
        {
          label: 'Consulta NCF',
          icon: 'mdi mdi-twitter-retweet'
        },]
      },
      {
        label: 'Transferir',
        icon: 'mdi mdi-chevron-double-right',
        subMenu: [{
          label: 'A mis cuentas',
          icon: 'mdi mdi-twitter-retweet',
          url: 'Transferir/Miscuentas'

        },
        {
          label: 'A beneficiario en APAP',
          icon: 'mdi mdi-trending-neutral',
          url: 'Transferir/BeneficiarioAPAP'
        },
        {
          label: 'A beneficiario en otra entidad',
          icon: 'mdi mdi-transit-transfer',
          url: 'Transferir/Beneficiario-otra-entidad'

        },
        {
          label: 'Transferencias pendientes',
          icon: 'mdi mdi-format-list-bulleted',
          url: 'Transferir/Transferencias-pendientes'
        },]
      },
      {
        label: 'Pagar',
        icon: 'mdi mdi-library-books',
        subMenu: [{
          label: 'Tarjetas APAP',
          icon: 'mdi mdi-credit-card',
          url: 'Pagar/Tarjetas-apap'
        },
      {
        label: 'Tarjetas otros bancos',
          icon: 'mdi mdi-credit-card',
          url: 'Pagar/Tarjetas-bancos'
      },
      {
        label: 'Préstamos APAP',
          icon: 'mdi mdi-checkbox-marked-outline',
          url: 'Pagar/Prestamos-apap'
      },
      {
        label: 'Pagar préstamos en otros bancos',
          icon: 'mdi mdi-checkbox-marked-outline',
          url: 'Pagar/Prestamos-otros-banco'   
      },
      {
        label: 'Pagar facturas',
          icon: 'mdi mdi-calendar',
          url: 'Pagar/Pagar-facturas'
      },
      {
        label: 'Impuestos DGII',
          icon: 'mdi mdi-plus-circle',
          url: 'Pagar/Impuestos-D'
      },]
      },
      {
      label: 'Beneficiarios',
      icon: 'mdi mdi-account-outline',
      subMenu: [{
        label: 'Mi listado de beneficiarios',
        icon: 'mdi mdi-view-list',
        url: 'Beneficiarios/Listado-beneficiarios' 
      },
    {
      label: 'Agregar beneficiario',
        icon: 'mdi mdi-plus',
        url: 'Beneficiarios/Agregar-beneficiario' 
    },
    {
      label: 'Mis servicios & facturas',
        icon: 'mdi mdi-view-list',
        url: 'Beneficiarios/Mis-servicios-facturas'
    },
    {
      label: 'Agregar proveedor de servicios básicos',
        icon: 'mdi mdi-plus',
        url: 'Beneficiarios/Agregar-proveedor'
    },]
    },
    {
      label: 'Servicios de tarjetas',
      icon: 'mdi mdi-credit-card',
      subMenu: [{
        label: 'Avances de efectivo TC',
        icon: 'mdi mdi-checkbox-marked-outline',
        url: 'ServiciosTarjetas/Avance-efectivotc'
      },
    {
      label: 'Reportar viaje',
        icon: 'mdi mdi-credit-card',
        url: 'ServiciosTarjetas/Reportar-viaje'
    },
    {
      label: 'Bloquear esta tarjeta',
        icon: 'mdi mdi-wrench',
        url: 'ServiciosTarjetas/Bloquear-tarjeta'
    },
    {
      label: 'Activar tarjeta',
        icon: 'mdi mdi-wrench',
        url: 'ServiciosTarjetas/Activar-tarjeta'
    },]
    },
    {
      label: 'Mi bienestar financiero',
      icon: 'mdi mdi-thumb-up-outline',
      subMenu: [{
        label: 'Diseñar mis metas de ahorro',
        icon: 'mdi mdi-signal',
        url: 'BienestarFinanciero/Metas-ahorro'
      },
    {
      label: 'Consumo inteligente',
        icon: 'mdi mdi-cart',
        url: 'BienestarFinanciero/Consumo-inteligente'
    },
    {
      label: 'Soy Digital',
        icon: 'mdi mdi-emoticon',
        url: 'BienestarFinanciero/Soy-digital'   
    },
    {
      label: 'Indicadores financieros a conocer',
        icon: 'mdi mdi-view-list',
        url: 'BienestarFinanciero/Indicadores-financieros'    
    },
    {
      label: 'Simuladores',
        icon: 'mdi mdi-view-agenda',
        url: 'BienestarFinanciero/Simuladores' 
    },
    {
      label: 'Herramientas de asesoría financiera',
        icon: 'mdi mdi-paperclip',
        url: 'BienestarFinanciero/Herramientas-asesoria' 
    },]
    },
    {
      label: 'Mi perfil & ajustes',
      icon: 'mdi mdi mdi-wrench',
      subMenu: [{
        label: 'Cambiar clave',
        icon: 'mdi mdi-account-outline',
        url: 'MiPerfilAjustes/Cambiar-clave'
      },
    {
      label: 'Actualizar información de contacto',
        icon: 'mdi mdi mdi-wrench',
        url: 'MiPerfilAjustes/Actualizar-informacion'
    },
    {
      label: 'Preferencias HOLAPAP',
        icon: 'mdi mdi mdi-wrench',
        url: 'MiPerfilAjustes/Preferencias-holapap'
    },
    {
      label: 'Asignar el propósito de mis productos',
        icon: 'mdi mdi mdi-wrench',
        url: 'MiPerfilAjustes/Asignar-proposito-productos'
    },]
    },
    {
      label: 'Centro de mensajes',
      icon: 'mdi mdi-wechat',
      subMenu: [{
        label: 'Enviar mensaje',
        icon: 'mdi mdi-message-plus',
        url: 'CentroMensajes/Enviar-mensaje'
    },
    {
      label: 'Mis mensajes',
        icon: 'mdi mdi-email',
        url: 'CentroMensajes/Mis-mensajes'
    },]
    },
    {
      label: 'Idiomas',
      icon: 'mdi mdi-web',
      subMenu: [{
        label: 'Inglés',
        icon: '',
        url: 'Idiomas/Ingles'
      },
    {
      label: 'Español',
        icon: '',
        url: 'Idiomas/Espanol'
    },]
    },


    ]
  }
}

