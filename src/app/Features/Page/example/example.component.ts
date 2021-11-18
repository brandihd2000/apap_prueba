import { Component, OnInit } from '@angular/core';
import { Example } from 'src/app/Shared/Model/Features/example.model';
import { ExampleService } from 'src/app/Shared/Services/service.index';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  public data: any = [];
  constructor(public exampleService: ExampleService ) {
   
  }

  ngOnInit() {
    this.listExample();
  }

  public async listExample(){ 
    debugger;
    //const result = await this.exampleService.getAll();
    const result = (await this.exampleService.getAll().toPromise() as Example)
    console.log(result);
  }




}
