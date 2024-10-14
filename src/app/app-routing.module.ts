import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreFechamentoComponent } from './componentes/itensMenu/Fechamento/pre-fechamento/pre-fechamento.component';
import { ConfiguracoesComponent } from './componentes/itensMenu/Fechamento/configuracoes/configuracoes.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'preFechamento',
    component: PreFechamentoComponent
  },
  {
    path: 'Configuracoes',
    component: ConfiguracoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
