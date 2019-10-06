import { Injectable } from '@angular/core';
// HTTP Client correto para ionic 4. tem que ESCREVER
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url = 'https://reqres.in/api/register'

  constructor(public http:HttpClient) { }

  
  public getRegistros(page = 1)
  {
    return this.http.get(`${this.url}?page=${page}`);
  }
  
  public getRegistro(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  
  public SaveRegistro(registro)
  {
    return this.http.post(this.url, registro,{
      headers: {
        'Content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      }
    });
  }
  








}
