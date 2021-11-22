import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasApapComponent } from './tarjetas-apap.component';
import { RoutingTarjetasapapModule } from './routing.module';



@NgModule({
  declarations: [
    TarjetasApapComponent
  ],
  imports: [
    CommonModule,
    RoutingTarjetasapapModule
  
  ]
})
export class TarjetasAPAPModule { }
