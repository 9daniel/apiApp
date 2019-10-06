import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../servicos/filmes.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {
 

  
  public listaFilmes = [];
  public busca;
  constructor(public fil: FilmesService) { }

  ionViewWillEnter(){
    
  }

  public buscarFilme($event){
    this.fil.buscarFilmes(this.busca).subscribe(data => {
      console.log(data);
      this.listaFilmes = data["Search"]
    });
  }


  
    

  ngOnInit() {
  }

}
