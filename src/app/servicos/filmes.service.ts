import { Injectable } from '@angular/core';
// HTTP Client correto para ionic 4. tem que ESCREVER
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private url = 'http://www.omdbapi.com/?apikey=27020967';


  constructor(public http:HttpClient) { }

  public buscarFilmes(busca : string)
  {
    return this.http.get(`${this.url}&s=${encodeURI(busca)}`);
  }
 



}
