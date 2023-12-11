import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleListComponent } from './pages/sample-list/sample-list.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { SampleFormComponent } from './pages/sample-form/sample-form.component';
import { SampleFormUiComponent } from './components/sample-form-ui/sample-form-ui.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: SampleListComponent
  },
  {
    path: 'detail/:id/:operation',
    canActivate: [ AuthGuard ],
    component: SampleFormUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleCrudRoutingModule { }
