import { PermisosModule } from './../modules/permisos/permisos.module';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'demo',
        loadChildren: () =>
          import('../modules/sample-crud/sample-crud.module').then((m) => m.SampleCrudModule),
      },
      {
        path: 'home',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'usuarios',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
      {
        path: 'roles',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: 'modules',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/module/module.module').then((m) => m.ModuleModule),
      },
      {
        path: 'permisos',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/permisos/permisos.module').then((m) => m.PermisosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
