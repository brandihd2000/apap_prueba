import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransferHistoryComponent } from './transfer-history.component';


const routes: Routes = [
    {path: '', component: TransferHistoryComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingTransferHistoryModule {}