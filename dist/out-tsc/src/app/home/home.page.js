import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from '../servicos/users.service';
let HomePage = class HomePage {
    /*
      {nome:"Daniel Moraes",  profissao:"Designer",          img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
      {nome:"Daniel Machado", profissao:"Codificador",       img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
      {nome:"Daniel Diego",   profissao:"Padeiro",           img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
      {nome:"Daniel Vitor",   profissao:"Jogador",           img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
      {nome:"Daniel Marcos",  profissao:"Gerente",           img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
      {nome:"Daniel Gallo",   profissao:"Designer",          img:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"},
    ];*/
    constructor(us) {
        this.us = us;
        this.totalUsers = 0;
        this.totalPaginas = 0;
        this.paginaAtual = 0;
        this.listaProfissao = [];
        this.getUsers();
    }
    ionViewWillEnter() {
        this.getUsers();
    }
    getUsers(page = 1) {
        this.us.getUsers(page).subscribe(data => {
            this.totalUsers = data["total"];
            this.totalPaginas = data["total_pages"];
            this.paginaAtual = data["page"];
            this.listaProfissao = data["data"];
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UsersService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map