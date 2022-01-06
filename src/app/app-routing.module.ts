import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CartComponent } from './views/cart/cart.component';
import { ContatoComponent } from './views/contato/contato.component';
import { DetalhesComponent } from './views/detalhes/detalhes.component';
import { HomeComponent } from './views/home/home.component';
import { LancamentoComponent } from './views/lancamento/lancamento.component';
import { LogComponent } from './views/log/log.component';
import { LojaComponent } from './views/loja/loja.component';
import { MultiplayerComponent } from './views/multiplayer/multiplayer.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { PrevendaComponent } from './views/prevenda/prevenda.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contato", component: ContatoComponent},
  { path: "sobre", component: SobreComponent},
  { path: "log", component: LogComponent},
  { path: "lancamento", component: LancamentoComponent},
  { path: "prevenda", component: PrevendaComponent},
  { path: "loja", component: LojaComponent},
  { path: "detalhes", component: DetalhesComponent},
  { path: "cadastro", component: CadastroComponent},
  { path: "multiplayer", component: MultiplayerComponent},
  { path: "multiplayer/:id", component: MultiplayerComponent},
  { path: "cart", component: CartComponent},
  { path: "perfil", component: PerfilComponent},
  { path: "404", component: NotFoundComponent},
  { path: "**", redirectTo: "404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
