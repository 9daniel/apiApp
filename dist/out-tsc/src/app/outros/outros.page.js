import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UnknownService } from '../servicos/unknown.service';
let OutrosPage = class OutrosPage {
    constructor(un) {
        this.un = un;
        this.listaOutros = [];
        this.getUnknowns();
    }
    ionViewWillEnter() {
        this.getUnknowns();
    }
    getUnknowns(page = 1) {
        this.un.getUnknowns(page).subscribe(data => {
            // this.totalUsers = data["total"];
            // this.totalPaginas = data["total_pages"];
            //  this.paginaAtual = data["page"];
            this.listaOutros = data["data"];
        });
    }
    ngOnInit() {
    }
};
OutrosPage = tslib_1.__decorate([
    Component({
        selector: 'app-outros',
        templateUrl: './outros.page.html',
        styleUrls: ['./outros.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UnknownService])
], OutrosPage);
export { OutrosPage };
//# sourceMappingURL=outros.page.js.map