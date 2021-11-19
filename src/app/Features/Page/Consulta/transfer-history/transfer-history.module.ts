import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferHistoryComponent } from './transfer-history.component';
import { RoutingTransferHistoryModule } from './routing.module';



@NgModule({
  declarations: [
    TransferHistoryComponent
  ],
  imports: [
    CommonModule,
    RoutingTransferHistoryModule
  ]
})
export class TransferHistoryModule { }
