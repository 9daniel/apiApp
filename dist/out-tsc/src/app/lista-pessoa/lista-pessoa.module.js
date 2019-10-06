import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaPessoaPage } from './lista-pessoa.page';
const routes = [
    {
        path: '',
        component: ListaPessoaPage
    }
];
let ListaPessoaPageModule = class ListaPessoaPageModule {
};
ListaPessoaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ListaPessoaPage]
    })
], ListaPessoaPageModule);
export { ListaPessoaPageModule };
//# sourceMappingURL=lista-pessoa.module.js.map