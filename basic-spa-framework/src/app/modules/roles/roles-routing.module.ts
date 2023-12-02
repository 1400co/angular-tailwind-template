import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ListaRolesComponent } from './pages/lista-roles/lista-roles.component';
import { RolesComponent } from './pages/roles/roles.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: ListaRolesComponent
  },
  {
    path: 'create',
    canActivate: [ AuthGuard ],
    component: RolesComponent
  },
  {
    path: 'edit/:id',
    canActivate: [ AuthGuard ],
    component: RolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
