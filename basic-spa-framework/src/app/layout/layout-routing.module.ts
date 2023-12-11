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
        path: 'home',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'demo',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../modules/sample-crud/sample-crud.module').then((m) => m.SampleCrudModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
