import { Injectable } from '@angular/core';
// HTTP Client correto para ionic 4. tem que ESCREVER
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnknownService {

  private url = 'https://reqres.in/api/unknown'

  constructor(public http:HttpClient) { }

  public getUnknowns(page = 1)
  {
    return this.http.get(`${this.url}?page=${page}`);
  }
  
  public getUnknown(id)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  
  public SaveUnknown(user)
  {
    return this.http.post(this.url, user,{
      headers: {
        'Content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      }
    });
  }
  
  
  }
  