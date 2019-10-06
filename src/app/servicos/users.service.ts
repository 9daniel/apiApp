import { Injectable } from '@angular/core';
// HTTP Client correto para ionic 4. tem que ESCREVER
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://reqres.in/api/users'
  //private url = 'https://reqres.in//api/unknown'

  constructor(public http:HttpClient) { }

public getUsers(page = 1)
{
  return this.http.get(`${this.url}?page=${page}`);
}

public getUser(id)
{
  return this.http.get(`${this.url}/${id}`);
}

public SaveUser(user)
{
  return this.http.post(this.url, user,{
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    }
  });
}


}
