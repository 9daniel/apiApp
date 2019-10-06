import { Component } from '@angular/core';
import { UsersService } from '../servicos/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public totalUsers = 0;
  public totalPaginas = 0;
  public paginaAtual = 0;

  public listaProfissao = [];
  /*
    {nome:"Daniel Moraes",  profissao:"Designer",          img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
    {nome:"Daniel Machado", profissao:"Codificador",       img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
    {nome:"Daniel Diego",   profissao:"Padeiro",           img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
    {nome:"Daniel Vitor",   profissao:"Jogador",           img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
    {nome:"Daniel Marcos",  profissao:"Gerente",           img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
    {nome:"Daniel Gallo",   profissao:"Designer",          img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
  ];*/

  constructor(public us: UsersService) {
    this.getUsers()
  }

  ionViewWillEnter(){
    this.getUsers();
  }

  public getUsers(page = 1) {
  
    this.us.getUsers(page).subscribe(data => {
      this.totalUsers = data["total"];
      this.totalPaginas = data["total_pages"];
      this.paginaAtual = data["page"];
      
      this.listaProfissao = data["data"];
    });
  }

}
