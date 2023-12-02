import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ListaModuleComponent } from './page/lista-module/lista-module.component';
import { ModuleComponent } from './page/module/module.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: ListaModuleComponent
  },
  {
    path: 'create',
    canActivate: [ AuthGuard ],
    component: ModuleComponent
  },
  {
    path: 'edit/:id',
    canActivate: [ AuthGuard ],
    component: ModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
