import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'servicos-enviados', loadChildren: './servicos-enviados/servicos-enviados.module#ServicosEnviadosPageModule' },
  { path: 'propostas', loadChildren: './propostas/propostas.module#PropostasPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'tornar-se-servidor', loadChildren: './tornar-se-servidor/tornar-se-servidor.module#TornarSeServidorPageModule' },
  { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },
  { path: 'chat-prestador', loadChildren: './chat-prestador/chat-prestador.module#ChatPrestadorPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
