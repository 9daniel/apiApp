import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CadastroPage } from './cadastro.page';
const routes = [
    {
        path: '',
        component: CadastroPage
    }
];
let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CadastroPage]
    })
], CadastroPageModule);
export { CadastroPageModule };
//# sourceMappingURL=cadastro.module.js.map