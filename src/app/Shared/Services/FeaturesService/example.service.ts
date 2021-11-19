import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Example } from '../../Model/Features/example.model';
import { GenericService } from '../generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleService extends GenericService<Example> {

  constructor(public _http: HttpClient) {
    super(_http);
  }


  
 

  
}
