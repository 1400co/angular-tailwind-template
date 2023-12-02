import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: ListaUsuariosComponent
  },
  {
    path: 'create',
    canActivate: [ AuthGuard ],
    component: UsuariosComponent
  },
  {
    path: 'edit/:id',
    canActivate: [ AuthGuard ],
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
  ]
})
export class UsuariosRoutingModule { }
