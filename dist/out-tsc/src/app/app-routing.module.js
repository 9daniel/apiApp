import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
    { path: 'dados', loadChildren: './dados/dados.module#DadosPageModule' },
    { path: 'lista-pessoa', loadChildren: './lista-pessoa/lista-pessoa.module#ListaPessoaPageModule' },
    { path: 'outros', loadChildren: './outros/outros.module#OutrosPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map