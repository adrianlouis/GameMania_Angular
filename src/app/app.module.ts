import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { BannerComponent } from './views/banner/banner.component';
import { DestaqueComponent } from './views/destaque/destaque.component';
import { LoginComponent } from './views/login/login.component';
import { LogComponent } from './views/log/log.component';
import { LancamentoComponent } from './views/lancamento/lancamento.component';
import { PrevendaComponent } from './views/prevenda/prevenda.component';
import { LojaComponent } from './views/loja/loja.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DetalhesComponent } from './views/detalhes/detalhes.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { MultiplayerComponent } from './views/multiplayer/multiplayer.component';
import { CartComponent } from './views/cart/cart.component';
import { PerfilComponent } from './views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    DestaqueComponent,
    LoginComponent,
    LogComponent,
    LancamentoComponent,
    PrevendaComponent,
    LojaComponent,
    NotFoundComponent,
    DetalhesComponent,
    CadastroComponent,
    MultiplayerComponent,
    CartComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
