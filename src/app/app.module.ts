import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TegelModule } from '@scania/tegel-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreFechamentoComponent } from './componentes/itensMenu/Fechamento/pre-fechamento/pre-fechamento.component';
import { ConfiguracoesComponent } from './componentes/itensMenu/Fechamento/configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PreFechamentoComponent,
    ConfiguracoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TegelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
