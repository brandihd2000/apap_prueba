import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from '../example/example.component';
import { RoutingExampleModule } from './routing.module';
import { AddComponent } from './Component/add/add.component';
import {MatInputModule} from '@angular/material/input';
import { ServicesModule } from 'src/app/Shared/Services/services.module';



@NgModule({
  declarations: [
    ExampleComponent,
    AddComponent
    
  ],
  imports: [
    CommonModule,
    RoutingExampleModule,
    MatInputModule,
    ServicesModule
  ]
})
export class ExampleModule { }
