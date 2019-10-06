import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DadosPage } from './dados.page';
const routes = [
    {
        path: '',
        component: DadosPage
    }
];
let DadosPageModule = class DadosPageModule {
};
DadosPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DadosPage]
    })
], DadosPageModule);
export { DadosPageModule };
//# sourceMappingURL=dados.module.js.map