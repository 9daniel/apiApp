import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UnknownService } from '../servicos/unknown.service';
let DadosPage = class DadosPage {
    constructor(un) {
        this.un = un;
        this.listaResource = [];
        this.getUnknowns();
    }
    ionViewWillEnter() {
        this.getUnknowns();
    }
    getUnknowns(page = 1) {
        // this.un.getUnknowns(page).subscribe(data => {
        // this.totalUsers = data["total"];
        // this.totalPaginas = data["total_pages"];
        //  this.paginaAtual = data["page"];
        //this.listaProfissao = data["data"];
        //  });
    }
    ngOnInit() {
    }
};
DadosPage = tslib_1.__decorate([
    Component({
        selector: 'app-dados',
        templateUrl: './dados.page.html',
        styleUrls: ['./dados.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UnknownService])
], DadosPage);
export { DadosPage };
//# sourceMappingURL=dados.page.js.map