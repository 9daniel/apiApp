import { Component, OnInit } from '@angular/core';
import { UnknownService } from '../servicos/unknown.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  public listaResource = [];


  constructor(public un: UnknownService) { 
    this.getUnknowns()
  }

  ionViewWillEnter(){
    this.getUnknowns();
  }

  public getUnknowns(page = 1) {
  
   // this.un.getUnknowns(page).subscribe(data => {
     // this.totalUsers = data["total"];
     // this.totalPaginas = data["total_pages"];
    //  this.paginaAtual = data["page"];
      
      //this.listaProfissao = data["data"];
  //  });
  }


  ngOnInit() {
  }


 
}
