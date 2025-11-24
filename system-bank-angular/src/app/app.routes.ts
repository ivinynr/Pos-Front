import { Routes } from '@angular/router';
import { CadastroCliente } from './pages/cliente/cadastro-cliente/cadastro-cliente';
import { ListagemCliente } from './pages/cliente/listagem-cliente/listagem-cliente';
import { LoginTemplate } from './pages/auth/login-template/login-template';
import { ListagemConta } from './pages/conta/listagem-conta/listagem-conta';
import { TransferenciaConta } from './pages/conta/components/transferencia-conta/transferencia-conta';
import { Deposito } from './pages/conta/components/deposito/deposito';
import { Saque } from './pages/conta/components/saque/saque';
import { CadastroConta } from './pages/conta/cadastro-conta/cadastro-conta';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [

  // 🔹 redireciona "/" para "/auth" quando não estiver logado
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  // 🔹 página de login
  {
    path: 'auth',
    component: LoginTemplate
  },

  // 🔹 área protegida
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'cliente', children: [
        { path: 'novo', component: CadastroCliente },
        { path: 'editar/:id', component: CadastroCliente },
        { path: '', component: ListagemCliente },
      ]},

      { path: 'conta', children: [
        { path: 'nova', component: CadastroConta },
        { path: 'editar/:id', component: CadastroConta },
        { path: 'saque', component: Saque },
        { path: 'deposito', component: Deposito },
        { path: 'transferencia', component: TransferenciaConta },
        { path: '', component: ListagemConta },
      ]},

      // página principal protegida
      { path: 'home', component: ListagemCliente },
    ]
  },

  // fallback
  { path: '**', redirectTo: 'auth' }
];
