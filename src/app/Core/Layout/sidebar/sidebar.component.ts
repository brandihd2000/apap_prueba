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
          icon: 'mdi mdi-twitter-retweet'
        },
        {
          label: 'A beneficiario en APAP',
          icon: 'mdi mdi-trending-neutral'
        },
        {
          label: 'A beneficiario en otra entidad',
          icon: 'mdi mdi-transit-transfer'
        },
        {
          label: 'Transferencias pendientes',
          icon: 'mdi mdi-format-list-bulleted'
        },]
      },
      {
        label: 'Pagar',
        icon: 'mdi mdi-library-books',
        subMenu: [{
          label: 'Tarjetas APAP',
          icon: 'mdi mdi-credit-card'
        },
      {
        label: 'Tarjetas otros bancos',
          icon: 'mdi mdi-credit-card'
      },
      {
        label: 'Préstamos APAP',
          icon: 'mdi mdi-checkbox-marked-outline'
      },
      {
        label: 'Pagar préstamos en otros bancos',
          icon: 'mdi mdi-checkbox-marked-outline'
      },
      {
        label: 'Pagar facturas',
          icon: 'mdi mdi-calendar'
      },
      {
        label: 'Impuestos DGII',
          icon: 'mdi mdi-plus-circle'
      },]
      },
      {
      label: 'Beneficiarios',
      icon: 'mdi mdi-account-outline',
      subMenu: [{
        label: 'Mi listado de beneficiarios',
        icon: 'mdi mdi-view-list'
      },
    {
      label: 'Agregar beneficiario',
        icon: 'mdi mdi-plus'
    },
    {
      label: 'Mis servicios & facturas',
        icon: 'mdi mdi-view-list'
    },
    {
      label: 'Agregar proveedor de servicios básicos',
        icon: 'mdi mdi-plus'
    },]
    },
    {
      label: 'Servicios de tarjetas',
      icon: 'mdi mdi-credit-card',
      subMenu: [{
        label: 'Avances de efectivo TC',
        icon: 'mdi mdi-checkbox-marked-outline'
      },
    {
      label: 'Reportar viaje',
        icon: 'mdi mdi-credit-card'
    },
    {
      label: 'Bloquear esta tarjeta',
        icon: 'mdi mdi-wrench'
    },
    {
      label: 'Activar tarjeta',
        icon: 'mdi mdi-wrench'
    },]
    },
    {
      label: 'Mi bienestar financiero',
      icon: 'mdi mdi-thumb-up-outline',
      subMenu: [{
        label: 'Diseñar mis metas de ahorro',
        icon: 'mdi mdi-signal'
      },
    {
      label: 'Consumo inteligente',
        icon: 'mdi mdi-cart'
    },
    {
      label: 'Soy Digital',
        icon: 'mdi mdi-emoticon'
    },
    {
      label: 'Indicadores financieros a conocer',
        icon: 'mdi mdi-view-list'
    },
    {
      label: 'Simuladores',
        icon: 'mdi mdi-view-agenda'
    },
    {
      label: 'Herramientas de asesoría financiera',
        icon: 'mdi mdi-paperclip'
    },]
    },
    {
      label: 'Mi perfil & ajustes',
      icon: 'mdi mdi mdi-wrench',
      subMenu: [{
        label: 'Cambiar clave',
        icon: 'mdi mdi-account-outline'
      },
    {
      label: 'Actualizar información de contacto',
        icon: 'mdi mdi mdi-wrench'
    },
    {
      label: 'Preferencias HOLAPAP',
        icon: 'mdi mdi mdi-wrench'
    },
    {
      label: 'Asignar el propósito de mis productos',
        icon: 'mdi mdi mdi-wrench'
    },]
    },
    {
      label: 'Centro de mensajes',
      icon: 'mdi mdi-wechat',
      subMenu: [{
        label: 'Enviar mensaje',
        icon: 'mdi mdi-message-plus'
      },
    {
      label: 'Mis mensajes',
        icon: 'mdi mdi-email'
    },]
    },
    {
      label: 'Idiomas',
      icon: 'mdi mdi-web',
      subMenu: [{
        label: 'Inglés',
        icon: ''
      },
    {
      label: 'Español',
        icon: ''
    },]
    },


    ]
  }
}

