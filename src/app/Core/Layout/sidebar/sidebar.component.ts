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
          label: 'Prestamos',
          icon: 'mdi mdi-folder-multiple',
          url: 'Consulta/Prestamo'
        },
        {
          label: 'Tarjetas',
          icon: 'mdi mdi-credit-card',
          url: 'Consulta/tarjetas'
        },
        {
          label: 'Historico de Transferencias',
          icon: 'mdi mdi-format-list-bulleted'
        },
        {
          label: 'Consulta NCF',
          icon: 'mdi mdi-twitter-retweet',
          url: 'Consulta/ConsultarNCF'
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
        icon: '',
        subMenu: [{
          label: 'prueba',
          icon: ''
        }]
      }
    ]
  }
}

