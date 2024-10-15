import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreFechamentoComponent } from './componentes/itensMenu/Fechamento/preFechamento/preFechamento.component';
import { ConfiguracoesComponent } from './componentes/itensMenu/Fechamento/configuracoes/configuracoes.component';
import { ApontamentosComponent } from './componentes/itensMenu/Fechamento/preFechamento/apontamentos/apontamentos.component';
import { EquipamentosComponent } from './componentes/itensMenu/Fechamento/preFechamento/equipamentos/equipamentos.component';
import { MtmComponent } from './componentes/itensMenu/Fechamento/preFechamento/mtm/mtm.component';
import { OperationsComponent } from './componentes/itensMenu/Fechamento/preFechamento/operations/operations.component';
import { OutrosComponent } from './componentes/itensMenu/Fechamento/preFechamento/outros/outros.component';
import { FixedBudgetComponent } from './componentes/itensMenu/Fechamento/preFechamento/fixed-budget/fixed-budget.component';
import { ContractsComponent } from './componentes/itensMenu/Fechamento/preFechamento/contracts/contracts.component';

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
    path: 'configuracoes',
    component: ConfiguracoesComponent
  },
  {
    path: 'apontamentos',
    component: ApontamentosComponent
  },
  {
    path: 'equipamentos',
    component: EquipamentosComponent
  },
  {
    path: 'mtm',
    component: MtmComponent
  },
  {
    path: 'operations',
    component: OperationsComponent
  },
  {
    path: 'outros',
    component: OutrosComponent
  },
  {
    path: 'fixedBudget',
    component: FixedBudgetComponent
  },
  {
    path: 'contracts',
    component: ContractsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
