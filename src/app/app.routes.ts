import { Routes } from '@angular/router';
import { PrivateLayout } from './layouts/private-layout/private-layout';
import { AuthPage } from './pages/auth/auth.page';

import { Home } from './pages/home/home';
import { Estudos } from './pages/estudos/estudos';
import { Metas } from './pages/metas/metas';
import { Relatorios } from './pages/relatorios/relatorios';
import { Configuracoes } from './pages/configuracoes/configuracoes';

export const routes: Routes = [

  { path: 'auth', component: AuthPage },

  { path: '', component: PrivateLayout, children: [
      { path: '', component: Home, data: { title: 'Home' } },
      { path: 'estudos', component: Estudos, data: { title: 'Estudos' } },
      { path: 'metas', component: Metas, data: { title: 'Metas' } },
      { path: 'relatorios', component: Relatorios, data: { title: 'Relatórios' } },
      { path: 'configuracoes', component: Configuracoes, data: { title: 'Configurações' } },
    ],
  },
];