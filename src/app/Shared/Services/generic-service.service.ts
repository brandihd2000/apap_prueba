import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import BaseEntity from '../Model/Base/base.model';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T extends BaseEntity> {

  public ApiUrl: String;

  constructor(public http: HttpClient ) { 
    this.ApiUrl = environment.ApiUrl;
  }

  public getAll(): Observable<T> {
   return this.http.get<T>(`${this.ApiUrl}`);
  }

  public getById(id: number) {
    return this.http.get(`${this.ApiUrl}/GetById/${id}`);
  }

  public Update(data: T) {
    return this.http.put(`${this.ApiUrl}/Update/${data.id}`, data);
  }

  public Create(data: T) {
    return this.http.post(`${this.ApiUrl}/Create`, data);

  }

  public Delete(id: number) {
   return this.http.delete(`${this.ApiUrl}/Delete/${id}`);
  }

}
