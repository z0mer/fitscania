import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TegelModule } from '@scania/tegel-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreFechamentoComponent } from './componentes/itensMenu/Fechamento/preFechamento/preFechamento.component';
import { ConfiguracoesComponent } from './componentes/itensMenu/Fechamento/configuracoes/configuracoes.component';
import { ApontamentosComponent } from './componentes/itensMenu/Fechamento/preFechamento/apontamentos/apontamentos.component';
import { EquipamentosComponent } from './componentes/itensMenu/Fechamento/preFechamento/equipamentos/equipamentos.component';
import { MtmComponent } from './componentes/itensMenu/Fechamento/preFechamento/mtm/mtm.component';
import { OperationsComponent } from './componentes/itensMenu/Fechamento/preFechamento/operations/operations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PreFechamentoComponent,
    ConfiguracoesComponent,
    ApontamentosComponent,
    EquipamentosComponent,
    MtmComponent,
    OperationsComponent,
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
