import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Metas } from './pages/metas/metas';
import { Estudos } from './pages/estudos/estudos';
import { Relatorios } from './pages/relatorios/relatorios';
import { Configuracoes } from './pages/configuracoes/configuracoes';

export const routes: Routes = [
    { path: '', component: Home, data: { title: 'Home' } },
    { path: 'estudos', component: Estudos, data: { title: 'Estudos' } },
    { path: 'metas', component: Metas, data: { title: 'Metas' } },
    { path: 'relatorios', component: Relatorios, data: { title: 'Relatórios' } },
    { path: 'configuracoes', component: Configuracoes, data: { title: 'Configurações' } },
];
