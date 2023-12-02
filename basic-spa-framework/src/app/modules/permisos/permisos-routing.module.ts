import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ListaPermisosComponent } from './pages/lista-permisos/lista-permisos.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: ListaPermisosComponent
  },
  {
    path: 'create',
    canActivate: [ AuthGuard ],
    component: PermisosComponent
  },
  {
    path: 'edit/:id',
    canActivate: [ AuthGuard ],
    component: PermisosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRoutingModule { }
