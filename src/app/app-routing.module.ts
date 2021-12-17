import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { LancamentoComponent } from './views/lancamento/lancamento.component';
import { LogComponent } from './views/log/log.component';
import { LojaComponent } from './views/loja/loja.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
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
  { path: "404", component: NotFoundComponent},
  { path: "**", redirectTo: "404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
