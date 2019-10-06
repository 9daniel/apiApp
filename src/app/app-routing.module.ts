import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'dados', loadChildren: './dados/dados.module#DadosPageModule' },
  { path: 'lista-pessoa', loadChildren: './lista-pessoa/lista-pessoa.module#ListaPessoaPageModule' },
  { path: 'outros', loadChildren: './outros/outros.module#OutrosPageModule' },
  { path: 'filme', loadChildren: './filme/filme.module#FilmePageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'music', loadChildren: './music/music.module#MusicPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
