import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
