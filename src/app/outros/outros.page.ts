import { Component, OnInit } from '@angular/core';
import { UnknownService } from '../servicos/unknown.service';

@Component({
  selector: 'app-outros',
  templateUrl: './outros.page.html',
  styleUrls: ['./outros.page.scss'],
})
export class OutrosPage implements OnInit {

  public listaOutros = [];
  constructor(public un: UnknownService) { this.getUnknowns() }

  ionViewWillEnter(){
    this.getUnknowns();
  } 

  public getUnknowns(page = 1) {
  
   this.un.getUnknowns(page).subscribe(data => {
     
     // this.totalUsers = data["total"];
     // this.totalPaginas = data["total_pages"];
    //  this.paginaAtual = data["page"];
      
      this.listaOutros = data["data"];
    });
  }

  ngOnInit() {
  }

}
